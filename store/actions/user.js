import * as admin from "../constants/userConstants";

export const log_in = (user)=>({type:admin.LOG_IN_APP,payload:{...user}})
export const log_in_done = (message) => ({type: admin.LOG_IN_APP_SUCCESS,payload:{...message}});
export const log_in_fail = (error) => ({type: admin.LOG_IN_APP_FAILURE,payload:error});
export const log_out = () => ({type: admin.LOG_OUT});

export const token_verify = () => ({type: admin.TOKEN_VERIFY});
export const token_refresh = () => ({type: admin.TOKEN_REFRESH});