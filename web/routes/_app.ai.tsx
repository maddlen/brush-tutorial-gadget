import { useState } from "react";
import aiFeaturesImage from "../images/ai-features.png";

export default function AIFeatures() {
  const [testing, setTesting] = useState(false);
  const [banner, setBanner] = useState<{ tone: "success" | "critical" | "info" | "warning"; message: string } | null>(null);

  const handleTestAI = async () => {
    setTesting(true);
    setBanner(null);
    try {
      const res = await fetch("/ai/test", { method: "POST" });
      if (res.ok) {
        const body = await res.json() as { message: string };
        setBanner({ tone: "success", message: body.message });
      } else {
        setBanner({ tone: "critical", message: `AI test failed: ${res.statusText}` });
      }
    } catch {
      setBanner({ tone: "critical", message: "Failed to reach the AI test endpoint." });
    } finally {
      setTesting(false);
    }
  };

  return (
    <s-page heading="AI Features">
      <s-section accessibilityLabel="Hero section">
        <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
          <s-box maxInlineSize="400px">
            <s-image
              aspectRatio="2/1"
              src={aiFeaturesImage}
              alt="Illustration of AI features powering a Shopify store"
              loading="lazy"
              borderRadius="large-200"
            />
          </s-box>
          <s-grid justifyItems="center" maxInlineSize="500px" gap="base">
            <s-stack alignItems="center">
              <s-heading>Supercharge Your Store with AI</s-heading>
              <s-paragraph>
                Harness the power of artificial intelligence to automate tasks, personalize
                shopper experiences, and unlock insights that drive growth. Right inside your Shopify app.
              </s-paragraph>
            </s-stack>
          </s-grid>
        </s-grid>
      </s-section>

      <s-section heading="Test AI Integration">
        <s-stack direction="block" gap="base">
          <s-paragraph>
            Run a test against the AI endpoint to verify your integration is working correctly.
          </s-paragraph>
          {banner && (
            <s-banner tone={banner.tone} dismissible>
              {banner.message}
            </s-banner>
          )}
          <s-button variant="primary" loading={testing} onClick={handleTestAI}>
            Test AI
          </s-button>
        </s-stack>
      </s-section>
    </s-page>
  );
}
