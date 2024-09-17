import "@/styles/globals.css";
import "../styles/globals.css"; // Tailwind and global styles
import "swiper/css"; // Swiper core styles
// import "../pages/api/components/styles.css"; // Your custom Swiper styles
// import "swiper/css/navigation"; // Required for navigation buttons
// import "swiper/css/pagination"; // If you plan to use pagination

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
