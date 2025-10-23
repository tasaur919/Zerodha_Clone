import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kite from "../../All_Img/images/kite.png";
import console from "../../All_Img/images/console.png";

import coin from "../../All_Img/images/coin.png";
import kiteconnect from "../../All_Img/images/kiteconnect.png";
import versity from "../../All_Img/images/varsity.png";

function ProductPage() {
  return (
    <>
      <div className="overflow-y-scroll mt-22">
        <Hero />
        <LeftSection
          imageURL={kite}
          productName="Kite"
          productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightSection
          imageURL={console}
          productName="Console"
          productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore=""
        />

     <LeftSection
          imageURL={coin}
          productName="Coin"
          productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
  <RightSection
          imageURL={kiteconnect}
          productName="Kite Connect API"
          productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore=""
        />
   <LeftSection
          imageURL={versity}
          productName="Varsity mobile"
          productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>

        <Universe />
      </div>
    </>
  );
}

export default ProductPage;
