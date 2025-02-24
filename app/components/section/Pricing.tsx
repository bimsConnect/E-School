"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  mostPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "Rp 50.000",
    features: ["Akses materi dasar", "Quiz dan ujian", "Sertifikat penyelesaian"],
  },
  {
    title: "Pro",
    price: "Rp 100.000",
    features: ["Semua fitur Basic", "AI pembelajaran offline", "Forum diskusi"],
    mostPopular: true,
  },
  {
    title: "Enterprise",
    price: "Rp 250.000",
    features: ["Semua fitur Pro", "Akses ke semua kelas", "Dukungan prioritas"],
  },
];

export default function Pricing() {
  const sortedPlans = useMemo(() => {
    return pricingPlans.sort((a, b) => (b.mostPopular ? 1 : 0) - (a.mostPopular ? 1 : 0));
  }, []);

  if (!sortedPlans.length) {
    return <div className="text-center py-16">No pricing plans available.</div>;
  }

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-100 dark:bg-gray-900 text-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Pilih Paket Belajarmu</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">Mulai perjalanan belajarmu dengan paket yang sesuai kebutuhanmu.</p>
      </motion.div>
      <motion.div className="grid md:grid-cols-3 gap-8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        {sortedPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-6 sm:p-8 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white ${plan.mostPopular ? "scale-105 transition-transform duration-300 ease-in-out" : ""}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {plan.title} {plan.mostPopular && <span className="text-sm text-blue-500">(Paling Populer)</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{plan.price}/bulan</p>
              <ul className="mb-6 space-y-3 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Check className="text-green-500" size={20} /> {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600" aria-label={`Pilih Paket ${plan.title}`}>
                Pilih Paket
              </Button>
              <Button className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white" aria-label={`Mulai Trial ${plan.title}`}>
                Mulai Trial
              </Button>
            </CardContent>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
