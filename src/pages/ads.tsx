import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import AdSlotsContent from "@/components/add-content"; // Previously updated as AdSlotsContent

import Layout from "../layouts/Main";

const AdSlots = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <AdSlotsContent />
      </div>
    </section>
    {/* <Footer /> */}
  </Layout>
);

export default AdSlots;