export const time_zone_values = {
    state() {
        return {
            time_zone_list: [
                {
                    city: "Vienna/Austria",
                    time: +2
                },

                {
                    city: "Baku/Azerbaijan",
                    time: +4
                },

                {
                    city: "Detroit/Usa",
                    time: -4
                },

                {
                    city: "Alofi/Niue",
                    time: -11
                },
            ],
        };
    },

    getters: {
        time_zone_list(state) {
            return state.time_zone_list
        },
    }
};
