<template>
    <section id="app">
        <Header/>
        <div class="content">
            <modal v-if="modal_active"/>
            <time-zone v-for="(time) in time_zones"
                       :class="[{disable:modal_active}]"
                       :key="time.id"
                       :item="time"/>
        </div>
    </section>
</template>

<script>
    import TimeZone from './components/TimeZone.vue'
    import Header from "@/components/Header"
    import Modal from "@/components/Modal"

    import {mapGetters} from "vuex"

    export default {
        name: 'App',

        components: {
            Modal,
            Header,
            TimeZone,
        },

        computed: {
            ...mapGetters([
                "modal_active",
                "time_zones",
            ]),
        },

    }
</script>

<style src="../src/css/app.css"/>


