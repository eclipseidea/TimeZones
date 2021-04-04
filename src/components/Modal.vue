<template>
    <section>
        <div class="crt-win-mod" v-if="modal_window_action_create">
            <div class="crt-win">
            <span class="close"
                  @click="closeModalWindow">
            </span>
                <h1>Create time zone</h1>
            </div>
            <div class="text">select city*</div>
            <label class="ddm-c">
                <select v-model="model_create.time_zone"
                        :class="['ddm',{'error':error.dd_err}]">
                    <option v-for="option in time_zone_list"
                            :key="option.city">
                        {{ option.city }}
                    </option>
                </select>
            </label>
            <h6 class="reg" v-show="error.dd_err">*This field is required</h6>
            <label>
                <span class="text">insert description*</span>
                <textarea v-model="model_create.description"
                       placeholder="description"
                       :class="['inp',{'error':error.inp_err}]"/>
            </label>
            <h6 class="reg" v-show="error.inp_err">
                *This field must not contain more than 120 characters ,can not be empty,
                also must contain only letters numbers spaces and line breaks
            </h6>
            <button @click="createTimeZone"
                    class="crt-b">
                create
            </button>
        </div>


        <div class="crt-win-mod" v-if="modal_window_action_update">
            <div class="crt-win">
            <span class="close"
                  @click="closeModalWindow">
            </span>
                <h1>Update time zone</h1>
            </div>
            <div class="text">update city</div>
            <label class="ddm-c">
                <select v-model="model_update.time_zone" class="ddm">
                    <option v-for="option in time_zone_list" :key="option.city">
                        {{ option.city }}
                    </option>
                </select>
            </label>
            <span class="text">update description</span>
            <label>
                <textarea v-model="model_update.description"
                       placeholder="description"
                       :class="['inp',{'error':error.inp_err}]"/>
            </label>
            <h6 class="reg" v-show="error.inp_err">
                *This field must not contain more than 120 characters ,can not be empty,
                also must contain only letters numbers spaces and line breaks
            </h6>
            <div class="butt-cont">
                <button @click="updateTimeZone" class="crt-bu">update</button>
                <button @click="deleteTimeZone" class="crt-bd">delete</button>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "modal",

        data() {
            return {
                model_create: {
                    id: null,
                    time_zone: null,
                    description: '',
                    time_marker: null
                },

                model_update: {
                    id: null,
                    time_zone: null,
                    description: '',
                    time_marker: null
                },

                error: {
                    dd_err: false,
                    inp_err: false,
                },
            }
        },

        computed: {

            ...mapGetters([
                "modal_window_value",
                "active_model",
                "time_zone_list",
            ]),

            modal_window_action_create() {
                return (this.modal_window_value === "create")
            },

            modal_window_action_update() {
                return (this.modal_window_value === "update")
            },
        },

        methods: {
            closeModalWindow() {
                this.$store.dispatch('update_active_model_null')
                this.$store.dispatch('update_active_modal_window', [false, null])
            },

            createTimeZone() {
                let arr = this.time_zone_list
                let time_value = 0;
                let time_zone = this.model_create.time_zone
                let input = this.model_create.description
                this.inputValidate(input)
                this.timeZoneValidate(time_zone)
                if (!this.error.inp_err && !this.error.dd_err) {
                    Object.keys(arr).forEach(function (key) {
                        if (arr[key].city === time_zone)
                            time_value = arr[key].time
                    });
                    this.model_create.time_marker = time_value
                    this.$store.dispatch('update_list', this.model_create)
                    this.closeModalWindow()
                }
            },

            updateTimeZone() {
                let arr = this.time_zone_list
                let time_value = 0;
                let time_zone = this.model_update.time_zone
                let input = this.model_update.description
                this.inputValidate(input)
                if (!this.error.inp_err) {
                    Object.keys(arr).forEach(function (key) {
                        if (arr[key].city === time_zone)
                            time_value = arr[key].time
                    });
                    this.model_update.time_marker = time_value
                    this.$store.dispatch('update_element_by_id', this.model_update)
                    this.closeModalWindow()
                }
            },

            inputValidate(value) {
                let regExp = /^[A-z 0-9/n)]+$/i
                let length = value.length
                return length <= 120 && length > 0 && regExp.test(value) ? this.error.inp_err = false : this.error.inp_err = true
            },

            timeZoneValidate(value) {
                return value === null ? this.error.dd_err = true : this.error.dd_err = false
            },

            deleteTimeZone() {
                this.$store.dispatch('delete_element_by_id', this.model_update.id)
                this.closeModalWindow()
            }

        },

        created() {
            this.model_update = this.active_model
        }
    }
</script>

<style scoped src="../css/modal.css"/>




