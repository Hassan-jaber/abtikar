"use client";

import { Shield, ArrowLeft, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2540' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <Shield className="w-4 h-4" />
              <span>ضمان يسندك</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up delay-100 text-balance">
              سند للحاضر
              <span className="block text-accent">وأمان للمستقبل</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-xl">
              في هذا الوقت اللي القرارات فيه سريعة والتحديات تزيد، مع AAP نضمن لك
              درب أقصر وخيارات أوضح. نوفر لك حماية من قلب الرياض وين ما كنت في
              وطننا الحبيب.
            </p>

            {/* Trust Points */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up delay-300">
              {["وصول أسهل", "تجربة أذكى", "جودة حياة أفضل"].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-xl group"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold border-2 border-primary/10 hover:border-primary/30 transition-all"
              >
                اكتشف المزيد
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-300">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <Shield className="w-32 h-32 sm:w-40 sm:h-40 text-white" />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-premium-hover animate-float delay-200">
                <div className="text-3xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">عميل سعيد</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-premium-hover animate-float delay-400">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">فريق سعودي</div>
              </div>

              {/* Decorative Ring */}
              <div className="absolute inset-0 w-full h-full border-2 border-dashed border-accent/30 rounded-full scale-125 animate-pulse-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
