import React from "react";
import {Link } from 'react-router-dom';
import './Card.scss'
export default function Card(props) {
  console.log("props",props)
  return (
    <div className="Card">
      <h1 className="Card-Heading">{[props.heading]}</h1>

      <div className="Card-Grid">
        {props.data.map((value) => (
          <Link className="Cards" to={`/items/${value.strCategory}`}  key={value.idCategory}>
            <img src={value.strCategoryThumb} alt={value.strCategory}></img>
            {value.strCategory}
          </Link>
        ))}
      </div>
    </div>
  );
}
