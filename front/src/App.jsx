import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
// import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
import bgImg from "./images/Login.webp"

function App() {
  //------------onSearch------------------------------------------------------------

  const [characters, setCharacters] = useState([]);
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `https://r-m-integration.vercel.app/rickandmorty/character/${id}`
      );
      if (data.name) {
        if (
          !characters.some((char) => {
            return char.name == data.name;
          })
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else window.alert("¡This character has been already added!");
      }
    } catch {
      window.alert("¡There's no character with this id!");
    }
  };

  //------------onClose------------------------------------------------------------

  const dispatch = useDispatch();
  const onClose = (id) => {
    setCharacters(characters.filter((char) => id != char.id));
    dispatch(removeFav(id));
  };

  //------------Log in------------------------------------------------------------

  // let location = useLocation();
  // const navigate = useNavigate();
  // const [access, setAccess] = useState(false);
  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access]);

  // const login = async (userData) => {
  //   try {
  //     const { email, password } = userData;
  //     const URL = "http://localhost:3001/rickandmorty/login/";
  //     const { data } = await axios(
  //       URL + `?email=${email}&password=${password}`
  //     );
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate("/home");
  //   } catch {
  //     window.alert("Email o contraseña invalida");
  //   }
  // };

  return (
    <div className="App">
      <img src={bgImg} alt="bgImg" className="bgImg" />
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
