import MainHeader from "@/components/main-header/MainHeader";
import "./globals.css";
import MainHeaderBackground from "@/components/main-header/MainHeaderBackground";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
