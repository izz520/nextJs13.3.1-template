
export const metadata = {
  title: "NextJs13.3.1-template",
  description:
    "Learn how to build a full-stack feedback application in Next.js 13 app directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
