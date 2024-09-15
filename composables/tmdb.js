export const useTmdb = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_API_KEY,
    },
  };
  const fetchPopularMovies = async (endPoint) => {
    console.log(endPoint);
    try {
      const data = await $fetch(`${baseUrl}${endPoint}`, options);
      return data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      return [];
    }
  };

  return {
    fetchPopularMovies,
  };
};
