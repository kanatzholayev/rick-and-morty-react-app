export const getCharactersList = async (
  page = 1,
  name = "",
  status = "",
  gender = "",
  species = ""
) => {
  const apiData = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`
  );
  const apiConvertedData = await apiData.json();
  return apiConvertedData;
};

export const getEpisodeList = async (page = 1, name) => {
  const apiData = await fetch(
    `https://rickandmortyapi.com/api/episode/?page=${page}&name=${name}`
  );
  const apiConvertedData = await apiData.json();
  return apiConvertedData;
};

export const getLocationList = async (page = 1, name, dimension, type) => {
  const apiData = await fetch(
    `https://rickandmortyapi.com/api/location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`
  );
  const apiConvertedData = await apiData.json();
  return apiConvertedData;
};
