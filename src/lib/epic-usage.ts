/**
 * EPIC AI Dashboard - API Usage Reporting
 * Reports AI API usage for cost tracking
 */

interface UsageReport {
    model: string
    inputTokens: number
    outputTokens: number
    endpoint: string
    requestType: string
}

/**
 * Reports API usage to the EPIC AI Dashboard
 * Call this after every AI API call that returns token usage
 */
export async function reportUsage({
    model,
    inputTokens,
    outputTokens,
    endpoint,
    requestType
}: UsageReport): Promise<void> {
    const apiKey = process.env.EPIC_API_KEY

    if (!apiKey) {
        // Silently skip if API key not configured
        return
    }

    try {
        await fetch('https://www.epicai.ai/api/report-usage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify({
                model,
                inputTokens,
                outputTokens,
                endpoint,
                requestType
            })
        })
    } catch (err) {
        console.error('EPIC AI usage report failed:', err)
    }
}

/**
 * Helper for OpenAI API responses
 */
export function reportOpenAIUsage(
    response: { usage?: { prompt_tokens: number; completion_tokens: number } },
    model: string,
    endpoint: string,
    requestType: string = 'chat'
): void {
    if (response.usage) {
        reportUsage({
            model,
            inputTokens: response.usage.prompt_tokens,
            outputTokens: response.usage.completion_tokens,
            endpoint,
            requestType
        })
    }
}

/**
 * Helper for Anthropic API responses
 */
export function reportAnthropicUsage(
    response: { usage?: { input_tokens: number; output_tokens: number } },
    model: string,
    endpoint: string,
    requestType: string = 'chat'
): void {
    if (response.usage) {
        reportUsage({
            model,
            inputTokens: response.usage.input_tokens,
            outputTokens: response.usage.output_tokens,
            endpoint,
            requestType
        })
    }
}
