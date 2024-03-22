import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealByCategories } from "../../services/api";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Items.scss";
import { useCart } from "../../contexts/CartContext";
import Quantity from "../../components/quantity/Quantity";
import AddToCart from "../../components/button/AddToCart";
import Loader from "../../components/loader/Loader";

export default function Items() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { cartItems } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchMealByCategories(id);
        setResponse(res);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="Items">
        <Navbar />
        {loading ? ( 
          <Loader/>
        ) : (
          <div className="Items-Grid">
            {response?.map((value) => (
              <Link
                to={`/details/${value.idMeal}`}
                className="Cards"
                key={value.idMeal}
              >
                <img src={value.strMealThumb} alt={`${value.strMeal}`} />
                <div className="Card-details">
                  <p>{value.strMeal}</p> <p>Price: 120</p>
                </div>

                {cartItems.find((item) => item.idMeal === value.idMeal)
                  ?.quantity > 0 ? (
                  <Quantity id={value.idMeal} />
                ) : (
                  <AddToCart data={value} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
