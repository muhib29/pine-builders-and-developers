import React from "react"
export const metadata = {
  title: "Sanity Studio | Premier Construction",
  description: "Content management for Premier Construction website",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
