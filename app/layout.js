import "./globals.css";
import Nav from "../components/Nav";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  title: "SYREN — Personal Branding for Healthcare Leaders",
  description:
    "SYREN is a personal branding agency helping doctors, dentists, aesthetic practitioners and healthcare experts become recognised leaders in their industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter+Tight:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
