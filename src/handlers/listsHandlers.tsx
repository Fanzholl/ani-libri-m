import React from "react";
import Card from "../components/cards/Card.tsx";

export function titleListCreater(titleList: Array<any>) {
      return titleList.map(el => {
            return <Card key={el.id} name={el.names.ru} posterURL={el.posters.original.url} description={el.description} genres={el.genres} season={el.season} />
      });
}