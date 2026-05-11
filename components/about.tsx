"use client";

import { Building2, Users, Award, Target } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "كيان سعودي مُسجّل",
    description: "نعمل وفق الأنظمة واللوائح ذات الصلة ونلتزم بالحوكمة والجودة",
  },
  {
    icon: Users,
    title: "فريق سعودي بالكامل",
    description: "نفخر بأن فريقنا سعودي متخصص يفهم احتياجاتك ويتحدث لغتك",
  },
  {
    icon: Award,
    title: "خبرة متراكمة",
    description: "سنوات من الخبرة في تقديم الحلول القانونية والاستشارية",
  },
  {
    icon: Target,
    title: "نهج رؤية 2030",
    description: "نعمل على تحقيق أهداف رؤية المملكة 2030 في خدمة المواطن",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            من نحن
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            خلينا نعرفك على AAP
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تخيّل فيه جهة تحميك وتوقف معك دايم لو كنت بمشكلة أو قبلها بخطوة، معنا
            في AAP راح نكون لك سند وحماية.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-secondary/50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-premium-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-20 bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-balance">
              وهذا وعدنا على نهج رؤيتنا 2030
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
              {["وصول أسهل", "تجربة أذكى", "جودة حياة أفضل"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-lg sm:text-xl font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
