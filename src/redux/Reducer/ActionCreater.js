import { actionType } from "./../actionType";
export const addToCart = (card) => {
  let data = JSON.parse(localStorage.getItem("basket")) || [];
  const fount = data.find((el) => el.id === card.id);
  if (fount) {
    data = data.map((el) =>
      el.id === card.id ? { ...el, count: el.count + 1 } : el
    );
  } else {
    data.push({ ...card, count: 1 });
  }
  localStorage.setItem("basket", JSON.stringify(data));
  return { type: actionType.ADD_TO_BASKET, payload: card };
};

export const minusCartCount = (card) => {
  let data = JSON.parse(localStorage.getItem("basket")) || [];
  data = data.map((item) =>
    item.id === card.id
      ? { ...item, count: item.count > 1 ? item.count - 1 : item.count }
      : item
  );

  localStorage.setItem("basket", JSON.stringify(data));
  return { type: actionType.MINUS_TO_BASKET, payload: card };
};

export const delInBasket = (id) => {
  let data = JSON.parse(localStorage.getItem("basket")) || [];
  data = data.filter((el) => el.id !== id);
  localStorage.setItem("basket", JSON.stringify(data));
  return { type: actionType.DEL_IN_BASKET, payload: id };
};
