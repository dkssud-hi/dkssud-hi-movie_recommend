import { useEffect, useState } from "react";
import ListGenre from "../components/ListGenre";
import Roading from "../components/Roading";
import { BsFilm } from "react-icons/bs";
import "../css/genre.css";
function Genre() {
  const [genre, setGenre] = useState("Total");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState([]);
  const [romance, setRomance] = useState([]);
  const [action, setAction] = useState([]);
  const [fantasy, setFantasy] = useState([]);
  const [drama, setDrama] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [list, setList] = useState([]);
  const changeGenre = (event) => {
    if (event.target.value === "Total") {
      setLoading(true);
      setList(total);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Romance") {
      setLoading(true);
      setList(romance);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Action") {
      setLoading(true);
      setList(action);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Fantasy") {
      setLoading(true);
      setList(fantasy);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Drama") {
      setLoading(true);
      setList(drama);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Comedy") {
      setLoading(true);
      setList(comedy);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Adventure") {
      setLoading(true);
      setList(adventure);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Animation") {
      setLoading(true);
      setList(animation);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else if (event.target.value === "Mystery") {
      setLoading(true);
      setList(mystery);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);
      setList(total);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    }
  };
  const getRating = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
    ).json();
    setTotal(json.data.movies);
    getRomance();
    getAction();
    getFantasy();
    getDrama();
    getComedy();
    getAdventure();
    getAnimation();
    getMystery();
    setList(json.data.movies);
    setLoading(false);
  };

  const getRomance = async () => {
    const json_romance = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Romance&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setRomance(json_romance.data.movies);
  };
  const getAction = async () => {
    const json_action = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Action&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setAction(json_action.data.movies);
  };
  const getFantasy = async () => {
    const json_fantasy = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Fantasy&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setFantasy(json_fantasy.data.movies);
  };
  const getDrama = async () => {
    const json_drama = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Drama&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setDrama(json_drama.data.movies);
  };
  const getComedy = async () => {
    const json_comedy = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Comedy&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setComedy(json_comedy.data.movies);
  };
  const getMystery = async () => {
    const json_mystery = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Mystery&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setMystery(json_mystery.data.movies);
  };
  const getAnimation = async () => {
    const json_animation = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Animation&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setAnimation(json_animation.data.movies);
  };
  const getAdventure = async () => {
    const json_adventure = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=Adventure&&sort_by=rating&&limit=50&&page=2`
      )
    ).json();
    setAdventure(json_adventure.data.movies);
  };

  useEffect(() => {
    getRating();
  }, []);

  return (
    // Loading중 넣고, 버튼 클릭마다 리스트 바뀌도록, 리스트에 들어가는 목록은 컴포넌트로 제작
    <div>
      {loading ? (
        <Roading />
      ) : (
        <div className="genre_main">
          <div className="genre_section">
            <select name="genres" className="select_box" onChange={changeGenre}>
              <option option disabled selected value="">
                Choose a Genre
              </option>
              <option value="Total">Total</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Mystery">Mystery</option>
              <option value="Animation">Animation</option>
              <option value="Adventure">Adventure</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
          <div id="scroll-container" className="list_section">
            {list.map((movie) => (
              <ListGenre
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.medium_cover_image}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Genre;
