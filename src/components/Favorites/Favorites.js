import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Favorites.css';
import { mdiShopping } from '@mdi/js';
import {Icon} from '@mdi/react';
import { imageFallback } from '../../utility/CommonUtilities';
import { CartContext } from '../../App';

const Favorites = ({favorites}) => {
    const {cart, setCart} = useContext(CartContext);
    const handleAddCart = (e) => {e.stopPropagation(); setCart({...cart, count: cart.count + 1})};
    const history = useHistory();
    return ( 
        <div className="favorites">
            <div className="heading">
                <div className="heading-left">
                    <h6>Favorites</h6>
                    <p className="body-2">Enjoy what you have been ordering</p>
                </div>
                <div className="heading-right">
                    {cart.count}
                   <Icon path={mdiShopping} size={1} color={'#d3d3d3'}/>
                </div>
            </div>
            <div className="favorites-body">
                <div className="fav-list" style={{width: favorites.length * 300}}>
                    {favorites.map(item => (
                        <div className="fav-list-item" key={item.name} onClick={() => history.push(`/recipe/${encodeURI(item.name)}`, item)}>
                            <div className="image-wrap"><img onError={imageFallback} alt={item.name} src={item.image} /></div>
                            <div className="fav-footer">
                                <div  className="footer-desc">
                                <p className="fav-dish-name body-2">{item.name}</p>
                                <p className="body-2">${item.price}</p>
                                </div>
                                <div className="footer-btn">
                                    <button onClick={handleAddCart} type="button" className="button">Reorder</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Favorites;