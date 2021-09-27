import * as admin from "../constants/userConstants";
import Api from "../Api/Api";

// export const log_in_app = (user)=>({type:admin.LOG_IN_APP,payload:{...user}})

export const re_login = (token) => dispatch => {
    Api.reLogin(token).then(() => {
        dispatch(log_in_done());
    });
};

export const log_in = (user) => dispatch => {
    Api.login(user).then(res => {
        sessionStorage.setItem('access_token',res.data.access);
        sessionStorage.setItem('refresh_token',res.data.refresh);
        dispatch(log_in_done({}))
    }).catch(error => {
        console.log(error);
        dispatch(log_in_fail(error.response));
    });
};
export const log_in_done = (message) => ({type: admin.LOG_IN_APP_SUCCESS,payload:{...message}});
export const log_in_fail = (error) => ({type: admin.LOG_IN_APP_FAILURE,payload:error});
export const log_out = () => ({type: admin.LOG_OUT});

export const token_verify = () => dispatch => {
};
// export const token_verify = () => ({type: admin.TOKEN_VERIFY});
export const token_refresh = () => ({type: admin.TOKEN_REFRESH});