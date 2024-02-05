import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={style.contenedor}>
      <div className={style.bttns}>
        <Link to="/home">
          <button className={style.homeBtn}>
            <svg
            fill="green"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
            </svg>
            Home
          </button>
        </Link>
        <Link to="/about">
          <button>
            {"<"}aboutMe{"/>"}
          </button>
        </Link>
        <Link to="/favorites">
          <button>Favorites 💚</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};
export default Nav;
