import Link from 'next/link';
import Image from 'next/image';
interface Drink {
  idDrink: string;
  strDrink: string;
  strTags: string;
  strDrinkThumb: any;
}

interface Props {
  drinks: Drink[];
}

export default function DrinksList({ drinks }: Props) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-5">
      {drinks.map((drink: any) => {
        return (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width:768px) 100vw,
                  (max-width:1200px) 50vw"
                  alt={drink.strDrink}
                  className="rounded-md object-cover"
                />
              </div>

              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
