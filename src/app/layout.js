
import Navbar from "components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NewSidebar from "components/sidebar/newSidebar";
import ThemeContextProvider from "utils/themeContext";
import PostContextProvider from "utils/postContext";
import Footer from "components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "chimes",
  description: "Created by SanC005",
  creator: 'SanC005',
  images: [
    {
      url: 'https://nextjs.org/og.png',
      width: 800,
      height: 600,
    },
    {
      url: 'https://nextjs.org/og-alt.png',
      width: 1800,
      height: 1600,
      alt: 'My custom alt',
    },
  ],
  // generator: 'Next.js',
  // applicationName: 'Next.js',
  // referrer: 'origin-when-cross-origin',
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // authors: [{ name: 'San' }, { name: 'San', url: 'https://nextjs.org' }],
  // colorScheme: 'dark',
  // publisher: 'SanC005',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
};

export default function Layout({ children }) {
  const font = inter.className;

  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      
      <body>
        <ThemeContextProvider>
        <div className="h-16">
          <Navbar />
        </div>

        <div className="flex">
          <div className="bg-sky-950 flex flex-col invisible md:visible">
            <NewSidebar />
          </div>
          <PostContextProvider>
          <div className="absolute start-0 end-0 md:start-56 md:end-0 lg:start-56 lg:end-0">
            {children}
            {/* <Footer/> */}
          </div>
        </PostContextProvider>
        </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
