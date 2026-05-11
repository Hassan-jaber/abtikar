"use client";

import {
  Car,
  Banknote,
  Home,
  ShoppingBag,
  Briefcase,
  Heart,
  GraduationCap,
  Scale,
  FileText,
  Truck,
  Baby,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "مروري",
    description: "جتك مخالفة ما تستحقها؟ أو صار عليك حادث وحمّلوك الخطأ؟ نساعدك نوضح الصورة",
    color: "bg-blue-500",
  },
  {
    icon: Banknote,
    title: "مالي",
    description: "قدمت على تمويل ورفضوا بدون سبب؟ أو انخصم من بطاقتك مبلغ مجهول؟ نحل المشكلة",
    color: "bg-green-500",
  },
  {
    icon: Home,
    title: "عقاري",
    description: "مشاكل مع المقاول أو المالك رفع الإيجار؟ نراجع العقود ونحمي حقوقك",
    color: "bg-amber-500",
  },
  {
    icon: ShoppingBag,
    title: "حماية مستهلك",
    description: "شركة حملّتك أضرار بدون إثبات؟ أو رفضوا يعطونك فاتورة؟ نتابع معك",
    color: "bg-purple-500",
  },
  {
    icon: Briefcase,
    title: "عمالي",
    description: "عقد وظيفي غير واضح؟ أو فصل بدون سبب؟ نحمي حقوقك العمالية",
    color: "bg-indigo-500",
  },
  {
    icon: Heart,
    title: "صحي",
    description: "التأمين رفض تغطية إجراء طبي ضروري؟ نتابع القضية معك",
    color: "bg-red-500",
  },
  {
    icon: GraduationCap,
    title: "تعليم",
    description: "المدرسة رفعت الرسوم بدون تنبيه؟ نراجع الاتفاقيات ونحمي حقوقك",
    color: "bg-teal-500",
  },
  {
    icon: Scale,
    title: "قضائي",
    description: "جاك إشعار بدعوى قضائية؟ نوجهك للخطوات الصحيحة",
    color: "bg-slate-600",
  },
  {
    icon: FileText,
    title: "توثيق",
    description: "ودك تكتب وصيتك وتضمن حق عيالك؟ نساعدك تبدأ صح",
    color: "bg-orange-500",
  },
  {
    icon: Truck,
    title: "تطبيقات توصيل",
    description: "طلبك جا ناقص أو غلط؟ نتابع الشكوى معك",
    color: "bg-cyan-500",
  },
  {
    icon: Baby,
    title: "حقوق الأم",
    description: "طلبتِ ساعة الرضاعة ورفضوا؟ نحمي حقوقك القانونية",
    color: "bg-pink-500",
  },
  {
    icon: Shield,
    title: "جنائي",
    description: "تتعرض لابتزاز؟ نوجهك للتعامل الصحيح والآمن",
    color: "bg-rose-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            مواقف صارت مع ناس مثلك
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            23 سبب خلّتهم يختارونّا - نغطي جميع المجالات اللي تحتاجها
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
