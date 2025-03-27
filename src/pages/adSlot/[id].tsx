import type { GetServerSideProps } from "next";
import { useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import AdSlotContent from "@/components/add-single/content";
import Description from "@/components/product-single/description";
import Gallery from "@/components/product-single/gallery";
// import Reviews from "@/components/product-single/reviews";
import AdSlotsFeatured from "@/components/add-featured";
// types
import type { AdSlot } from "@/types";

import Layout from "../../layouts/Main";
import { server } from "../../utils/server";
// import ads from "../api/ads";

type ProductPageType = {
  ads: AdSlot;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`${server}/api/ads/${id}`);
  const ads = await res.json();


  return {
    props: {
      ads,
    },
  };
};

const Product = ({ ads }: ProductPageType) => {

//   console.log("🚀 ~ Product ~ ads:", ads)
  
  const [showBlock, setShowBlock] = useState("description");

  return (
    <Layout>
      <Breadcrumb name="Ads"/>

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={ads.images} />
            <AdSlotContent adSlot={ads} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock("description")}
                className={`btn btn--rounded ${showBlock === "description" ? "btn--active" : ""}`}
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--rounded ${showBlock === "reviews" ? "btn--active" : ""}`}
              >
                Reviews 
              </button>
            </div>

            <Description show={showBlock === "description"} description={ads.specifications || ads.platform } />
            {/* <Reviews product={product} show={showBlock === "reviews"} /> */}
          </div>
        </div>
      </section>

      <div className="product-single-page">
          <AdSlotsFeatured />
        
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
