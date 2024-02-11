import Clients from '../ui/about/clients';
import Directors from '../ui/about/directors';
import Hero from '../ui/about/hero';
import ContactCta from '../ui/contact-cta';

export default function AboutPage() {
  return (
    <main className='pt-20 md:pt-28'>
      <Hero />
      <Directors />
      <Clients />
      <ContactCta />
    </main>
  );
}
