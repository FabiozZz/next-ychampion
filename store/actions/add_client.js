import * as add from "../constants/addClientConstants";

export const load_data_for_add_page = () => ({type: add.LOAD_DATA_FOR_ADD_CLIENT_PAGE});
export const load_data_for_add_page_done = groups => ({type: add.LOAD_DATA_FOR_ADD_CLIENT_PAGE_SUCCESS, payload: groups});

export const add_client_on_CRM_error = error => ({type: add.ADD_CLIENT_ON_CRM_FAILURE, payload: error});
export const add_client_on_CRM = client => ({type:add.ADD_CLIENT_ON_CRM,payload:client});