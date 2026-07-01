import { UploadCloud, Wand2, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UploadCloud className="h-6 w-6 text-orange-500" />,
    title: "Upload your image",
    description: "Drop in any photo you want to transform.",
  },
  {
    number: "02",
    icon: <Wand2 className="h-6 w-6 text-orange-500" />,
    title: "Pick a transformation",
    description:
      "Restore, fill, remove, recolor, or strip the background.",
  },
  {
    number: "03",
    icon: <Download className="h-6 w-6 text-orange-500" />,
    title: "Get your result",
    description: "Download the AI-edited image in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 py-20 lg:py-32 border-t border-white/10"
    >
      <div className="container px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-white/10">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
