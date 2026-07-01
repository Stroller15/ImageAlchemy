import { ArrowRight } from "lucide-react";

export default function DemoShowcase() {
  return (
    <section className="relative z-10 py-20 lg:py-32 border-t border-white/10">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
          See the Transformation
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          A preview of what Image Restore and Object Recolor can do to your
          photos.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-gray-600/40 to-gray-500/20 blur-[1px] grayscale-[60%] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Before</p>
          </div>
          <ArrowRight className="h-8 w-8 text-orange-500 shrink-0 rotate-90 lg:rotate-0" />
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/30 to-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
            </div>
            <p className="text-center text-sm text-orange-500 mt-4">After</p>
          </div>
        </div>
      </div>
    </section>
  );
}
