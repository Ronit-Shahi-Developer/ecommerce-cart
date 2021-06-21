// make http request to backend

import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';


export const addToCart = (id,qty) => async (dispatch) => {
    const { data } = await axios.get('/api/product/${id}'); /// making request to server

    dispatch({  //this comes from data base
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name:data.name,
            imageUrl:data.imageurl,
            price: data.price,
            countInStock: data.countInStock,
            qty

        }


    })

// localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));

};


export const REMOVE_FROM_CART = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload:id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
