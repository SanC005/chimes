import Navbar from "components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NewSidebar from "components/sidebar/newSidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "chimes",
  description: "Created by SanC005",
};
const originalConsoleWarn = console.warn;

console.warn = function (...args) {
  if (
    args[0] &&
    typeof args[0] === 'string' &&
    args[0].includes('Support for defaultProps will be removed')
  ) {
    // Do nothing or perform custom action, like logging to a different service
    // For example: YourLogger.logWarning(args[0]);
    return;
  }

  // If the warning is not about defaultProps, proceed with the original console.warn
  originalConsoleWarn.apply(console, args);
};

// Now, any warning related to defaultProps will not be logged in the console

export default function Layout({ children }) {
  const font = inter.className;

  return (
    <html lang="en">
        <body>
          <div className="h-16">
            <Navbar />
          </div>

          <div className="flex">
            <div className="bg-sky-950 flex flex-col invisible md:visible">
              <NewSidebar />
            </div>
            <div className="absolute start-0 end-0 md:start-56 md:end-0 lg:start-56 lg:end-0">
              {children}
            </div>
          </div>
        </body>
    </html>
  );
}
