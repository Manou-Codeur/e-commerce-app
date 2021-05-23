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
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase().trim())
  );
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

export const fetchProduct = id => {
  const index = id - 1;
  return allProducts[index];
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
      pid: fullProductDetails.id,
      img: fullProductDetails.colors[cardProduct.color][0],
      amount: cardProduct.amount,
    };
    products.push(product);
  }

  return products;
};

export const getTotalPrice = cardProduct => {
  const products = fetchCardProducts(cardProduct);
  let totalPrice = 0;

  for (let product of products) {
    totalPrice +=
      parseFloat(product.price.split("$")[1].trim()) * parseInt(product.amount);
  }

  return `$ ${totalPrice}.00`;
};
