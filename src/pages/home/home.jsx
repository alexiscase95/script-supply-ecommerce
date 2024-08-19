/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Grid from '../../components/grid/grid';
import { fetchCategories } from '../../services/products/categories-api';
import Masthead from '../../components/masthead/masthead';
import { mastheadContainerStyle } from "./home-styles"

const Home = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
          };
          
          loadCategories();
    }, []);

  return (
    <section id="home">
        <div id={"masthead-container"} css={mastheadContainerStyle}>
            <Masthead />
        </div>
        {/* two image content cards */}
        {/* Teaser */}
        {/* carousel */}
        {/* Footer */}
        {categories?.length > 0 && (
            <Grid items={categories.slice(0, 4)} columns={5} colSize={337} />
        )}
    </section>
  );
};

export default Home;