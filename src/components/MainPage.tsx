import React, { useEffect, useState } from "react";
import '../styles/Lists/MainPage.scss';
import Card from "./cards/Card.tsx";
import { fetchTitiles } from "../handlers/fetchHandlers.ts";

function MainPage(): JSX.Element {
      const [titles, setTitiles] = useState<any[]>([]);

      useEffect(() => {
            fetchTitiles(setTitiles);
      }, []);

      const LIST: JSX.Element[] = titles.map(el => {
            return <Card key={el.id} name={el.names.ru} posterURL={el.posters.original.url} description={el.description} genres={el.genres} season={el.season}/>
      });

      return (
            <div className="MainPage">
                  <div className="CardsList">
                        {LIST}
                  </div>
            </div>
      );
}

export default MainPage;