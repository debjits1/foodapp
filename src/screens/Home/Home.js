import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Favorites from '../../components/Favorites/Favorites';
import FoodList from '../../components/FoodList/FoodList';

const Home = () => {
    const [favoriteList, setFavoriteList] = useState([]);
    const [recipeList, setRecipeList] = useState([]);
    const [categoryList, setCategory] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios.get('http://temp.dash.zeta.in/food.php');
            const resultData = result ? result.data : {};
            const {recipes, categories}  = resultData;
            const favorites = recipes.filter(item => item.isFavourite);
            setRecipeList(recipes);
            setFavoriteList(favorites);
            setCategory(categories);
        };
        fetchData();
    }, []);
    return ( 
        <div className="home container">
            <Favorites favorites={favoriteList}></Favorites>
            <FoodList categoryList={categoryList} recipeList={recipeList}></FoodList>
        </div>
     );
}
 
export default Home;