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

// export const getProduct = (filter, genre, name) => {
//   const productList = products[filter][genre];
//   for (let product of productList) {
//     if (product.name === name) return product;
//   }
// }
