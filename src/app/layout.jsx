import "@styles/scss/style.scss";
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";
import { GlobalProvider } from "../context/GlobalContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sourceSerif.variable}`}
    >
      <body>
        <GlobalProvider>
          <div className="mil-wrapper">
            {children}

            <ScrollbarProgress />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
};
export default Layouts;
