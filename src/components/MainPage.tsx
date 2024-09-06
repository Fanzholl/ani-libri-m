import React, { useEffect, useState } from "react";
import '../styles/Lists/MainPage.scss';
import Card from "./cards/Card.tsx";
import { fetchGenres, fetchTitiles, fetchTitlesByGenres } from "../handlers/fetchHandlers.ts";
import CardsList from "./cards/CardsList.tsx";

function MainPage(): JSX.Element {
      const [titles, setTitles] = useState<any[]>([]);
      const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const genres = (await fetchGenres()).slice(0, 5);
                        const result = await fetchTitlesByGenres(genres);
                        setTitles(result);
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchData();
      }, []);

      console.log(titles);

      if (loading) {
            return <div>Loading...</div>;
      }

      if (!titles.length || !titles[0]?.titleList) {
            return <div>No titles found</div>;
      }

      const GenreLIST: JSX.Element[] = titles.map(el => {
            return <CardsList key={el.genre} cardsList={el}/>
      });

      return (
            <div className="MainPage">
                  <div className="CardsList">
                        {GenreLIST}
                  </div>
            </div>
      );
}

export default MainPage;