import React, { useEffect, useState } from "react";
import '../styles/Lists/MainPage.scss';
import CardsList from "./Lists/CardsList.tsx";
import { useOutletContext } from "react-router-dom";


function MainPage(): JSX.Element {
      const { loading, titles } = useOutletContext<{ loading: boolean, titles: any[] }>();
      
      return (
            <div className="MainPage">
                  <CardsList loading={loading} titles={titles}/>
            </div>
      );
}

export default MainPage;