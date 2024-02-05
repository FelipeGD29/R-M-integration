import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case FILTER:
      if (action.payload === "All")
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case ORDER:
      let orderCopy = [...state.myFavorites];
      if (action.payload === "A") {
        orderCopy.sort((a, b) => {
          if (a.id > b.id) return 1;
          else return -1;
        });
      } else if (action.payload === "D") {
        orderCopy.sort((a, b) => {
          if (a.id < b.id) return 1;
          else return -1;
        });
      }
      return {
        ...state,
        myFavorites: orderCopy,
      };
    default:
      return { ...state };
  }
};

export default reducer;
