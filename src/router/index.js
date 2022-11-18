import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
// import HomePage from '@/components/Home'
// import WatAIPage from '@/components/WatAIPage'
// import GevaarlijkAIPage from '@/components/GevaarlijkAIPage'
// import WanneerAIPage from '@/components/WanneerAIPage'
// import HoeAIPage from '@/components/HoeAIPage'
// import VoorbeeldenPage from '@/components/VoorbeeldenPage'


const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: ':page_name',
                component: Home
            }
        ]
    }
  
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//     console.log(to)
//     // if (to.name == 'page-not-found'){
//     //     next('/')
//     //     return true
//     // }
// })

export default router
