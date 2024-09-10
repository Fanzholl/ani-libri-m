export type TitleObject = {
      id: string,
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

export type Title = {
      id: string;
      title: {
            id: string;
            name: string;
            posterURL: string;
            description: string;
            genres: Array<string>;
            season: {
                  string: string;
                  year: string;
            };
            posters: {
                  original: {
                        url: string,
                  };
                  medium: {
                        url: string,
                  };
                  snall: {
                        url: string,
                  };
            };
            player: {
                  host: string;
                  list: {
                        [key: string]: {
                              hls: {
                                    fhd: string;
                                    hd: string;
                                    sd: string;
                              }
                        }
                  };
            };
      }
}
