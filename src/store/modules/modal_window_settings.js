export const modal_window_settings = {
    state() {
        return {
            show_modal_window:false,
            modal_window_value: null,
        }
    },

    actions: {
       update_active_modal_window({ commit }, [value, val]) {
           commit('set_active_modal_window', value)
           commit('set_modal_window_value',val)
       },
    },

    mutations: {
        set_active_modal_window(state, value) {
            state.show_modal_window = value
        },

        set_modal_window_value(state, val) {
            state.modal_window_value = val
        },
    },

    getters: {
        modal_active(state) {
           return state.show_modal_window
        },

        modal_window_value(state){
           return state.modal_window_value
        },
    }
};
