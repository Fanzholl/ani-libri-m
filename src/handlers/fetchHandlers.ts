import { getGenres, getTitles, getTitlesByGenre } from "../http/axios.js";
import { TitleGenres, GenreTitleList } from '../types/Title.ts';

export async function fetchGenres() {
      const result: TitleGenres = await getGenres();
      return result;
}

export async function fetchTitlesByGenres(genres: TitleGenres) {
      console.log(genres);
      const result: Array<Object> = await Promise.all(genres.map(async (genre) => {
            const titles = await getTitlesByGenre(genre);
            const genreTitleList: GenreTitleList = {
                  genre: genre,
                  titleList: titles,
            };
            return genreTitleList;
      }));

      // console.log(result);

      return result;
}

export async function fetchTitiles(setTitiles) {
      const result = await getTitles();
      setTitiles(result);
};