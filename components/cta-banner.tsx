"use client";

import { ArrowLeft, Shield } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold">AAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              تطمن، سجّل، وخلي الباقي علينا
            </h2>
            <p className="text-white/80 text-lg max-w-2xl">
              انضم لمئات العملاء السعداء اللي اختاروا AAP كشريك حماية موثوق
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-foreground transition-all hover:shadow-2xl group"
            >
              <span>ابدأ الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
