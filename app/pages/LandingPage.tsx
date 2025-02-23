import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar /> {/* Navbar sekarang digunakan di sini */}

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Belajar Lebih Cerdas dengan AI
          </h1>
          <p className="text-lg mb-6">
            Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif.
          </p>
          <Link href="/dashboard">
            <button className="px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md">
              Mulai Belajar
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image src="/learning.jpg" alt="AI Learning" width={500} height={400} />
        </div>
      </header>

      {/* Keunggulan AI Learning */}
      <section id="features" className="py-16 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Mengapa Memilih AI Learning?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon="📚" title="Pembelajaran Adaptif" description="AI menyesuaikan materi berdasarkan gaya belajar kamu." />
          <FeatureCard icon="🤖" title="Chatbot Tutor" description="Tanyakan apa saja dan dapatkan jawaban instan dari AI." />
          <FeatureCard icon="🏆" title="Rekomendasi Kursus" description="AI merekomendasikan kursus yang sesuai dengan kebutuhanmu." />
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials">
        <TestimonialSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
