import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Basic",
    price: "Rp 50.000",
    features: ["Akses materi dasar", "Quiz dan ujian", "Sertifikat penyelesaian"],
  },
  {
    title: "Pro",
    price: "Rp 100.000",
    features: ["Semua fitur Basic", "AI pembelajaran offline", "Forum diskusi"],
  },
  {
    title: "Enterprise",
    price: "Rp 250.000",
    features: ["Semua fitur Pro", "Akses ke semua kelas", "Dukungan prioritas"],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-white to-gray-100 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Pilih Paket Belajarmu</h2>
        <p className="text-lg text-gray-600 mb-10">Mulai perjalanan belajarmu dengan paket yang sesuai kebutuhanmu.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="p-8 shadow-xl rounded-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{plan.price}/bulan</p>
                <ul className="mb-6 space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="text-green-500" size={20} /> {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">Pilih Paket</Button>
                <Button className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg">Mulai Trial</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}