import * as set_group from "../constants/settingsGroupConstants";

export const start_load_data_set_group = () => ({type: set_group.LOAD_DATA_SETTINGS_GROUP});

export const start_load_data_set_group_done = data => ({type: set_group.LOAD_DATA_SETTINGS_GROUP_SUCCESS, payload: data});
export const start_load_data_set_group_fail = error => ({type: set_group.LOAD_DATA_SETTINGS_GROUP_FAILURE,payload:error});

export const fetch_new_age_group = label => ({type: set_group.FETCH_NEW_AGE_GROUP,payload:label});
export const fetch_group = group => ({type: set_group.FETCH_GROUP,payload:group});
