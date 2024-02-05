const axios = require("axios");

const getCharById = async (req, res) => {
  
  try{
    const { id } = req.params;
    const {data} = await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-felipegd29`);
    
    if (data.id) {
      const character = {
        id,
        name: data.name,
        status: data.status,
        origin: data.origin,
        image: data.image,
        species: data.species,
        gender: data.gender,
      };
      return res.status(200).json(character);
    }
      return res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message)
}
};

module.exports = { getCharById };
