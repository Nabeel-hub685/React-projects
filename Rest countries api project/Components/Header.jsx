import React, { useEffect, useState } from "react";

export default function Header() {
  console.log(JSON.parse(localStorage.getItem("isDarkMode")));
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  ); // pehli br ham useState me false rkh k localstoarage ko value de chuke hen!
  console.log("isDArk first time", isDark);
  console.log("ye header he");
  console.log(JSON.parse(localStorage.getItem("isDarkMode")));

  if (isDark) {
    // isDark variable me fals hoga to ye condition run hojaegi qk !false = true hots he
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world ...............?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              //document.body.classList.toggle('dark');
              setIsDark(!isDark);
              console.log(!isDark); // q k method call se ham nae isDark variable ko value derhy hen , neechy wali lines me isDark ki wahi value rahegi
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${!isDark ? "moon" : "sun"}`}></i>
            &nbsp;&nbsp;{!isDark ? "Dark Mode" : "light Mode"}
          </p>
        </div>
      </header>
    </>
  );
}
