"use client";
import { useState } from "react";

// Data FAQ dengan kategori
type FAQCategory = {
  category: string;
  questions: { question: string; answer: string }[];
};

const faqs: FAQCategory[] = [
  {
    category: "Umum",
    questions: [
      { question: "Apa itu E-School?", answer: "E-School adalah platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif." },
      { question: "Bagaimana cara mendaftar?", answer: "Anda bisa mendaftar dengan membuat akun di website kami dan memilih paket langganan yang sesuai." },
      { question: "Apakah E-School cocok untuk semua jenjang pendidikan?", answer: "Ya, E-School menyediakan materi untuk berbagai jenjang pendidikan mulai dari SD, SMP, SMA, hingga Perguruan Tinggi dan kursus profesional." },
      { question: "Apakah E-School bisa diakses di perangkat mobile?", answer: "Ya, Anda bisa mengakses E-School melalui browser di perangkat mobile atau menggunakan aplikasi resmi kami di Android dan iOS." },
      { question: "Apakah saya bisa belajar kapan saja?", answer: "Tentu! Semua materi bisa diakses kapan saja dan di mana saja sesuai dengan jadwal Anda." },
    ],
  },
  {
    category: "Pembayaran",
    questions: [
      { question: "Apakah ada trial gratis?", answer: "Ya, kami menyediakan akses ke beberapa materi secara gratis sebelum Anda berlangganan." },
      { question: "Metode pembayaran apa saja yang diterima?", answer: "Kami menerima pembayaran melalui kartu kredit, transfer bank, dan e-wallet." },
      { question: "Apakah saya bisa membatalkan langganan kapan saja?", answer: "Ya, Anda bisa membatalkan langganan kapan saja melalui pengaturan akun Anda." },
      { question: "Apakah ada diskon untuk pelajar atau mahasiswa?", answer: "Ya, kami menyediakan diskon khusus bagi pelajar dan mahasiswa yang dapat diverifikasi dengan kartu pelajar atau kartu mahasiswa." },
      { question: "Bisakah saya mendapatkan faktur untuk pembayaran?", answer: "Tentu! Setelah pembayaran berhasil, faktur akan dikirim ke email Anda secara otomatis." },
    ],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<{ category: string; index: number } | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const toggleFAQ = (category: string, index: number) => {
    setOpenIndex(openIndex?.category === category && openIndex.index === index ? null : { category, index });
  };

  const changeCategory = (category: string | null) => {
    setCurrentCategory(category);
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Pertanyaan Umum</h2>

        <div className="flex gap-2 mb-6 flex-wrap">
          <button onClick={() => changeCategory(null)} className={`px-4 py-2 rounded-lg ${!currentCategory ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`}>
            Semua
          </button>
          {faqs.map((faq) => (
            <button
              key={faq.category}
              onClick={() => changeCategory(faq.category)}
              className={`px-4 py-2 rounded-lg ${currentCategory === faq.category ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`}
            >
              {faq.category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {faqs
            .filter((faq) => !currentCategory || faq.category === currentCategory)
            .map((faq) => (
              <div key={faq.category}>
                <h3 className="text-xl font-semibold mb-4">{faq.category}</h3>
                {faq.questions.map((q, qIndex) => (
                  <div key={qIndex} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <button className="w-full text-left font-semibold text-lg flex justify-between items-center" onClick={() => toggleFAQ(faq.category, qIndex)}>
                      {q.question}
                      <span className={`transform transition-transform duration-300 ${openIndex?.category === faq.category && openIndex.index === qIndex ? "rotate-180" : "rotate-0"}`}>+</span>
                    </button>
                    {openIndex?.category === faq.category && openIndex.index === qIndex && <p className="mt-2 text-gray-700 dark:text-gray-300">{q.answer}</p>}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
