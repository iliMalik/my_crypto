import { fetchDrinks } from '@/services/data/queries/drinks';
import DrinksList from '@/components/drinkslist';
export default async function DrinksPage() {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
}
