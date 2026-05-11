"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "الهاتف",
    value: "+966 9200 3 26 25",
    href: "tel:+966920032625",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "+966 9200 3 26 25",
    href: "https://wa.me/966920032625",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@aap.sa",
    href: "mailto:info@aap.sa",
  },
  {
    icon: MapPin,
    label: "العنوان",
    value: "Green Hub، حي الندى، الرياض",
    href: "#",
  },
];

const communicationOptions = [
  { value: "whatsapp", label: "واتساب" },
  { value: "call", label: "اتصال" },
  { value: "both", label: "كلها مناسبه" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredContact: "whatsapp",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            سجّل بياناتك وراح نتواصل معك في أقرب وقت
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-secondary/50 p-8 sm:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              سجّل بياناتك
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  الاسم <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  الجوال <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="email@example.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  بأي طريقة تحب نتواصل معك؟{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {communicationOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                        formData.preferredContact === option.value
                          ? "bg-primary text-white border-primary"
                          : "bg-white border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={option.value}
                        checked={formData.preferredContact === option.value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredContact: e.target.value,
                          })
                        }
                        className="sr-only"
                      />
                      <span className="font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                <span>إرسال</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              للحين محتار؟!
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              تواصل معنا مباشرة وراح نساعدك تختار الأنسب لك
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQ Preview */}
            <div className="mt-12 p-6 bg-accent/10 rounded-2xl">
              <h4 className="font-bold text-foreground mb-2">ماهي AAP؟</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                تخيّل فيه جهة تحميك وتوقف معك دايم لو كنت بمشكلة أو قبلها بخطوة،
                معنا في AAP راح نكون لك سند وحماية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
