import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import AdSlotsFeatured from "@/components/add-featured";


import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/ads/documentary2.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>A Documentary for your business</h3>
              <a href="#" className="btn btn--rounded">
                Book now
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/ads/standard-banner.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Standard Banner for event and Office</h3>
              <a href="#" className="btn btn--rounded">
                More details
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/ads/roadblock-banner.webp)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>You want a roadblock?</h3>
              <a href="#" className="btn btn--rounded">
                VIEW ALL
              </a>
            </div>
          </article>
        </div>
      </section>

  <AdSlotsFeatured />


      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
          
            <li>
              <i className="icon-payment" />
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>
                  All payments are processed instantly over a secure payment
                  protocol.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Money Value Guarantee</h4>
                <p>
                Get high quality banners, ads and slots at the best price.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials" />
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>
                  We guarantee the best quality of our ads products and services.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
   
      <Footer />
    </Layout>
  );
};

export default IndexPage;
