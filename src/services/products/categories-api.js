/**
 * Fetches product categories from the Fake Store API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of product categories.
 */
export const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
};