import { PropsWithChildren } from "react";
import "../styles/globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
