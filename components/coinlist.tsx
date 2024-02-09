import { Coin } from '@/services/interfaces/types';
import Image from 'next/image';

interface Props {
  coins: Coin[];
}

export default function CoinList({ coins }: Props) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-5">
      {coins.map((coin: any) => {
        return (
          <li key={coin.coin_id}>
            <Image src={coin.image} alt="img" width={100} height={100}></Image>
            {coin.name}---{coin.symbol}
          </li>
        );
      })}
    </ul>
  );
}
