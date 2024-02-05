import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div>
        <select name="order" id="order" onChange={handleOrder}>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </select>
        <select name="filter" id="filter" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <Cards characters={myFavorites} />
    </div>
  );
};

export default Favorites;
