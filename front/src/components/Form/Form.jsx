import { useState, useEffect } from "react";
import validation from "../validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  //---------------userData---------------
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  //---------------errors---------------
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (userData.email !== "" || userData.password !== "") {
      setErrors(validation(userData));
    }
  }, [userData]);

  //---------------handleSubmit---------------
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.contenedor}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>EMAIL</label>
        <input
          type="text"
          onChange={handleChange}
          value={userData.email}
          name="email"
          className={style.input}
        />
        {errors !== "" ? <p className={style.error}>{errors.email}</p> : ""}

        <label>PASSWORD</label>
        <input
          type="text"
          onChange={handleChange}
          value={userData.password}
          name="password"
          className={style.input}
        />
        {errors !== "" ? <p className={style.error}>{errors.password}</p> : ""}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
