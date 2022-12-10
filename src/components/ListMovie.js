import "../css/movie.css";
import { Link } from "react-router-dom";

function ListMovie({ title, image, id }) {
  const handleImgError = (e) => {
    e.target.src =
      "https://w.namu.la/s/ab0d87009c9db0270b1f70057d630639ba36026f242302dd579dff80d299357e00bd52ed0edae5e23b5fd96a981bef40ee6e32d9f26e3cdf4ac4ccc35db3b156bf534face79c3604168b18d65e5a329512f50af93c8a95ea470cda00d0b2f868d229f3010f263bd6aa9d5cd963119fa2";
  };
  return (
    <div className="slid_box">
      <img
        className="movie_img"
        src={image}
        onError={handleImgError}
        alt={title}
      />

      <div className="title_box">
        <Link to={`/Detail/${id}`}>
          <div className="title">{title}</div>
        </Link>
        <div className="alert">Click for Detail</div>
      </div>
    </div>
  );
}

export default ListMovie;
