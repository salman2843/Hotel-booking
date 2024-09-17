import Head from "next/head";
import About from "./api/components/About";
import Header from "./api/components/Header";
import Header1 from "./api/components/Header1";
import Last from "./api/components/Last";
import Swiper from "./api/components/Swiper";
import Reviews from "./api/components/Reviews";
import FAQ from "./api/components/FAQ";

const index = () => {
  return (
    <div>
      <Head>
        <title>QuickStay</title>
        {/* <link rel='icon' href='/icon.png'></link> */}
      </Head>
      <Header />
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
