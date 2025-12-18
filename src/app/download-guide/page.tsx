import { buildMetadata } from "../seo";
import DownloadGuideClientPage from "@/components/download-guide-client-page";

export const metadata = buildMetadata({
  title: "Download Empathetic ERP Guide | DAX Software Solutions",
  description: "Download chapters of our Empathetic ERP Guide to learn about user needs, stakeholder engagement, change management, and more.",
  canonicalPath: "/download-guide",
});

export default function DownloadGuideLandingPage() {
    return <DownloadGuideClientPage />;
}
