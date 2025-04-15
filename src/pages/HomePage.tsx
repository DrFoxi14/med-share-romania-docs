
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedDocuments from "@/components/home/FeaturedDocuments";
import Universities from "@/components/home/Universities";
import CallToAction from "@/components/home/CallToAction";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDocuments />
      <Universities />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
