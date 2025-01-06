import MainHeader from "@/components/main-header/MainHeader";
import "./globals.css";
import MainHeaderBackground from "@/components/main-header/MainHeaderBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Browse and share food recipes",
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
