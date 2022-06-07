const fetchApi = async () => {
  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const responde = await fetch(urlApi);
  const { results } = await responde.json();
  return results;
};

export default fetchApi;
