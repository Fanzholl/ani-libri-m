import React, { useEffect, useState } from "react";
import CardsListContent from "../cards/CardsListContent.tsx";

type Props = {
      loading: Boolean,
      titles: Array<any>,
}

function CardsList({ loading, titles }: Props): JSX.Element {
      

      console.log(titles);

      if (loading) {
            return <div>Loading...</div>;
      }

      if (!titles.length || !titles[0]?.titleList) {
            return <div>No titles found</div>;
      }

      const GenreLIST: JSX.Element[] = titles.map(el => {
            return <CardsListContent key={el.genre} cardsList={el} />
      });

      return (
            <div className="CardsList">
                  {GenreLIST}
            </div>
      );
}

export default CardsList