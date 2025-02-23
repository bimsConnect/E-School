import Link from "next/link";
import { FC } from "react";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";
import Image from "next/image";

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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
      <section className="py-16 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Mengapa Memilih AI Learning?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon="📚" title="Pembelajaran Adaptif" description="AI menyesuaikan materi berdasarkan gaya belajar kamu." />
          <FeatureCard icon="🤖" title="Chatbot Tutor" description="Tanyakan apa saja dan dapatkan jawaban instan dari AI." />
          <FeatureCard icon="🏆" title="Rekomendasi Kursus" description="AI merekomendasikan kursus yang sesuai dengan kebutuhanmu." />
        </div>
      </section>
      
      {/* Statistik Menarik */}
      <section className="py-16 px-8 text-center bg-white shadow-md rounded-lg max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">AI Learning dalam Angka</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-4xl font-bold text-blue-600">10,000+</div>
          <div className="text-4xl font-bold text-blue-600">90%</div>
          <div className="text-4xl font-bold text-blue-600">20%</div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          <p className="text-lg">Siswa telah bergabung</p>
          <p className="text-lg">Siswa merasa lebih cepat memahami materi</p>
          <p className="text-lg">Peningkatan nilai rata-rata</p>
        </div>
      </section>
      
      {/* Testimoni */}
      <section className="py-16 px-8 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial quote="Belajar dengan AI Learning sangat menyenangkan! AI-nya pintar banget!" name="Rina, Mahasiswa" />
          <Testimonial quote="Saya bisa memahami konsep lebih cepat dibanding belajar sendiri." name="Budi, Programmer" />
          <Testimonial quote="Sangat membantu! Terutama chatbot AI-nya, serasa punya tutor pribadi." name="Lina, Pelajar" />
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 px-8 text-center bg-blue-600 text-white shadow-lg rounded-lg max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Siap Belajar dengan AI?</h2>
        <p className="text-lg mb-6">Bergabung sekarang dan tingkatkan keterampilanmu dengan AI Learning!</p>
        <Link href="/dashboard">
          <button className="px-6 py-3 text-lg bg-white text-blue-600 hover:bg-gray-200 rounded-lg shadow-md">
            Mulai Sekarang
          </button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
