import React, { useState, useEffect } from "react";
import "../styles/UI/Header.scss";
import { fetchGenres, fetchTitlesByGenres, fetchTitlesByName } from "../handlers/fetchHandlers.ts";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
      const [search, setSearch] = useState<string>('');
      const [genres, setGenres] = useState<any[]>([]);
      const [titles, setTitles] = useState<any[]>([]);
      const [loading, setLoading] = useState<boolean>(true);

      // Эффект для загрузки данных по жанрам при монтировании компонента
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const genres = (await fetchGenres()).slice(0, 5);
                        setGenres(genres);
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

      // Эффект для поиска по ключевым словам
      useEffect(() => {
            if (search !== '') {
                  const fetchData = async () => {
                        setLoading(true);  // Устанавливаем состояние загрузки перед началом запроса
                        try {
                              const result = await fetchTitlesByName(search);
                              setTitles(result);
                        } catch (error) {
                              console.error("Error fetching data:", error);
                        } finally {
                              setLoading(false);
                        }
                  };

                  fetchData();
            } else {
                  const fetchData = async () => {
                        setLoading(true);
                        try {
                              const result = await fetchTitlesByGenres(genres);
                              setTitles(result);
                        } catch(error) {
                              console.error("Error fetching data:", error);
                        } finally {
                              setLoading(false);
                        }
                  }
                  fetchData();
            }
      }, [search]);  // Включаем search в зависимости, чтобы эффект выполнялся при его изменении

      return (
            <>
                  <header>
                        <nav>
                              <NavLink to="/">Главная</NavLink>
                        </nav>
                        <div className="SearchBar">
                              <input 
                                    type="search" 
                                    id="headerSearch" 
                                    name="searchTitle" 
                                    value={search} 
                                    onChange={(e) => setSearch(e.target.value)} 
                              />
                              <button>Поиск</button>
                        </div>
                  </header>
                  <main>
                        <Outlet context={{ loading, titles }} />
                  </main>
            </>
      );
}

export default Layout;
