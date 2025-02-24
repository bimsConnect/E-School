"use client";
import { useState } from "react";

const faqs = [
  { question: "Apa itu E-School?", answer: "E-School adalah platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif." },
  { question: "Bagaimana cara mendaftar?", answer: "Anda bisa mendaftar dengan membuat akun di website kami dan memilih paket langganan yang sesuai." },
  { question: "Apakah ada trial gratis?", answer: "Ya, kami menyediakan akses ke beberapa materi secara gratis sebelum Anda berlangganan." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
