import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return data.categories;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

export const fetchMealDataWithID = async (id) => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return data.meals;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

export const fetchMealByCategories = async (category) => {
  try {
    const { data } = await axios.get(

      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    return data.meals;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
};
