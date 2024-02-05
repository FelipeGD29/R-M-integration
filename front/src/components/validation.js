const validation = (userData) => {
  const errorObj = {};
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errorObj.email = "Tiene que ser un email";
  }
  if (userData.email == "") {
    errorObj.email = "Rellenar con un email";
  }
  if (userData.email.length > 35) {
    errorObj.email = "No puede tener más de 35 caracteres";
  }
  if (!/\d/.test(userData.password)) {
    errorObj.password = "La contraseña debe tener por lo menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errorObj.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }
  return errorObj;
};

export default validation;
