import { loginStart, loginFailure, loginSucess } from "./userRedux";

import { publicRequest, userRequest } from "../requests";
import {
  deleteProductFail,
  deleteProductStart,
  deleteProductSucess,
  getProductFail,
  getProductStart,
  getProductSucess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";

export const apicallLogin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("auth/login", user);
    dispatch(loginSucess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get("/products");
    dispatch(getProductSucess(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(getProductFail());
  }
};

export const DeleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const response = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSucess(id));
    console.log(response.data);
  } catch (error) {
    dispatch(deleteProductFail());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
