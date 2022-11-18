<template>
<v-carousel
    hide-delimiter-background
    :show-arrows="true"
    delimiter-icon="mdi-square"
    v-model="selected_slide"
    height="79vh"
    >
    <v-carousel-item
        value="FaceApp"
        >
        <p style="height: 10%;  background: white; font-size: 300%; border: solid">FaceApp</p>
        <v-row style="height: 15%;margin-top: 0%; margin-left: 0%;background: white; width: 100%; border: solid">
            <v-col>
                <p style=" background: white; font-size: 130%">Android: </p>
                <a href="https://play.google.com/store/apps/details?id=io.faceapp&gl=NL" target="_blank">FaceApp Android Download</a>
            </v-col>
            <v-col>
                <p style=" background: white; font-size: 130%">Android: </p>
                <a href="https://apps.apple.com/nl/app/faceapp-d%C3%A9-gezichtseditor/id1180884341" target="_blank">FaceApp IOS Download</a>  
            </v-col>
        </v-row>

        <iframe src="https://www.faceapp.com/" style="width: 100%; height: 79%; border: solid"></iframe>


    </v-carousel-item>
    <v-carousel-item
        value="Nvidia Canvas"
        >
        <p style="height: 10%;  background: white; font-size: 300%; border: solid">Nvidia Canvas</p>
        <a href="https://www.nvidia.com/en-us/studio/canvas/" style="font-size: 500%"  target="_blank">
            <v-img :src="require('@/assets/nvidia_logo.png')" height="400px"></v-img>
        </a>"
    </v-carousel-item>
    <v-carousel-item
        value="TikTok"
        >
        <p style="height: 10%;  background: white; font-size: 300%; border: solid">TikTok Algoritme</p>

        <a href="https://www.tiktok.com/" style="font-size: 500%" target="_blank">
            <v-img :src="require('@/assets/tiktok_logo.png')" height="400px"></v-img>

        </a>
    </v-carousel-item>
    <v-carousel-item
        value="Google Photos"
        >
        <p style="height: 10%;  background: white; font-size: 300%; border: solid">Google Photos</p>
        <a href="https://photos.google.com/search/cat" style="font-size: 500%" target="_blank">
            <v-img :src="require('@/assets/google_photos.png')" height="400px"></v-img>
        </a>
    </v-carousel-item>
    
    <v-carousel-item
        value="tensorflow"
        >
        <p style="height: 10%; background: white; font-size: 400%">Tensorflow Neural network visualizer</p>
        <iframe 
            src="https://playground.tensorflow.org"
            style="width: 100%; height: 90%"
            ></iframe>

    </v-carousel-item>
</v-carousel>






<!-- <v-row>
    <v-col>
        <v-img src="@/assets/aivoorbeelden.jpg"></v-img>
    </v-col>
    <v-col>
        Voorbbeelden
    </v-col>
</v-row> -->

</template>

<script >

export default {
    name: 'VoorbeeldenPage',
    data(){
        return {
            selected_slide: 'green',

        }
    },
    computed: {
        selectedSlideIndex(){
            
            return this.slides.findIndex(e => e == this.selected_slide)
        }
    }
}
</script>
<style>

</style>