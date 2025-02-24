interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = () => {
  return (
    <section id="features" className="py-16 px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Mengapa Memilih <span className="text-blue-600">E-School</span>?
      </h2>
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
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
