import React from 'react';
import Metric from './metric';

const ContentRowMovies = () => {
    const data = [
      {
        color : "primary",
              title : "Movies in Data Base",
              value : 21,
              icon : "fa-film"
      },
      {
        color : "success",
              title : "Total awards",
              value : 79,
              /* icon : "fa-award" */
      },
      {
        color : "warning",
              title : "Actors quantity",
              value : 49,
              icon : "fa-user"
      }
    ]
    return (
        <div className="row">
            {
              data.map(({color,title,value,icon},index) => <Metric color = {color} title = {title} value = {value} icon = {icon} key = {title + index} />)
            }
          </div>
    );
}

export default ContentRowMovies;
