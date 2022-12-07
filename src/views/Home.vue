<template>
<!-- <v-row>
    <v-col cols="12" md="2" sm="0" v-if="$vuetify.display.mdAndUp"></v-col>
    <v-col cols="12" md="8" sm="12"> -->
<div style="overflow-y: hidden">
    <v-window 
        v-model="selected_page" 
        @mouseover="editMenuOn(false)"
        :style="{
            'border': 'solid',
            'background-color': 'rgba(204, 204, 204, 0.6)',
            'height': '100vh',  //nav_hover ? '50vh' : '90vh'
            'transition': 'all 0.2s',
            'transform': calcOffset(menu_on),
            'overflow-y': 'hidden',
            'position': 'relative'
        }" 
        >
        <v-window-item
            v-for="(page, index) in pages"
            :key="index"    
            :value="page.name"
            style="overflow-y: scroll;"
            >
            <div class="d-flex justify-end flex-column" style="margin-top: 10vh; min-height: 90vh;">
                <component :is="page.component" class="mb-auto"></component>
                <p class="mt-auto" style="font-weight: bold; font-size: 2em; font-family: 'EB Garamond', serif; letter-spacing: .1em;">&copy;{{ new Date().getFullYear() }} Jonathan       Joost</p>
            </div>
            <div class="d-flex" :style="{'position': 'fixed','background-color': page.color, 'width': '100%', 'top': '0', 'justify-content': 'space-between', 'min-height': '8vh', 'z-index': '1000'} ">
                <img class="float-left mt-2 ml-4" @click="clickPage('home')" :src="require('@/assets/big_site_logo.png')" style="max-height: 9vh;">
                <p class="d-flex justify-center align-center" style="font-size: 250%; margin-left: auto; font-weight: bold;">{{page.text}}</p>
                <!-- <div style="margin-left: auto;"></div> -->
                <div 
                    height="8vh" 
                    class="justify-end align-center d-flex"
                    style="margin-left: auto; padding: 0; font-size: 3em;"
                    @click="clickPage(pages[selectedPageIndex === 0 ?selectedPageIndex : selectedPageIndex - 1 ].name)"
                    ><v-icon 
                        class="menu-arrow" 
                        icon="mdi-arrow-left"
                        ></v-icon>
                </div>
                <div 
                    height="8vh" 
                    class="justify-end align-center d-flex"
                    style="margin: 0; padding: 0;  font-size: 3em;"
                    @click="clickPage(pages[selectedPageIndex === pages.length - 1 ? selectedPageIndex : selectedPageIndex + 1].name)"
                    ><v-icon 
                        class="menu-arrow" 
                        icon="mdi-arrow-right"
                        ></v-icon>
                </div>
            

            </div>


        </v-window-item>
    </v-window>
    <div 
        :style="{'width': '100%', 'transform': calcOffset(menu_on), 'transition': 'all 0.4s'}" 
        class="d-flex justify-center align-start" 
        
 
        >
        <div style="transform: translateY(-85px)">
            <v-icon 
            icon="mdi-home" 
            class="menu-button" 
            size="xxx-large"
            @mouseover="editMenuOn(true)"
            @mouseleave="editMenuOn(false)"      
            @click="menu_on = !menu_on" 
            :style="{
                'border-radius': '100%',
                'border-width': '2px',
                'border': 'solid',
                'background': 'black', 
                'font-size': '500%' 
            }" 
            :color="menu_on ? 'green' : 'white'"></v-icon>
        </div>
        
    </div>
    <div
        width="100%"
        class="nav-window d-flex justify-center align-center"
        @mouseover="menu_on = true"
        :style="{'transform': calcOffset(menu_on), 'transition': menu_on ? 'all 0.4s cubic-bezier(1,1,.62,1.33)' : 'all 0.2s'}"
        
        >

        <div style="transform: translateY(-85px); width: 100%; height: 100%; overflow-y: hidden;" class="px-4" >
            <div id="navlinks">
                <div style="overflow-y: scroll; min-height: fit-content" :class="{'d-flex': true, 'justify-center': true}">
                    <div 
                        v-for="(page, index) in pages"
                        :key="index"
                        @click="clickPage(page.name)"
                        :id="'nav-link' + (index + 1)"
                        >
                        <h2 class="nav-link-title">{{page.name}}</h2>
                        <img :src="require('@/assets/' + page.photo)" alt="" class="nav-link-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import { defineComponent } from 'vue';

