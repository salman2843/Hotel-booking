import Head from "next/head";
import About from "./components/About";
import Header1 from "./components/Header1";
import Last from "./components/Last";
import Swiper from "./components/Swiper";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";

const index = () => {
  return (
    <div>
      <Head>
        <title>QuickStay</title>
        {/* <link rel='icon' href='/icon.png'></link> */}
      </Head>
      <Navbar />
      <Swiper />
      <Header1 />

      {/* Assign IDs to the sections */}
      <section id='about'>
        <About />
      </section>

      <section id='reviews'>
        <Reviews />
      </section>

      <section id='FAQ'>
        <FAQ />
      </section>

      <Last />
    </div>
  );
};

export default index;
