"use client";

import { Package, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "اختار الباقة",
    description: "اختر الباقة المناسبة لاحتياجاتك من باقاتنا المتنوعة",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "ادفع",
    description: "أكمل عملية الدفع بطريقة آمنة وسهلة",
  },
  {
    icon: Rocket,
    number: "03",
    title: "ابدأ",
    description: "ابدأ الاستفادة من خدماتنا فوراً بعد الدفع مباشرة",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            كيف تبدأ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            ثلاث خطوات وتبدأ معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            طريقة سهلة وبسيطة للبدء في الاستفادة من خدماتنا
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 right-[16.67%] left-[16.67%] h-0.5 bg-gradient-to-l from-accent/50 via-primary/50 to-accent/50" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-accent text-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="w-32 h-32 mx-auto bg-secondary rounded-3xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors relative">
                <step.icon className="w-16 h-16 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
