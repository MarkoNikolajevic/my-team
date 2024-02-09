import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='pt-8'>
      <nav className='container flex'>
        <Image src='./logo.svg' alt='My Team logo' width={128} height={32} />
      </nav>
    </header>
  );
}
