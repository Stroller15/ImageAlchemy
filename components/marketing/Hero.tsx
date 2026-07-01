import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative z-10 flex-1 py-20 lg:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="text-sm text-orange-500">
              AI-Powered Image Editing
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-white to-orange-500/50 bg-clip-text text-transparent mb-8">
            Transform Imagination into Reality
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Restore, generate, remove, recolor, and more &mdash; powered by AI,
            ready in a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
              asChild
            >
              <Link href="/home">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 border border-white/20 text-white hover:bg-white/5 hover:text-white"
              asChild
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
