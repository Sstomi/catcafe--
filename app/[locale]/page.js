import Image from "next/image";
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Cats from '@/components/Cats';
import Cafe from '@/components/Cafe';
import Staff from '@/components/Staff';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { routing } from '@/src/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <main>
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <Hero />
      <Features />
      <Cats />
      <Cafe />
      <Staff />
      <Cta />
      <Footer />
    </main>
  );
}