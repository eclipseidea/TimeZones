export const created_time_zones = {
    state() {
        return {
            list: [],

            active_model: {
                id: null,
                time_marker: null,
                time_zone: null,
                description: null,
            }
        };
    },

    actions: {
        update_list({commit}, obj) {
            commit('set_obj', obj)
        },

        update_active_model({commit}, obj) {
            commit('set_active_model', obj)
        },

        update_active_model_null({commit}) {
            commit('set_active_model_null')
        },

        update_element_by_id({commit}, obj) {
            commit('set_element_by_id', obj)
        },

        delete_element_by_id({commit}, id) {
            commit('delete_element_by_id', id)
        },

        sort_time_zones_by_time_marker({commit}) {
            commit('set_sort_time_zones_by_time_marker')
        },

        sort_time_zones_by_description({commit}) {
            commit('set_sort_time_zones_by_description')
        },
    },

    mutations: {
        set_obj(state, obj) {
            if (state.list.length === 0) {
                obj.id = state.list.length + 1
            } else {
                let max = 0;
                state.list.map(function (item) {
                    if (item.id > max) {
                        max = item.id
                        obj.id = max + 1
                    }
                });
            }
            state.list.push(obj)
        },

        set_active_model(state, obj) {
            state.active_model = {
                id: obj.id,
                time_marker: obj.time_marker,
                time_zone: obj.time_zone,
                description: obj.description,
            }
        },

        set_active_model_null(state, val) {
            state.active_model = val
        },

        set_element_by_id(state, obj) {
            let index = state.list.findIndex((el) => el.id === obj.id)
            state.list[index] = obj
        },

        delete_element_by_id(state, id) {
            let index = state.list.findIndex((el) => el.id === id)
            state.list.splice(index, 1)
        },

        set_sort_time_zones_by_time_marker(state) {
            state.list.sort((a, b) => a.time_marker - b.time_marker)
        },

        set_sort_time_zones_by_description(state) {
             state.list.sort((a, b) => a.description.localeCompare(b.description))
        }

    },

    getters: {
        time_zones(state) {
            return state.list
        },

        active_model(state) {
            return state.active_model
        }

    }
};
