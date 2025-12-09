import React, { useState } from "react";
import styles from "./Search.module.css";
import searchIcon from "../../Assets/SearchIcon.png";

function Search({ placeholder ="Search a song of your choice", searchData }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (searchData) searchData(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        style={{
          flex: 1,
          padding: "8px 12px",
          fontSize: "14px",
          border: "none",
          outline: "none",
        }}
      />
      <div className="wrapper"
      style={{
          padding: "8px 12px",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
        }}>
       <img src={searchIcon} alt="search" className={styles.icon} /> 
      </div>
    </div>
  );
}

export default Search; 

