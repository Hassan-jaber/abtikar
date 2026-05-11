import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Stats />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
