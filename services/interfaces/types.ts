export interface Product {
  upc: number;
  title: string;
  url: any;
  image: any;
  own_rating: any;
}

export interface Coin {
  coin_id: string;
  name: string;
  symbol: string;
  image?: string;
  market_cap?: number;
  market_cap_rank?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number;
  current_price?: number;
  ath?: number;
  portfolio_qty?: number;
  target_price?: number;
  rating_review?: number;
  portfolio_usd?: number;
  portfolio_projection?: number;
  created_at?: Date;
  required_qty?: number;
  required_amount?: number;
  page?: string;
  wallet?: string;
}
