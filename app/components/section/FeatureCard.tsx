"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = () => {
  return (
    <section id="features" className="py-16 px-8 max-w-7xl mx-auto text-center">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Mengapa Memilih <span className="text-blue-600">E-School</span>?
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        🚀 <span className="font-semibold text-blue-600">E-School</span> adalah platform pembelajaran modern yang memanfaatkan kecerdasan buatan untuk memberikan pengalaman belajar yang lebih{" "}
        <span className="font-bold text-blue-500">interaktif</span> dan <span className="font-bold text-blue-500">dipersonalisasi</span>. Dengan fitur canggih seperti <span className="text-blue-500 font-semibold">Pembelajaran Adaptif</span>
        , <span className="text-blue-500 font-semibold">Chatbot Tutor</span>, dan <span className="text-blue-500 font-semibold">Rekomendasi Kursus</span>, kami memastikan bahwa setiap pelajar mendapatkan materi yang sesuai dengan kebutuhan
        mereka.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8">
        <Card icon="📚" title="Pembelajaran Adaptif" description="AI menyesuaikan materi berdasarkan gaya belajar kamu." />
        <Card icon="🤖" title="Chatbot Tutor" description="Tanyakan apa saja dan dapatkan jawaban instan dari AI." />
        <Card icon="🏆" title="Rekomendasi Kursus" description="AI merekomendasikan kursus yang sesuai dengan kebutuhanmu." />
      </div>
    </section>
  );
};

// Komponen kecil untuk satu kartu fitur
const Card: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
    >
      <div className="text-5xl mb-3">{icon}</div>
      <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
