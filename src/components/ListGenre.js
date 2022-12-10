import { Link } from "react-router-dom";
import "../css/listgenre.css";
function ListGenre({ id, title, image, rating }) {
  const handleImgError = (e) => {
    e.target.src =
      "https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg";
  };
  return (
    <div className="genre_list">
      <img
        className="genre_img"
        src={image}
        alt={title}
        onError={handleImgError}
      />
      <div className="genre_list_title">
        <Link to={`/Detail/${id}`}>{title}</Link>
      </div>
      <div className="genre_list_rating">
        <h2>10 / {rating ? rating : title}</h2>
      </div>
    </div>
  );
}

export default ListGenre;
