import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  const data = [
    {
      title: "Billy Elliot",
      length: 123,
      rating: 5,
      genres: ["Drama", "Comedia"],
      awards: 2,
    },
    {
      title: "Alicia en el país de las maravillas",
      length: 142,
      rating: 4.8,
      genres: ["Drama", "Comedia", "Acción"],
      awards: 3,
    },
  ];
  return (
    <div className="container-fluid mb-4">
      <div className="card shadow">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Duración</th>
              <th scope="col">Rating</th>
              <th scope="col">Generos</th>
              <th scope="col">Premios</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => (
              <TableRow movie={movie} ley={movie.title + index} />
            ))}
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
