import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "김서연 | Frontend Developer",
  description:
    "어떤 상황에서도 유연하게 적응하며 자신의 역량을 드러내는 프론트엔드 개발자 김서연의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} antialiased`}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
