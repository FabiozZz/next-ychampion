import * as general from "../constants/generalPageConstants";
import Api from "../Api/Api";

export const load_general_page_data = (dispatch) => {
    dispatch({type: general.LOAD_GENERAL_PAGE_DATA});
    let clients = Api.getAllClients();
    console.log(clients);
};

export const load_general_page_data_done = groups => ({type: general.LOAD_GENERAL_PAGE_DATA_SUCCESS,payload:groups});
export const load_general_page_data_fail = errors => ({type: general.LOAD_GENERAL_PAGE_DATA_FAILURE,payload:errors});

// export const change_couch_for_course = errors => ({type: LOAD_GENERAL_PAGE_DATA_FAILURE,payload:errors});

export const search_clients = name => ({type: general.SEARCH_CLIENTS, payload: name});

export const createTrainForCourse = data => ({type: general.ADD_CLIENT_IN_TRAIN, payload: data});

export const change_couch = data => ({type: general.CHANGE_TRAINER_FOR_GROUP, payload: data});

export const remove_client_from_group = train_id => ({type: general.REMOVE_CLIENT_FROM_TRAIN, payload: train_id});