import * as products from "./fake-db";

const { clothes, shoes } = products;
const allProducts = [
  ...shoes.men,
  ...shoes.women,
  ...shoes.kids,
  ...clothes.men,
  ...clothes.women,
  ...clothes.kids,
];

export const filterProducts = query => {
  return allProducts.filter(product => {
    return product.name.toLowerCase().includes(query.toLowerCase().trim());
  });
};

export const fetchRecommendations = currProduct => {
  const { shoes, clothes } = products;

  const recomended = [
    {
      type: "shoes",
      genre: "men",
      name: shoes.men[2].name,
      imgUrl: shoes.men[2].colors.orange[0],
      color: "orange",
    },
    {
      type: "shoes",
      genre: "women",
      name: shoes.women[1].name,
      imgUrl: shoes.women[1].colors.white[0],
      color: "white",
    },
    {
      type: "shoes",
      genre: "women",
      name: shoes.women[3].name,
      imgUrl: shoes.women[3].colors.pink[0],
      color: "pink",
    },
    {
      type: "clothes",
      genre: "men",
      name: clothes.men[0].name,
      imgUrl: clothes.men[0].colors.green[0],
      color: "green",
    },
    {
      type: "clothes",
      genre: "women",
      name: clothes.women[1].name,
      imgUrl: clothes.women[1].colors.black[0],
      color: "black",
    },
    {
      type: "clothes",
      genre: "kids",
      name: clothes.kids[0].name,
      imgUrl: clothes.kids[0].colors.gray[0],
      color: "gray",
    },
    {
      type: "clothes",
      genre: "kids",
      name: clothes.kids[1].name,
      imgUrl: clothes.kids[1].colors.white[0],
      color: "white",
    },
  ];

  if (currProduct) {
    const filtredRecommend = recomended.filter(
      product => product.name !== currProduct
    );
    if (filtredRecommend.length > 6) return recomended.slice(0, 6);
  }
  return recomended.slice(0, 6);
};

export const fetchProduct = (type, genre, name, color) => {
  //here if the we come from the search component (no type, genre and color)
  if (!color) {
    //i'm using "genre" coz in this case the "genre" is considred as "id"
    const index = genre;
    const product = allProducts[index - 1];
    return {
      ...product,
      color: Object.keys(product.colors)[0],
    };
  } else {
    const product = products[type][genre.toLowerCase()].filter(
      product => product.name === name
    );
    return { ...product[0], genre, type, color };
  }
};
