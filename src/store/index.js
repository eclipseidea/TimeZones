import Vue from 'vue'
import Vuex from 'vuex'
import {created_time_zones} from './modules/created_time_zones'
import {modal_window_settings} from './modules/modal_window_settings'
import {time_zone_values} from "@/store/modules/time_zone_values";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        created_time_zones,
        modal_window_settings,
        time_zone_values
    },
})
