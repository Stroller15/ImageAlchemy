const stats = [
  { value: "5", label: "AI-powered tools" },
  { value: "3", label: "Output aspect ratios" },
  { value: "20", label: "Free credits to start" },
  { value: "Cloudinary AI", label: "Under the hood" },
];

export default function StatsStrip() {
  return (
    <section className="relative z-10 py-12 border-t border-white/10">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-orange-500">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
