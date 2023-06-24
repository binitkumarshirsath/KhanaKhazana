import React from "react";
import Layout from "./Layout";

import Carousel from "./Carousel";
import CardItem from "./CardItem";
import CreateCard from "./CreateCard";

export default function Home() {
  return (
    <>
      <Layout>
        <Carousel/>
        <div className="m-2">
        <CreateCard/>
        </div>
      </Layout>
    </>
  );
}
