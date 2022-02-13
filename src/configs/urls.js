const baseURL = 'https://api.themoviedb.org/3';

export const apiKey='?e840b4a130939e123f52c7bf138c81a8&language=uk-UA';
export const urls = {
    movies:(page, genre) => `/discover/movie${apiKey}&region=UA&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    genres: (id) => `/movie/${id}${apiKey}`,
    allGenres: '/genre/movie/list' + apiKey
}
export default baseURL;