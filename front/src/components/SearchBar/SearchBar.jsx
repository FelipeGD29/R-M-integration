import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const [previousId, setPreviousId] = useState([]);
  const handleChange = (event) => {
    setPreviousId(...previousId, event.target.value);
    setId(event.target.value);
  };
  const [random, setRandom] = useState(Math.floor(Math.random() * 826) + 1);
  useEffect(() => {
    console.log(random);
  }, [random]);
  return (
    <div className={style.container}>
      <label>Escribe un ID para buscar tu personaje (HASTA 826!)</label>
      <svg
        fill="green"
        width={30}
        height={30}
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z"
          fill-rule="nonzero"
        />
      </svg>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="id..."
        className={style.inputSearch}
      />
      <button className={style.agregarBtn} onClick={() => onSearch(id)}>
        +
      </button>
      <button
        className={style.randomBtn}
        onClick={() => {
          setRandom(Math.floor(Math.random() * 826) + 1), onSearch(random);
        }}
      >
        Random
        <svg
        fill="green"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
        >
          <path d="M18 9v-3c-1 0-3.308-.188-4.506 2.216l-4.218 8.461c-1.015 2.036-3.094 3.323-5.37 3.323h-3.906v-2h3.906c1.517 0 2.903-.858 3.58-2.216l4.218-8.461c1.356-2.721 3.674-3.323 6.296-3.323v-3l6 4-6 4zm-9.463 1.324l1.117-2.242c-1.235-2.479-2.899-4.082-5.748-4.082h-3.906v2h3.906c2.872 0 3.644 2.343 4.631 4.324zm15.463 8.676l-6-4v3c-3.78 0-4.019-1.238-5.556-4.322l-1.118 2.241c1.021 2.049 2.1 4.081 6.674 4.081v3l6-4z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
