import React from "react";

export default function SearchBar(props) {
  function handleOnSearch(event) {
    event.preventDefault();
    if (typeof props.onSearch === "function") {
      let input = document.getElementById("nav-input-search");
      props.onSearch(input.value);
      input.value = "";
    }
  }
  return (
    <div>
      <form className="d-flex" onSubmit={handleOnSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search City"
          id="nav-input-search"
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
