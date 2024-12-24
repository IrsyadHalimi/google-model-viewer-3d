import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the CDN for Model Viewer */}
        <script
          src="https://cdn.jsdelivr.net/npm/@google/model-viewer@2.0.1/dist/model-viewer.min.js"
          type="module"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
