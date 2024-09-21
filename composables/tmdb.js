export const useTmdb = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzMzN2M1YzVhZTE0NTdkY2Q2MzUyYzE1YTYyM2E5OCIsIm5iZiI6MTcyNjkyODUxMy42MzU3OTEsInN1YiI6IjY2ZTU2Y2I0ZjY3OGViMzUwNjZkODE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mQG1yu0TJD0uKqkMiujpkCxBPeM8F1Cjigv0jjy1L1U",
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
