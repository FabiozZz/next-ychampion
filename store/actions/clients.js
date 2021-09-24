import * as clients from '../constants/clientsConstans';

export const load_clients_all = ()=>({type:clients.LOAD_CLIENTS_ALL})
export const load_clients_all_done = (clients)=>({type:clients.LOAD_CLIENTS_ALL_SUCCESS,payload:clients})
export const load_clients_all_fail = (error)=>({type:clients.LOAD_CLIENTS_ALL_FAILURE,payload:error})
export const load_couch_for_all = (couch)=>({type:clients.LOAD_COUCH_FOR_ALL,couch})
export const load_group_for_all = (group)=>({type:clients.LOAD_GROUP_FOR_ALL,group})
export const load_abonement_for_all = (abonement)=>({type:clients.LOAD_ABONEMENT_FOR_ALL,abonement})
export const load_filial_for_all = (filial)=>({type:clients.LOAD_FILIAL_FOR_ALL,filial})
export const load_types_list_for_all = (types)=>({type:clients.LOAD_TYPES_LIST_FOR_ALL,types})
export const load_status_list_for_all = (status)=>({type:clients.LOAD_STATUS_LIST_FOR_ALL,status})
export const load_sort_list_for_all = (sort)=>({type:clients.LOAD_SORT_FOR_ALL,sort})