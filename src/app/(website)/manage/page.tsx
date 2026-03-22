import type { Metadata } from "next";
import { ManageClient } from "@/components/manage/ManageClient";

export const metadata: Metadata = {
  title: "Manage Your Listing | Dine Castle Rock",
  description: "Manage your Dine Castle Rock restaurant listing subscription — update billing, view invoices, or cancel anytime.",
  alternates: { canonical: "https://dinecastlerock.co/manage" },
};

export default function ManagePage() {
  return <ManageClient />;
}
