import Breadcrumb from "@/components/breadcrumb";
import ProductsContent from "@/components/products-content";
import Layout from "../layouts/Main";

const Products = () => (
  <Layout>
    <Breadcrumb name="All Products" />
    <section className="products-page">
      <div className="container">
        {/* <ProductsFilter /> */}
        <ProductsContent />
      </div>
    </section>
    {/* <Footer /> */}
  </Layout>
);

export default Products;
