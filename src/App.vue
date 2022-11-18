<template>

<div style="overflow-y: hidden; height: 100vh;">
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div>
            <v-app style="background-color: #202124; overflow-y: hidden;">
                    <v-main style="margin: 0px;">
                        <router-view></router-view>
                    </v-main>
            </v-app>
        </div>
</div>


</template>

<script>

export default {
  name: 'App',

  data: () => ({

  }),
}
</script>


<style>
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000c47;
    overflow: hidden;
}

.background span {
    width: 27vmin;
    height: 27vmin;
    border-radius: 27vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 46;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #837aff;
    top: 6%;
    left: 76%;
    animation-duration: 43s;
    animation-delay: -5s;
    transform-origin: 1vw 3vh;
    box-shadow: -54vmin 0 7.536499113685019vmin currentColor;
}
.background span:nth-child(1) {
    color: #0055ff;
    top: 1%;
    left: 86%;
    animation-duration: 7s;
    animation-delay: -30s;
    transform-origin: -6vw 6vh;
    box-shadow: 54vmin 0 7.057016933592432vmin currentColor;
}
.background span:nth-child(2) {
    color: #837aff;
    top: 9%;
    left: 20%;
    animation-duration: 17s;
    animation-delay: -38s;
    transform-origin: 11vw 20vh;
    box-shadow: 54vmin 0 7.7148141451140235vmin currentColor;
}
.background span:nth-child(3) {
    color: #837aff;
    top: 71%;
    left: 73%;
    animation-duration: 11s;
    animation-delay: -8s;
    transform-origin: -16vw -23vh;
    box-shadow: -54vmin 0 7.156371863878921vmin currentColor;
}
.background span:nth-child(4) {
    color: #0055ff;
    top: 79%;
    left: 93%;
    animation-duration: 13s;
    animation-delay: -27s;
    transform-origin: 2vw -5vh;
    box-shadow: -54vmin 0 7.1811135463151965vmin currentColor;
}
.background span:nth-child(5) {
    color: #0055ff;
    top: 7%;
    left: 41%;
    animation-duration: 26s;
    animation-delay: -32s;
    transform-origin: -9vw -19vh;
    box-shadow: -54vmin 0 6.983656738702592vmin currentColor;
}
.background span:nth-child(6) {
    color: #0055ff;
    top: 20%;
    left: 30%;
    animation-duration: 15s;
    animation-delay: -28s;
    transform-origin: -2vw -18vh;
    box-shadow: -54vmin 0 7.15174413298886vmin currentColor;
}
.background span:nth-child(7) {
    color: #040024;
    top: 18%;
    left: 87%;
    animation-duration: 32s;
    animation-delay: -3s;
    transform-origin: -7vw -16vh;
    box-shadow: -54vmin 0 7.046995428043372vmin currentColor;
}
.background span:nth-child(8) {
    color: #837aff;
    top: 1%;
    left: 12%;
    animation-duration: 25s;
    animation-delay: -11s;
    transform-origin: -24vw -13vh;
    box-shadow: -54vmin 0 7.710614657121965vmin currentColor;
}
.background span:nth-child(9) {
    color: #040024;
    top: 63%;
    left: 6%;
    animation-duration: 11s;
    animation-delay: -14s;
    transform-origin: 17vw -5vh;
    box-shadow: -54vmin 0 7.293770816499056vmin currentColor;
}
.background span:nth-child(10) {
    color: #0055ff;
    top: 81%;
    left: 14%;
    animation-duration: 23s;
    animation-delay: -10s;
    transform-origin: 24vw 9vh;
    box-shadow: -54vmin 0 7.661362613269879vmin currentColor;
}
.background span:nth-child(11) {
    color: #0055ff;
    top: 72%;
    left: 2%;
    animation-duration: 7s;
    animation-delay: -1s;
    transform-origin: -3vw 12vh;
    box-shadow: 54vmin 0 6.972795239926024vmin currentColor;
}
.background span:nth-child(12) {
    color: #837aff;
    top: 94%;
    left: 14%;
    animation-duration: 12s;
    animation-delay: -27s;
    transform-origin: -3vw 8vh;
    box-shadow: 54vmin 0 7.454369709765482vmin currentColor;
}
.background span:nth-child(13) {
    color: #040024;
    top: 78%;
    left: 76%;
    animation-duration: 21s;
    animation-delay: -17s;
    transform-origin: 17vw 24vh;
    box-shadow: 54vmin 0 6.756391069341035vmin currentColor;
}
.background span:nth-child(14) {
    color: #040024;
    top: 62%;
    left: 83%;
    animation-duration: 38s;
    animation-delay: -14s;
    transform-origin: -24vw -23vh;
    box-shadow: -54vmin 0 7.543456054291138vmin currentColor;
}
.background span:nth-child(15) {
    color: #0055ff;
    top: 13%;
    left: 43%;
    animation-duration: 9s;
    animation-delay: -29s;
    transform-origin: 18vw -23vh;
    box-shadow: 54vmin 0 7.15679260407758vmin currentColor;
}
.background span:nth-child(16) {
    color: #837aff;
    top: 50%;
    left: 31%;
    animation-duration: 45s;
    animation-delay: -37s;
    transform-origin: -21vw -5vh;
    box-shadow: -54vmin 0 6.944924745403732vmin currentColor;
}
.background span:nth-child(17) {
    color: #0055ff;
    top: 8%;
    left: 98%;
    animation-duration: 44s;
    animation-delay: -38s;
    transform-origin: 19vw 4vh;
    box-shadow: 54vmin 0 7.636501869414637vmin currentColor;
}
.background span:nth-child(18) {
    color: #040024;
    top: 33%;
    left: 7%;
    animation-duration: 34s;
    animation-delay: -32s;
    transform-origin: 6vw -2vh;
    box-shadow: 54vmin 0 6.887950752812069vmin currentColor;
}
.background span:nth-child(19) {
    color: #837aff;
    top: 26%;
    left: 100%;
    animation-duration: 23s;
    animation-delay: -15s;
    transform-origin: 23vw -11vh;
    box-shadow: -54vmin 0 7.428902279891339vmin currentColor;
}
.background span:nth-child(20) {
    color: #0055ff;
    top: 69%;
    left: 44%;
    animation-duration: 31s;
    animation-delay: -8s;
    transform-origin: 6vw -4vh;
    box-shadow: -54vmin 0 6.932007534913652vmin currentColor;
}
.background span:nth-child(21) {
    color: #040024;
    top: 1%;
    left: 65%;
    animation-duration: 30s;
    animation-delay: -10s;
    transform-origin: 3vw -14vh;
    box-shadow: -54vmin 0 6.812558850905295vmin currentColor;
}
.background span:nth-child(22) {
    color: #837aff;
    top: 52%;
    left: 1%;
    animation-duration: 41s;
    animation-delay: -35s;
    transform-origin: -12vw 20vh;
    box-shadow: 54vmin 0 7.585537965115382vmin currentColor;
}
.background span:nth-child(23) {
    color: #040024;
    top: 5%;
    left: 98%;
    animation-duration: 27s;
    animation-delay: -4s;
    transform-origin: 3vw -23vh;
    box-shadow: 54vmin 0 7.488037136990433vmin currentColor;
}
.background span:nth-child(24) {
    color: #0055ff;
    top: 18%;
    left: 35%;
    animation-duration: 30s;
    animation-delay: -14s;
    transform-origin: 10vw -17vh;
    box-shadow: 54vmin 0 7.073042126485587vmin currentColor;
}
.background span:nth-child(25) {
    color: #0055ff;
    top: 67%;
    left: 68%;
    animation-duration: 24s;
    animation-delay: -18s;
    transform-origin: 25vw 3vh;
    box-shadow: -54vmin 0 7.060592799889655vmin currentColor;
}
.background span:nth-child(26) {
    color: #0055ff;
    top: 34%;
    left: 86%;
    animation-duration: 35s;
    animation-delay: -37s;
    transform-origin: -14vw 20vh;
    box-shadow: -54vmin 0 7.262737670285707vmin currentColor;
}




</style>