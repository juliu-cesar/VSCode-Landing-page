import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <body style={{backgroundColor: "#303030"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
