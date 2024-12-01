import Image from "next/image";
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Cats from '@/components/Cats';
import Cafe from '@/components/Cafe';
import Staff from '@/components/Staff';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features /> 
      <Cats />
      <Cafe />
      <Staff />
      <Cta />
      <Footer />
    </main>
  )
   
}
