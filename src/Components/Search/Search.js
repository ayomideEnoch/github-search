import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <div>
      <form id="profile-search" onSubmit={e => props.onSubmitHandler(e)}>
        <label>
          <input
            className="input-field"
            value={props.name}
            onChange={e => props.onChangeHandler(e)}
          /><i class="fas fa-search"></i>
        </label><br />
        <button className="btn search" type="submit">
          Search Github
        </button>
      </form>
    </div>
  );
};

export default Search;