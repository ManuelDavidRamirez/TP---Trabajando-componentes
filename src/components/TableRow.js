import React from "react";

const TableRow = ({ movie }) => {
  const { title, length, rating, genres, awards } = movie;
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
            {
                genres.map(genre => <li key = {genre + index}>{genre}</li>)
            }
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};

export default TableRow;
