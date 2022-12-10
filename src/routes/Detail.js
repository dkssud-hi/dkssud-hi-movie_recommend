import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Roading from "../components/Roading";
import "../css/detail.css";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [detailLoading, setDetailLoading] = useState(true);

  const handleImgError = (e) => {
    e.target.src =
      "https://w.namu.la/s/ab0d87009c9db0270b1f70057d630639ba36026f242302dd579dff80d299357e00bd52ed0edae5e23b5fd96a981bef40ee6e32d9f26e3cdf4ac4ccc35db3b156b89fe11dd1ac8ad6678019c267c16d8802e5bd2072bbf42d5ca34d0747463413";
  };

  const Play_trailer = ({ code }) => {
    return (
      <div>
        <iframe
          width="400"
          height="300"
          src={`https://www.youtube.com/embed/${code}?autoplay=1&mute=1`}
        ></iframe>
      </div>
    );
  };

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };

  useEffect(() => {
    getMovie();
    setTimeout(function () {
      setDetailLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {detailLoading ? (
        <Roading />
      ) : (
        <div>
          <img
            className="back_ground"
            src={detail.background_image}
            alt={detail.title}
          />
          <div className="large_box">
            <div className="detail_box">
              <img
                className="image_position"
                src={detail.medium_cover_image}
                alt={detail.title}
                onError={handleImgError}
              />
              <div>
                <h2>{detail.title}</h2>
                <ul>
                  <li>
                    <h3>Rating&nbsp; &nbsp;10/{detail.rating}</h3>
                  </li>

                  <li>
                    <h3>genres</h3>
                  </li>
                  <ul>
                    {detail.genres &&
                      detail.genres.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                  </ul>
                </ul>
              </div>
              {detail.yt_trailer_code === "" ? (
                <div className="point_show_item">
                  <h3>예고편이 존재하지 않습니다.</h3>
                </div>
              ) : (
                <div className="trailer_box">
                  <div>
                    <h4>
                      {"<"}Trailer{">"}
                    </h4>
                  </div>
                  <Play_trailer key={detail.id} code={detail.yt_trailer_code} />
                </div>
              )}
            </div>
            <div className="Point_textbox">
              <h3>description</h3>
              {detail.description_full === "" ? (
                <div>요약본이 제공되지 않은 영화입니다!</div>
              ) : (
                <div>{detail.description_full}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
