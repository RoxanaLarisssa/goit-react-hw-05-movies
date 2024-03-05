export const transformMoviesData = data => {
  return data.results.map(({ id, title, poster_path }) => ({
    id: id,
    name: title,
    image: poster_path,
  }));
};
export function percent(score) {
  return Math.floor(score * 10);
}
