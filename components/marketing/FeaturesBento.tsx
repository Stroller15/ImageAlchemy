import { ImageIcon, Eraser, Wand2, Palette, Trash2 } from "lucide-react";

const features = [
  {
    icon: <Wand2 className="h-7 w-7 text-orange-500" />,
    title: "Generative Fill",
    description:
      "Expand your images or fill in missing areas with AI-generated content, optimized for square, portrait, or phone formats.",
    flagship: true,
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-orange-500" />,
    title: "Image Restore",
    description:
      "Breathe new life into old or damaged photos with AI restoration.",
  },
  {
    icon: <Eraser className="h-6 w-6 text-orange-500" />,
    title: "Object Remove",
    description:
      "Seamlessly remove unwanted objects while preserving image quality.",
  },
  {
    icon: <Palette className="h-6 w-6 text-orange-500" />,
    title: "Object Recolor",
    description: "Change colors of specific objects with precision and ease.",
  },
  {
    icon: <Trash2 className="h-6 w-6 text-orange-500" />,
    title: "Background Remove",
    description: "Easily remove and replace backgrounds from your images.",
  },
];

export default function FeaturesBento() {
  return (
    <section className="relative z-10 py-20 lg:py-32 border-t border-white/10">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
          Powerful AI Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/50 transition-colors ${
                feature.flagship
                  ? "md:col-span-2 lg:col-span-2 flex flex-col justify-center bg-gradient-to-br from-orange-500/10 to-purple-500/5"
                  : ""
              }`}
            >
              <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-6">
                {feature.icon}
              </div>
              <h3
                className={`font-semibold mb-2 ${
                  feature.flagship ? "text-2xl" : "text-xl"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
