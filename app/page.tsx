import ContactCta from './ui/contact-cta';
import Hero from './ui/home/hero';
import Features from './ui/home/features';
import Testimonials from './ui/home/testimonials';

export default function Home() {
  return (
    <main className='pt-20 lg:pt-32'>
      <Hero />
      <Features />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
