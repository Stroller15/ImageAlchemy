import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { plans } from "@/constants";

import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import FeaturesBento from "@/components/marketing/FeaturesBento";
import DemoShowcase from "@/components/marketing/DemoShowcase";
import StatsStrip from "@/components/marketing/StatsStrip";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 justify-center">
            <Image
              width={60}
              height={60}
              src="/assets/logo.png"
              alt="Logo"
              className="h-6 w-6 text-orange-500"
            />
            <span className="font-bold text-xl">ImageAlchemy</span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="/home">Get Started</Link>
          </Button>
        </div>
      </header>

      <Hero />
      <HowItWorks />
      <FeaturesBento />
      <DemoShowcase />
      <StatsStrip />

      {/* Pricing Teaser */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-white/10">
        <div className="container px-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
            Simple, Credit-Based Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center"
              >
                <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-1">
                  ${plan.price}
                  {plan.price > 0 && (
                    <span className="text-base text-gray-400 font-normal">
                      {" "}
                      one-time
                    </span>
                  )}
                </p>
                <p className="text-gray-400">{plan.credits} credits</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/credits"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              View full plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-white/10">
        <div className="container px-4">
          <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Start Creating Today
                </h2>
                <p className="text-gray-400 text-lg max-w-xl">
                  Start editing smarter &mdash; no credit card required.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
                asChild
              >
                <Link href="/home">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src="/assets/logo.png"
              alt="Logo"
              className="h-5 w-5"
            />
            <span className="font-semibold">ImageAlchemy</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ImageAlchemy. All rights
            reserved.
          </p>
          <a
            href="https://github.com/Stroller15/ImageAlchemy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
