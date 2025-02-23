import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic"; // Lazy loading untuk performa lebih baik
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Ikon media sosial

import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

// Lazy load komponen Testimonial & Pricing untuk meningkatkan kecepatan load awal
const TestimonialSection = dynamic(() => import("../components/Testimonial"));
const Pricing = dynamic(() => import("../components/Pricing"));

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* SEO Optimization */}
      <Head>
        <title>E-School - Belajar dengan AI</title>
        <meta name="description" content="Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif." />
        <meta name="keywords" content="AI Learning, E-School, Belajar Online, Kursus AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Belajar Lebih Cerdas dengan <span className="text-blue-600">AI</span>
          </h1>
          <p className="text-lg mb-6">Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif.</p>

          {/* Tombol Mulai Belajar & Pesan Sekarang */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <button className="px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md transition-transform transform hover:scale-105">Mulai Belajar</button>
            </Link>
            <Link href="https://wa.me/6281234567890" target="_blank">
              <button className="px-6 py-3 text-lg bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-md transition-transform transform hover:scale-105">Konsultasi</button>
            </Link>
          </div>

          {/* Ikon Media Sosial */}
          <div className="flex space-x-6 mt-6">
            <Link href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300" />
            </Link>
            <Link href="https://github.com/" target="_blank">
              <FaGithub className="text-3xl text-gray-900 dark:text-white hover:text-gray-600 transition duration-300" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image src="/learning.jpg" alt="Ilustrasi pembelajaran AI" width={500} height={400} priority className="rounded-lg shadow-lg" />
        </div>
      </header>

      {/* Fitur Keunggulan */}
      <section id="features" className="py-16 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Mengapa Memilih <span className="text-blue-600">E-School</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon="📚" title="Pembelajaran Adaptif" description="AI menyesuaikan materi berdasarkan gaya belajar kamu." />
          <FeatureCard icon="🤖" title="Chatbot Tutor" description="Tanyakan apa saja dan dapatkan jawaban instan dari AI." />
          <FeatureCard icon="🏆" title="Rekomendasi Kursus" description="AI merekomendasikan kursus yang sesuai dengan kebutuhanmu." />
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
        <TestimonialSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <Pricing />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
