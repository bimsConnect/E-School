import { FC } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/section/Navbar";
import Footer from "../components/section/Footer";
import FAQSection from "../components/section/FAQSection";
import SEO from "../components/section/SEO";
import Hero from "../components/section/Hero";
import FeatureCard from "../components/section/FeatureCard";

const TestimonialSection = dynamic(() => import("../components/section/Testimonial"));
const Pricing = dynamic(() => import("../components/section/Pricing"));

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* SEO Optimization */}
      <SEO />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* FeatureCard */}
      <section id="features" className="py-12 bg-white dark:bg-gray-800">
        <FeatureCard />
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="py-12 bg-gray-50 dark:bg-gray-900">
        <TestimonialSection />
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 bg-white dark:bg-gray-800">
        <Pricing />
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 bg-gray-50 dark:bg-gray-900">
        <FAQSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
