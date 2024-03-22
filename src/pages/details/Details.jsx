import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealDataWithID } from "../../services/api";
import Quantity from "../../components/quantity/Quantity";
import Navbar from "../../components/navbar/Navbar";
import AddToCart from "../../components/button/AddToCart";
import { useCart } from "../../contexts/CartContext";
import "./Details.scss"
import Loader from "../../components/loader/Loader";
export default function Details() {
    const { id } = useParams();
    const { cartItems } = useCart();
    const [response, setResponse] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetchMealDataWithID(id);
          setResponse(res[0]);
          console.log(res[0].strMealThumb)
  
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id]);
    return (
      <>
        <Navbar />
  
          <div className="list-details">
        <h2>Food Detail</h2>
        {response ? (
          <div className="list-details-container">
            <div className="left">
             <img src={response.strMealThumb} alt={response.idMeal}/>
            </div>
            <div className="right">
              <h1>{response.strMeal}</h1>
              <p>{response.strInstructions}</p>
            {cartItems.find((item) => item.idMeal === id)?.quantity > 0 ? (
              <Quantity id={id} />
            ) : (
              <AddToCart data={response} />
            )}
            </div>
          </div>
        ) : (
          <Loader/>
        )}
      </div>
      </>
    );
}
