"use client";

import { Clock, Shield, Headphones, BadgeCheck, Wallet, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "استجابة سريعة",
    description: "نرد عليك بأسرع وقت ونبدأ العمل على قضيتك فوراً",
  },
  {
    icon: Shield,
    title: "حماية شاملة",
    description: "باقة واحدة تحميك من كل التحديات القانونية والإدارية",
  },
  {
    icon: Headphones,
    title: "دعم مستمر",
    description: "عملنا ما يوقّف عند التسليم - نتابع معك حتى النهاية",
  },
  {
    icon: BadgeCheck,
    title: "كيان موثوق",
    description: "كيان سعودي مُسجّل ويعمل وفق الأنظمة واللوائح",
  },
  {
    icon: Wallet,
    title: "أسعار معقولة",
    description: "باقة تحميك بسعر ما تتخيله أمام أي تحديات تواجهها",
  },
  {
    icon: Lightbulb,
    title: "حلول ذكية",
    description: "نقدم لك الطريق الأقصر والخيارات الأوضح لحل مشكلتك",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            لماذا نحن
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            ما يميزنا عن الآخرين
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم قيمة حقيقية من خلال التميز في كل جانب من جوانب عملنا
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative bg-secondary/50 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-premium-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent Line */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <reason.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