import HomePage from '@/components/Home'
import WatAIPage from '@/components/WatAIPage'
import GevaarAIPage from '@/components/GevaarAIPage'
import WanneerAIPage from '@/components/WanneerAIPage'
import HoeAIPage from '@/components/HoeAIPage'
import VoorbeeldenPage from '@/components/VoorbeeldenPage'
import GeschiedenisAIPage from '@/components/GeschiedenisAIPage'
import ContactPage from '@/components/ContactPage'

export default defineComponent({
    name: 'Home',
    components: {
        HomePage,
        WatAIPage,
        GevaarAIPage,
        HoeAIPage,
        VoorbeeldenPage,
        WanneerAIPage,
        GeschiedenisAIPage,
        ContactPage
    },
    data(){
        return {
            nav_hover: false,
            is_animating: false,
            menu_on: false,
            pages: [
                {
                    name: 'home',
                    component: 'HomePage',
                    photo: 'startphotoai.jpg',
                    color: '#264653',
                    text: 'Home'
                },
                {
                    name: 'wat',
                    component: 'WatAIPage',
                    photo: 'questionmark.jpg',
                    color: '#2a9d8f',
                    text: 'Wat is AI?'
                },
                {
                    name: 'gevaar',
                    component: 'GevaarAIPage',
                    photo: 'waaromai.jpg',
                    color: '#e9c46a',
                    text: 'Is AI gevaar?'
                },
                {
                    name: 'wanneer',
                    component: 'WanneerAIPage',
                    photo: 'wanneerai.jpg',
                    color: '#e9c46a',
                    text: 'Wanneer wordt AI gebruikt?'
                },
                {
                    name: 'geschiedenis',
                    component: 'GeschiedenisAIPage',
                    photo: 'geschiedenis.jpg',
                    color: '#1aba92',
                    text: 'Geschiedenis van AI?'
                },
                {
                    name: 'hoe',
                    component: 'HoeAIPage',
                    photo: 'boxcat.jpg',
                    color: '#f4a261',
                    text: 'Hoe werkt AI?'
                },
                {
                    name: 'voorbeelden',
                    component: 'VoorbeeldenPage',
                    photo: 'aivoorbeelden.jpg',
                    color: '#e76f51',
                    text: 'Voorbeelden van AI'
                },
                {
                    name: 'contact',
                    component: 'ContactPage',
                    photo: 'telefoontje.jpg',
                    color: 'purple',
                    text: 'Contact'
                },

            ],
            selected_page: ''
        }
    },
    computed: {
        pageName(){
            return this.$route.params.page_name
        },
        selectedPageIndex(){
            return this.pages.findIndex(e => e.name === this.selected_page)
        }
    },
    methods: {
        checkUrl(){
            if (!this.pages.map(e => e.name).includes(this.pageName)){
                console.log('wrong page', this.pages.map(e => e.name), this.pageName)
                this.$router.push('/')
            } else {
                this.selected_page = this.pageName
            }
        },
        clickPage(page_name){
            console.log(page_name)
            this.$router.push(page_name)
            this.selected_page = page_name
        },
        showNav(){
            document.body.dataset.navactive = document.body.dataset.navactive === "true" ? "false" : "true";
        },
        calcOffset(menu_on){
            return menu_on ? 'translateY(-150px)' : 'translateY(0%)'
        },
        editMenuOn(input){
            if (this.is_animating != true) {
                this.menu_on = input
                this.is_animating = true
                setTimeout(() => {
                    this.is_animating = false
                }, 200)
            } else {
                this.is_animating = false

            }
        }
    },
    created() {
        this.checkUrl()
    },
    watch: {
        pageName(){
            this.checkUrl()
        },
        menu_on (){
            document.body.dataset.navactive = this.menu_on
            
        }
    }
});
</script>

<style scoped>
x
.menu-arrow {
    transition: font-size 0.1s ease;
    font-size: 1em
}
.menu-arrow:hover {
    transition: font-size 0.1s ease;
    font-size: 2em
}
.menu-button{
    transition: all 0.2s ease;
}
.menu-button:hover{
    transform: rotate(180deg)
}

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
@import "./styles.css"
</style>