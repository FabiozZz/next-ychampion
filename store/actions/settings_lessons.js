import * as lessons from "../constants/createLessonsConstants";

export const download_data = (lessonsData)=> ({type: lessons.LOAD_DATA,lessonsData})

export const remove_lesson = (lesson)=> ({type: lessons.REMOVE_DATA,lesson})
export const add_lesson = (less)=> ({type: lessons.ADD_DATA,less})

export const download_group_data = (group)=> ({type: lessons.LOAD_GROUP_LESSON,group})
export const download_couch_data = (couch)=> ({type: lessons.LOAD_COUCH_LESSON,couch})

export const search_lesson = (lesson)=> ({type: lessons.FIND_LESSON,lesson})
export const clear_filter_lesson = ()=> ({type: lessons.CLEAR_FILTER_LESSON})