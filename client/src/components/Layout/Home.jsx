import React from "react";
import Layout from "./Layout";

import Carousel from "./Carousel";
import CardItem from "./CardItem";

export default function Home() {
  return (
    <>
      <Layout>
        <Carousel/>
        <div className="m-2">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        </div>
      </Layout>
    </>
  );
}
