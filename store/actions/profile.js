import * as profile from "../constants/profileConstant";

export const load_profile_user = (id) => ({type: profile.LOAD_PROFILE_USER, payload: id});
export const load_profile_user_done = (client) => ({type: profile.LOAD_PROFILE_USER_SUCCESS, payload: client});
export const load_profile_user_fail = (error) => ({type: profile.LOAD_PROFILE_USER_FAILURE, payload: error});

export const open_edit_page = id => ({type: profile.OPEN_EDIT_PAGE, payload: id});
export const edit_profile = (data) => ({type: profile.EDIT_PROFILE, payload: data});
export const edit_profile_done = client => ({type: profile.EDIT_PROFILE_SUCCESS, payload: client});
export const edit_profile_fail = error => ({type: profile.EDIT_PROFILE_FAILURE, payload: error});

export const edit_profile_parents = (data) => ({type: profile.EDIT_PROFILE_PARENTS, payload: data});
export const create_profile_parents = (data) => ({type: profile.CREATE_PROFILE_PARENTS, payload: data});
export const remove_profile_parents = (data) => ({type: profile.REMOVE_PROFILE_PARENTS, payload: data});

export const buy_abonement = data => ({type: profile.BUY_ABONEMENT, payload: data});
export const buy_abonement_done = client => ({type: profile.BUY_ABONEMENT_SUCCESS, payload: client});

export const load_profile_aboniment = (aboniment) => ({type: profile.LOAD_PROFILE_TYPE_ABONIMENT, aboniment});
export const load_profile_status = (status) => ({type: profile.LOAD_PROFILE_STATUS, status});
export const load_profile_group = (group) => ({type: profile.LOAD_PROFILE_GROUP, group});
export const load_profile_couch = (couch) => ({type: profile.LOAD_PROFILE_COUCH, couch});
export const load_profile_filial = (filial) => ({type: profile.LOAD_PROFILE_FILIAL, filial});
export const clear_profile = () => ({type: profile.CLEAR_PROFILE});
export const change_data_profile = (user) => ({type: profile.CHANGE_PROFILE,user});
export const upload_profile_club_card = (club_card) => ({type: profile.UPDATE_PROFILE_CLUB_CARD,club_card});