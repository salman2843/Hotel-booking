// hotelb/pages/_app.js

import "@/styles/globals.css"; // Import global styles
import "swiper/css"; // Swiper core styles
// Uncomment if you have custom Swiper styles
// import "../pages/api/components/styles.css";
// import "swiper/css/navigation"; // Required for navigation buttons
// import "swiper/css/pagination"; // If you plan to use pagination
import { AuthProvider } from "@/context/AuthContext"; // Import AuthProvider
import { ToastContainer } from "react-toastify"; // Import toast container
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer /> {/* Add ToastContainer here */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}
