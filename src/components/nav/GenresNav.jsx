import React from "react";

import { Link } from "react-router-dom";

const GenresNav = ({ genres }) => {
  return (
    <nav className="nav d-flex justify-content-between">
      {genres.map(genre => (
        <Link
          key={genre._id}
          to={"/genre/" + genre.name}
          className="text-muted"
          size="sm"
        >
          {genre.name}
        </Link>
      ))}
    </nav>
  );
};

export default GenresNav;
