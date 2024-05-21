import { loginStart, loginFailure, loginSucess } from "./userRedux";

import { publicRequest } from "../requestaxios";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "./registerRedux";

export const apicallLogin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("auth/login", user);
    dispatch(loginSucess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const apicallRegister = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const response = await publicRequest.post("auth/register", user);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
