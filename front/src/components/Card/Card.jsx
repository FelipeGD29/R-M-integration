import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";

const Card = ({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  onClose,
}) => {
  const location = useLocation();

  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? dispatch(removeFav(id))
      : dispatch(
          addFav({ id, name, status, gender, species, origin, image, onClose })
        );
    setIsFav(!isFav);
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <article className={style.container}>
      <Link to={`/detail/${id}`}>
        <div className={style.rombus}>
          <div className={style.content}>
            <div className={style.relative}>
              <img src={image} alt={name} className={style.image} />
              <div className={style.data}>
                <h2 className="card-name">{name}</h2>
                <h2>Status: {status}</h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div>
        {location.pathname != "/favorites" && (
          <button onClick={() => onClose(id)} className={style.deleteBtn}>
            <svg fill="red" height={15} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>
          </button>
        )}
        <button onClick={handleFavorite} className={style.favBtn}>
          {isFav ? "💚" : "🤍"}
        </button>
      </div>
    </article>
  );
};

export default Card;
