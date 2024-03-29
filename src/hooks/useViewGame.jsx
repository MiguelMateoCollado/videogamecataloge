import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setViewGame } from "../store/reducers/gamesSlice";
const useViewGame = () => {
  const [read, setRead] = useState(true);
  const { gamename, gameId } = useParams();
  const dispatch = useDispatch();
  const view = useSelector((state) => state.games.gameView);
  const api_url = import.meta.env.VITE_API_URL;
  const api_key = import.meta.env.VITE_API_KEY;
  const api_local = import.meta.env.VITE_API_LOCAL;
  useEffect(() => {
    const fetchData = async () => {
      if (gameId) {
        const response = await fetch(`${api_local}/videogames/${gameId}`);
        const data = await response.json();
        return dispatch(setViewGame(data));
      } else {
        const response = await fetch(
          `${api_url}games/${gamename || gameId}?${api_key}`
        );
        const data = await response.json();
        dispatch(setViewGame(data));
      }
    };
    fetchData();
  }, []);
  return {
    view,
    read,
    setRead,
    gamename,
    gameId,
  };
};

export default useViewGame;
