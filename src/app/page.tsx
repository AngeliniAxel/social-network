import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <p>Hola mundo</p>
      <div>
        <Link href='/users'>Ver Usuarios</Link>{' '}
      </div>
    </main>
  );
}
