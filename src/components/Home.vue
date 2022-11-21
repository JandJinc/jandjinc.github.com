<template>
    <iframe src="https://jonathanenjoost.github.io" style="width: 100vw; height: 92vh"></iframe>
    <h1>Dropdown Menu</h1>
    
    <div :style="{'height': '500px', 'width': '100%', 'background-color': colors[items.indexOf(selected_item)]}">
        <v-select :items="items" v-model="selected_item" variant="solo"></v-select>
        <iframe style="transform: translateX(120%) translateY(12%); top: 0;" width="560" height="315" src="https://www.youtube.com/embed/w0AOGeqOnFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><!-- <img style="text-align: left; height: 400px" :src="require('@/assets/startphotoai.jpg')">
    
    <p style="white-space: pre-line; font-size: 150%">
        {{`AI is een recente ontwikkeling op het gebied van informatica. Hoewel alle mogelijkheden nog niet ontdekt zijn, zijn er wel al veel nuttige toepassingen gevonden.
    Op deze website gaan wij u proberen uit te leggen wat AI is, wat het doet, wat de voor- en nadelen zijn en hoe het werkt.
    `}}
    </p> -->
    
    
    </template>
    
    <script>
    
    
    export default {
        name: 'HomePage',
        data(){
            return {
                selected_item: 'Dit',
                items: ['Dit', 'is', 'een', 'Dropdown', 'Menu', 'die', 'de', 'kleur', 'veranderd'],
                colors: [
                    'red',
                    'green',
                    'blue',
                    'orange',
                    'brown',
                    'pink',
                    'white',
                    'black',
                    'violet',                
                ]
            }
        }
    }
    </script>
    
    <style>
    
    </style>