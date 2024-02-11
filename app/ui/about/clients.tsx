import { clients } from '@/data/clients';
import Image from 'next/image';

export default function Clients() {
  return (
    <section className='py-22 relative overflow-hidden bg-sacramentoStateGreen'>
      <div className='container text-white'>
        <h2 className='text-center text-3.5xl font-bold'>
          Some of our clients
        </h2>
        <div className='mt-16 flex flex-col items-center justify-center gap-14'>
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.logo}
              alt={client.name}
              width={164}
              height={30}
              className='h-auto w-36'
            />
          ))}
        </div>
      </div>
      <Image
        src='/bg-pattern/bg-pattern-about-4.svg'
        alt=''
        width={200}
        height={200}
        className='absolute -left-25 -top-25'
      />
    </section>
  );
}
