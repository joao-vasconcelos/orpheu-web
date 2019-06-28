import React from "react";

const GenresNav = ({ genres }) => {
  return (
    <nav className="nav d-flex justify-content-between">
      {genres.map(genre => (
        <a
          key={genre._id}
          href={"/genres/" + genre._id}
          className="text-muted"
          size="sm"
        >
          {genre.title}
        </a>
      ))}
    </nav>
  );
};

export default GenresNav;
