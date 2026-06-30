import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Happy Raksha Bandhan 💖",
  description:
    "A beautiful Raksha Bandhan surprise filled with love, memories, and a heartfelt letter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}

        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x031q9eia5");
          `}
        </Script>
      </body>
    </html>
  );
}