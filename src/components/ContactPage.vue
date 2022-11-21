<template>
<v-overlay 
    persistent 
    class="d-flex align-center justify-center flex-row" v-model="show_overlay">
        <v-carousel v-model="selected_index" style="min-width: 600px;background-color: rgba(0, 0, 0, 0)"  :show-arrows="false" hide-delimiter-background>
            <v-carousel-item :value="index" class="d-flex align-center justify-center" v-for="(text, index) in ('Geef nooit zomaar je gegevens op het internet :) want we hebben nu al jouw ip ' + JSON.stringify(ip).toString()).split(' ')" :key="index">
                <p color="red" style="font-size: 10em">{{text}}</p>
            </v-carousel-item>
        </v-carousel>
        <div class="d-flex justify-center align-center" @click="selected_index == 16 ? selected_index = 0 : selected_index += 1" style="width: 300px; height: 200px; font-size: 10em; background-color: rgba(0,0,0,0.4);">
            =>
        </div>
        <div v-if="selected_index == 16" class="d-flex justify-center align-center" @click="show_overlay = false" style="width: 300px; height: 200px; color: red; font-size: 10em; background-color: rgba(0,0,0,0.4);">
            x
        </div>
</v-overlay>
<div v-if="!show_overlay" style="font-size: 15em">
    Je weet ons te vinden voor extra contact ;)
    <iframe width="560" height="315" src="https://www.youtube.com/embed/a3Z7zEc7AXQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</template>
 
<script>
import axios from 'axios'

export default {
 name: 'ContactPage',
 components: {
 
 },
 props: {
 
 },
 emits: [],
 setup() {
 
 },
 data(){
    return {
        ip: '',
        show_overlay: false,
        selected_index: 0
    }
 },
 computed: {
 
 },
 methods: {

    async getIp(){
        axios.get('https://api.ipify.org?format=json')
            .then(x => x.data)
            .then(({ ip }) => {
                this.ip = ip
            });
    }
 },
 watch: {
 
 },
//  created() {
//  },
 async mounted() {
    await this.getIp()

    this.show_overlay = true
 },
 
 
}
</script>
 
<style scoped>
 
</style>
>
