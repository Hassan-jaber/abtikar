"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "محمد العتيبي",
    role: "صاحب مشروع",
    content:
      "تجربة رائعة مع فريق AAP. ساعدوني في حل مشكلة عقارية معقدة بكل احترافية. أنصح بشدة بالتعامل معهم.",
    rating: 5,
  },
  {
    name: "سارة الحربي",
    role: "موظفة",
    content:
      "كان عندي مشكلة عمالية مع الشركة السابقة، وفريق AAP قدم لي الدعم الكامل. شكراً على الاحترافية!",
    rating: 5,
  },
  {
    name: "عبدالله القحطاني",
    role: "مستثمر",
    content:
      "خدمة ممتازة وسريعة. حلوا لي مشكلة مخالفة مرورية كنت متأكد إني مو الغلطان فيها. شكراً AAP!",
    rating: 5,
  },
  {
    name: "نورة السعيد",
    role: "ربة منزل",
    content:
      "ساعدوني في موضوع حماية المستهلك بعد ما شركة التأجير حملتني أضرار ما سببتها. فريق محترف جداً.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            آراء حقيقية من عملاء استفادوا من خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              {/* Content */}
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
