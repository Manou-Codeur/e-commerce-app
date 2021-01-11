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

export const fetchRecommendations = () => {
  const { shoes, clothes } = products;

  return [
    {
      type: "shoes",
      genre: "men",
      name: shoes.men[2].name,
      imgUrl: shoes.men[2].colors.orange["1"],
      color: "orange",
    },
    {
      type: "shoes",
      genre: "women",
      name: shoes.women[1].name,
      imgUrl: shoes.women[1].colors.white["1"],
      color: "white",
    },
    {
      type: "shoes",
      genre: "women",
      name: shoes.women[3].name,
      imgUrl: shoes.women[3].colors.pink["1"],
      color: "pink",
    },
    {
      type: "clothes",
      genre: "men",
      name: clothes.men[0].name,
      imgUrl: clothes.men[0].colors.green["1"],
      color: "green",
    },
    {
      type: "clothes",
      genre: "women",
      name: clothes.women[1].name,
      imgUrl: clothes.women[1].colors.black["1"],
      color: "black",
    },
    {
      type: "clothes",
      genre: "kids",
      name: clothes.kids[0].name,
      imgUrl: clothes.kids[0].colors.green["1"],
      color: "green",
    },
  ];
};

export const fetchProduct = (type, genre, name, color) => {
  const product = products[type][genre].filter(
    product => product.name === name
  );
  return product[0].colors[color];
};
