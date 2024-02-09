import ContactCta from './ui/contact-cta';
import Hero from './ui/hero';
import Features from './ui/home/features';
import Testimonials from './ui/home/testimonials';

export default function Home() {
  return (
    <main className='pt-20'>
      <Hero />
      <Features />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
