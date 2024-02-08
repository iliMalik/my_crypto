import Image from 'next/image';
import Link from 'next/link';
import { getSingleDrink } from '@/services/data/queries/drinks';

export default async function SingleDrinkPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to list ...
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-24 h-24 rounded-lg shadow-lg mb-4"
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>

      <Link href={imgSrc}>
        {params.id} -- {title} -- {imgSrc}
      </Link>
    </div>
  );
}
