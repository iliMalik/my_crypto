import { coins } from '@/services/data/queries/crypto';
import CoinList from '@/components/coinlist';

export default async function Coins() {
  const data = await coins();

  return (
    <div>
      <CoinList coins={data} />
    </div>
  );
}
