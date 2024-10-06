import Head from "next/head";
import About from "./components/About";
import Header1 from "./components/Header1";
import Last from "./components/Last";
import Swiper from "./components/Swiper";
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

      {/* Assign IDs to the sections */}
      <section id='about'>
        <About />
      </section>

      <Header1 />
      <Last />
    </div>
  );
};

export default index;
