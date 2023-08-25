
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
};

export default function Layout({ children }) {
  const font = inter.className;

  return (
    <html lang="en">
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
