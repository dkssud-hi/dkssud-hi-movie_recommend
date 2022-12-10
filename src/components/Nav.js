import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/nav.css";
function Nav() {
  let last_known_scroll_position = 0;
  let ticking = false;
  const [changing, setChanging] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const doSomething = (scroll_pos) => {
    //스크롤 포지션에 따라 changing과 scrolling을 바꿔주는 함수
    if (scroll_pos > 10) {
      setChanging(true);
      setScrolling(true);
    } else {
      setChanging(false);
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });

  const onMouseOverOut = () => {
    if (scrolling) return;
    setChanging((current) => !current);
  };

  return (
    <div
      onMouseOver={onMouseOverOut}
      onMouseOut={onMouseOverOut}
      style={
        changing
          ? {
              backgroundColor: "white",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }
          : { backgroundColor: "transparent" }
      }
      className="header"
    >
      <Link
        style={{
          textDecoration: "none",
          fontSize: "2.5em",
          fontWeight: "bold",
          color: "#E41E1B",
          marginLeft: "15px",
          marginTop: "5px",
          marginBottom: "9px",
        }}
        to="/"
      >
        Y`flix
      </Link>
    </div>
  );
}

export default Nav;
