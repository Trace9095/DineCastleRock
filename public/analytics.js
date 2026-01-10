(function() {
  'use strict';
  if (typeof window === 'undefined') return;

  const ENDPOINT = 'https://www.epicai.ai/api/report-analytics';
  const API_KEY = 'dine-castle-rock-b41d347095e923e7de267009982bf1f9';

  const getVisitorId = () => {
    try {
      let id = localStorage.getItem('_epic_vid');
      if (!id) {
        id = 'v_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
        localStorage.setItem('_epic_vid', id);
      }
      return id;
    } catch { return 'v_' + Math.random().toString(36).substr(2, 9); }
  };

  const getSessionId = () => {
    try {
      let id = sessionStorage.getItem('_epic_sid');
      if (!id) {
        id = 's_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
        sessionStorage.setItem('_epic_sid', id);
      }
      return id;
    } catch { return 's_' + Math.random().toString(36).substr(2, 9); }
  };

  const getDevice = () => {
    const ua = navigator.userAgent;
    if (/Mobile|Android|iPhone|iPad/.test(ua)) return /iPad|Tablet/.test(ua) ? 'tablet' : 'mobile';
    return 'desktop';
  };

  const getBrowser = () => {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    return 'Other';
  };

  const getOS = () => {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (/iOS|iPhone|iPad/.test(ua)) return 'iOS';
    return 'Other';
  };

  const track = (type, extra = {}) => {
    try {
      const data = {
        type,
        url: location.href,
        path: location.pathname,
        title: document.title,
        referrer: document.referrer,
        sessionId: getSessionId(),
        visitorId: getVisitorId(),
        device: getDevice(),
        browser: getBrowser(),
        os: getOS(),
        screenWidth: screen.width,
        screenHeight: screen.height,
        language: navigator.language,
        timestamp: new Date().toISOString(),
        ...extra
      };

      // IMPORTANT: Use text/plain to avoid CORS preflight requests
      // The server parses JSON regardless of content-type header
      const json = JSON.stringify(data);
      const blob = new Blob([json], { type: 'text/plain' });

      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT + '?key=' + API_KEY, blob);
      } else {
        // Fallback for browsers without sendBeacon
        fetch(ENDPOINT + '?key=' + API_KEY, {
          method: 'POST',
          body: json,
          headers: { 'Content-Type': 'text/plain' },
          mode: 'no-cors',       // Prevents CORS errors (response is opaque)
          credentials: 'omit',   // Don't send cookies
          keepalive: true
        }).catch(() => {});
      }
    } catch (e) { console.warn('[Analytics]', e); }
  };

  let startTime = Date.now();
  let tracked = false;

  const init = () => {
    if (tracked) return;
    tracked = true;

    try {
      if (!sessionStorage.getItem('_epic_started')) {
        sessionStorage.setItem('_epic_started', '1');
        track('session_start');
      }
    } catch {}

    track('pageview');
  };

  // Handle SPA navigation
  let lastPath = location.pathname;
  const checkNav = () => {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      track('pageview');
    }
  };

  // Initialize
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  // SPA support
  setInterval(checkNav, 1000);

  // Session end (may be blocked by some browsers - that's OK)
  try {
    window.addEventListener('pagehide', () => {
      track('session_end', { duration: Math.round((Date.now() - startTime) / 1000) });
    });
  } catch {}

  window.epicTrack = (name, data = {}) => track('event', { eventName: name, eventData: data });
})();
