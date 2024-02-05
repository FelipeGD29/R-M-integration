let myFavorites = [];

const postFav = (req, res) => {
  const { id, name, status, origin, image, species, gender } = req.body;

  if (!id || !name || !status || !origin || !image || !species || !gender)
    res.status(401).send("Missing data");
  const newFavorite = { id, name, status, origin, image, species, gender };
  myFavorites.push(newFavorite);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(401).json("ID's missing");
  }
  const favoriteToDeleteName = myFavorites.find(
    (favorite) => favorite.id === id
  );
  myFavorites = myFavorites.filter((favorite) => favorite.id !== id);

  return res.status(200).json({message: `${favoriteToDeleteName.name} has been deleted of your favorites`, myFavorites});
};

module.exports = {
  postFav,
  deleteFav
};
