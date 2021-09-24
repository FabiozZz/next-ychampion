import * as set_edit_group from "../constants/groupPageConstants";

export const load_data_for_edit_group_page = ()=>({type:set_edit_group.LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE})
export const load_data_for_edit_group_page_done = data => ({
    type: set_edit_group.LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_SUCCESS,
    payload: data
});
export const load_data_for_edit_group_page_fail = error => ({
    type: set_edit_group.LOAD_DATA_FOR_CREATE_AND_EDIT_PAGE_FAILURE,
    payload: error
});
export const load_data_one_group = id => ({
    type: set_edit_group.LOAD_GROUP_FOR_EDIT,
    payload: id
});