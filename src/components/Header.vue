<template>
    <section class="hdr">
        <button :class="['crt',{disable:modal_active}]"
                @click="createTimeZone">
            create
        </button>
        <h4 class="txt">Sort By:</h4>
        <label>
            <select :class="['sel',{disable:modal_active}]"
                    v-model="selected"
                    @change="sortTimeZones">
                <option >Time Zone</option>
                <option >Description</option>
            </select>
        </label>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Header",
        data() {
            return {
                selected: null
            }
        },

        methods: {
            sortTimeZones() {
                let options = this.selected
                if(options!==''){
                    if(options==='Time Zone') {
                        this.$store.dispatch('sort_time_zones_by_time_marker')
                    } else if (options==='Description') {
                        this.$store.dispatch('sort_time_zones_by_description')
                    }
                }
            },

            createTimeZone() {
                this.$store.dispatch('update_active_modal_window', [true, 'create'])
            },
        },

        computed: {
            ...mapGetters([
                "modal_active"
            ]),
        },
    }

</script>

<style scoped src="../css/header.css"/>
