<template>
    <section class="tz" @click="updateTimeZone(item)">
        <div class="rw">
            <div class="time">{{timestamp }}</div>
            <div class="zone">{{item.time_zone}}</div>
        </div>
        <h5 class="desc">{{item.description}}</h5>
    </section>
</template>

<script>
    export default {
        name: 'time-zone',
        props: [
            'item',
        ],

        data() {
            return {
                timestamp: "",
            }
        },

        created() {
            this.interval = setInterval(this.getNow, 10)
        },

        beforeDestroy() {
            clearInterval(this.interval)
        },

        methods: {
            updateTimeZone(item) {
                this.$store.dispatch('update_active_model', item)
                this.$store.dispatch('update_active_modal_window', [true, 'update'])
            },

            getNow() {
                let hours
                let minutes
                let seconds

                const time = new Date()

                time.setHours(time.getUTCHours()+ this.item.time_marker)

                if (time.getHours() >= 0 && time.getHours() <= 9) {
                    hours = '0' + time.getHours()
                } else {
                    hours = time.getHours()
                }

                if (time.getMinutes() >= 0 && time.getMinutes() <= 9) {
                    minutes = '0' + time.getMinutes()
                } else {
                    minutes = time.getMinutes()
                }

                if (time.getSeconds() >= 0 && time.getSeconds() <= 9) {
                    seconds = "0" + time.getSeconds()
                } else {
                    seconds = time.getSeconds()
                }

                this.timestamp = hours + ":" + minutes + ":" + seconds;
            },

        },

    }
</script>

<style scoped src="../css/time_zone.css"/>




