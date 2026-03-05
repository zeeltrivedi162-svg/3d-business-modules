import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "3D Business Models",
  description: "3D Design and Laser Scanning Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}