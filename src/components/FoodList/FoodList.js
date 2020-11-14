import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './FoodList.css';
import { mdiMagnify, mdiTune } from '@mdi/js';
import {Icon} from '@mdi/react';
import { imageFallback } from '../../utility/CommonUtilities';
import { CartContext } from '../../App';

const FoodList = ({recipeList, categoryList}) => {
    const {cart, setCart} = useContext(CartContext);
    const handleAddCart = (e) => {e.stopPropagation(); setCart({...cart, count: cart.count + 1})};
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelctedCategory] = useState('');

    const history = useHistory();
    const handleSearch = (e) => {
        const val = e.target.value;
        setSearchText(val);
    };
    const filtered = () => {
        const lowerCasedSearchText = searchText.toLowerCase();
        const filteredList = recipeList.filter(item => item.name.toLowerCase().includes(lowerCasedSearchText));
        const filteredCategories = filteredList.filter(item => {
            return !selectedCategory ? true : selectedCategory === item.category
        });
        return filteredCategories || [];
    }
    
    return ( 
        <div className="food-list">
            <div className="input-wrap">
                <Icon path={mdiMagnify} size={1} color={'#d3d3d3'} />
                <input className="search-input" placeholder="Search for a particular dish or ingredient" type="text" value={searchText} onChange={handleSearch} />
            </div>
            <div className="heading">
                <div className="heading-left">
                    <h6>Select Categories</h6>
                </div>
                <div className="heading-right">
                    <span className="body-2 element-ib content-muted">Filter</span>
                    <Icon className="element-ib" path={mdiTune} size={1} color={'#49C473'} />
                </div>
            </div>
            <div className="category-list">
                {categoryList.map(item => (
                    <div className="category" key={item.name} onClick={() => setSelctedCategory(item.name)}>
                        <img onError={imageFallback} height="20" src={item.image} alt={item.name}/>
                        <span className="body-2">{item.name}</span>
                    </div>
                ))}
            </div>
            <div className="food-list">
                {filtered().map(item => (
                    <div className="recipe card" key={item.name} onClick={() => history.push(`/recipe/${encodeURI(item.name)}`, item)}>
                        <div className="card-image-wrap"><img onError={imageFallback} src={item.image} alt={item.name} /></div>
                        <div className="recipe-footer card-footer">
                            <div className="card-footer-left">
                                <p className="body-2">{item.name}</p>
                                <p className="body-2 bold">${item.price}</p>
                            </div>
                            <div className="card-footer-right">
                                <button onClick={handleAddCart} className="button" type="button">Add to Bag</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default FoodList;