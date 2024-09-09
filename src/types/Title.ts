export type TitleObject = {
      name: string,
      posterURL: string,
      description: string,
      genres: Array<string>,
      season: {
            string: string,
            year: string,
      },
};

export type TitleGenres = Array<string>;

export type TitleName = string;

export type GenreTitleList = {
      genre: string,
      titleList: any[],
}

export type NameTitleList = {
      name: string,
      titleList: any[],
}