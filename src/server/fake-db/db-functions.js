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
    shoes.men[2],
    shoes.women[1],
    shoes.women[3],
    clothes.men[0],
    clothes.women[1],
    clothes.kids[0],
    clothes.kids[1],
  ];

  //we don't want to render the curr product in the slider
  if (currProduct) {
    const filtredRecommend = recomended.filter(
      product => product.name !== currProduct
    );
    if (filtredRecommend.length > 6) return recomended.slice(0, 6);
    return filtredRecommend;
  }
  return recomended.slice(0, 6);
};

export const fetchProduct = (type, genre, name, color) => {
  //here if we come from the search component (no type, genre and color)
  if (!color) {
    //i'm using "genre" coz in this case the "genre" is considred as "id"
    const index = genre;
    const product = allProducts[index - 1];
    return product;
  } else {
    const product = products[type][genre.toLowerCase()].filter(
      product => product.name === name
    );
    return product[0];
  }
};

export const fetchGenres = genre => {
  return {
    shoes: [...shoes[genre]],
    clothes: [...clothes[genre]],
  };
};

export const fetchCardProducts = cardProducts => {
  const products = [];

  for (let cardProduct of cardProducts) {
    const fullProductDetails = allProducts[cardProduct.pid - 1];
    const product = {
      genre: fullProductDetails.genre,
      type: fullProductDetails.type,
      price: fullProductDetails.price,
      name: fullProductDetails.name,
      img: fullProductDetails.colors[cardProduct.color][0],
      pid: fullProductDetails.id,
      amount: cardProduct.amount,
    };
    products.push(product);
  }

  return products;
};
