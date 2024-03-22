import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import './Home.scss'
import Card from "../../components/cards/Card";
import Loader from "../../components/loader/Loader";
import { fetchCategories } from "../../services/api";

export default function Home() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader/>
      ) : (
        <Card data={response} heading={"Categories"} />
      )}
    </>
  );
}
