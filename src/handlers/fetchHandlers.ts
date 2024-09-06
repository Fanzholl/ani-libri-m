import { getGenres, getTitles, getTitlesByGenre } from "../http/axios.js";
import { TitleGenres, GenreTitleList } from '../types/Title.ts';

export async function fetchGenres() {
      const result: TitleGenres = await getGenres();
      return result;
}

export async function fetchTitlesByGenres(generes) {

      const result: Array<Object> = generes.map(async (genre) => {
            const result = await getTitlesByGenre(genre);
            const genreTitleList: GenreTitleList = {
                  genre: genre,
                  titleList: result,
            }; return genreTitleList;
      });
}

export async function fetchTitiles(setTitiles) {
      const result = await getTitles();
      setTitiles(result);
};