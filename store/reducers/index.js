import {add_client} from "./add_client";
import {clients} from "./clients";
import {general_page} from "./general_page";
import {profile} from "./profile";
import {settings_abonement} from "./settings_abonement";
import {settings_edit_group} from "./settings_edit_group";
import {settings_group} from "./settings_group";
import {settings_lessons} from "./settings_lessons";
import {stuffs} from "./stuffs";
import {user} from "./user";
import {combineReducers} from "redux";

const reducers = {
  add_client,
  clients,
  general_page,
  profile,
  settings_abonement,
  settings_edit_group,
  settings_group,
  settings_lessons,
  stuffs,
  user
}

export default combineReducers(reducers)
