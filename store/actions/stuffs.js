import * as stuffs from "../constants/stuffsConstants";

export const load_stuff = () => ({type: stuffs.LOAD_STUFF});
export const load_stuff_done = (stuffsData) => ({type: stuffs.LOAD_STUFF_SUCCESS, payload: stuffsData});
export const load_stuff_fail = (error) => ({type: stuffs.LOAD_STUFF_FAILURE, payload: error});
