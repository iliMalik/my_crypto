import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">CRYPTO 2024</h1>
      <Link href="/client" className="btn btn-accent">
        get stated
      </Link>
    </div>
  );
}
