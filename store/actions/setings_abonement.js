import * as set_ab from "../constants/settingsAbonementConstants";

export const start_load_data_settings_abonement = () => ({type: set_ab.START_LOAD_DATA_SETTINGS_ABONEMENT});
export const start_load_data_settings_abonement_done = data => ({type: set_ab.START_LOAD_DATA_SETTINGS_ABONEMENT_SUCCESS,payload:data});
export const start_load_data_settings_abonement_fail = error => ({type: set_ab.START_LOAD_DATA_SETTINGS_ABONEMENT_FAILURE,payload:error});

export const start_load_data_abonement = (id) => ({type: set_ab.START_LOAD_DATA_ABONEMENT, payload: id});
export const start_load_data_abonement_done = abonement => ({type: set_ab.START_LOAD_DATA_ABONEMENT_SUCCESS,payload:abonement});
export const start_load_data_abonement_fail = error => ({type: set_ab.START_LOAD_DATA_ABONEMENT_FAILURE,payload:error});

export const upload_abonement_data = data => ({type: set_ab.UPLOAD_DATA_SETTINGS_ABONEMENT, payload: data});

export const clear_current_abonement = () => ({type: set_ab.CLEAR_CURRENT_ABONEMENT});

export const remove_item_abonement = id => ({type: set_ab.REMOVE_ABONEMENT, payload: id});
