export async function fetchDrinks() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  //   throw error
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }
  const data = await response.json();
  return data;
}

export async function getSingleDrink(id: string) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  //   throw error
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }
  const data = await response.json();
  return data;
}
