import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
  const endpoint = "https://r-m-integration.vercel.appcd fr/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  try {
    const endpoint = `https://r-m-integration.vercel.app/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      console.log(data.message);
      return dispatch({
        type: REMOVE_FAV,
        payload: data.myFavorites,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
