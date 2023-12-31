export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resposta = await data.json();
  return resposta;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const resposta = await data.json();
  return resposta;
}

export async function getProductById(PRODUCT_ID) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const data = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const resposta = await data.json();
  return resposta;
}
// CREDITOS: funcao services da trybe do trybetunes para salvar no localstorage

const readReviews = (id) => JSON.parse(localStorage.getItem(id));

const saveReviews = (reviews, id) => localStorage
  .setItem(id, JSON.stringify(reviews));

export const getReviews = (id) => {
  const reviewsSent = readReviews(id);
  return reviewsSent;
};

// const saveReview = (review) => localStorage.setItem(localReviews, JSON.stringify(review));
export function addReview(review, id) {
  if (review) {
    const reviewsSent = readReviews(id);
    return saveReviews([...reviewsSent, review], id);
  }
}
