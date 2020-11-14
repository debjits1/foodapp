import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mdiStar } from '@mdi/js';
import {Icon} from '@mdi/react';
import './Recipe.css';
import { imageFallback } from '../../utility/CommonUtilities';
const Recipe = () => {
    const [count, setCount] = useState(0);
    const {state} = useLocation();
    
    return ( 
        <div className="recipe-card container" key={state.name}>
            <div className="card-image-wrap"><img onError={imageFallback} src={state.image} alt={state.name} /></div>
            <div className="card-footer">
                <div className="card-footer-left">
                    <p className="body-2">{state.name}</p>
                    <p className="body-2 bold">${state.price}</p>
                </div>
                <div className="card-footer-right">
                    <div className="button">
                        <span className="change-couter" onClick={ () => {count > 0 && setCount(count - 1)}}>-</span>
                        {count}
                        <span className="change-couter" onClick={() => {setCount(count + 1)}}>+</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card-footer">
                <div className="card-footer-left">
                    <p className="body-2 content-muted">Category: {state.category}</p>
                </div>
                <div className="card-footer-right">
                    <p className="body-2 content-muted">
                        <Icon className="element-ib" path={mdiStar} size={1} color={'yellow'}/>
                        <span className="element-ib">{state.rating} star rating ({state.reviews} reviews)</span>
                    </p>
                </div>
            </div>
            <div className="padding-default">
                <h6>DETAILS</h6>
                <p className="body-2 content-muted">{state.details}</p>
            </div>
        </div>
    );
}
 
export default Recipe;