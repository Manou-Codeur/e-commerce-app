import * as products from "./fake-db";

export const filterProducts = query => {
  const { clothes, shoes } = products;

  return [
    ...clothes.kids,
    ...clothes.men,
    ...clothes.women,
    ...shoes.kids,
    ...shoes.men,
    ...shoes.women,
  ].filter(product => {
    return product.name.toLowerCase().includes(query.toLowerCase().trim());
  });
};

export const getRecommendations = () => {
  const { shoes, clothes } = products;

  return [
    { name: shoes.men[2].name, color: shoes.men[2].colors.orange["1"] },
    { name: shoes.women[1].name, color: shoes.women[1].colors.white["1"] },
    { name: shoes.women[3].name, color: shoes.women[3].colors.pink["1"] },
    { name: clothes.men[0].name, color: clothes.men[0].colors.green["1"] },
    { name: clothes.women[1].name, color: clothes.women[1].colors.black["1"] },
    { name: clothes.kids[0].name, color: clothes.kids[0].colors.green["1"] },
  ];
};
