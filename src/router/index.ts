import { createRouter,createWebHistory }  from 'vue-router'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            meta:{title:'Acceuil'},
            component:()=>import('@/layout/index.vue'),
            children:[
                {
                    path:'restaurant',
                    meta:{titel:'Model restaurant'},
                    component:()=>import('@/view/menu/restaurant.vue'),
                },
                {
                    path:'bubblthe',
                    meta:{titel:'Model bubblthe'},
                    component:()=>import('@/view/menu/restaurant.vue'),
                },
                {
                    path:'traiteur',
                    meta:{titel:'Model traiteur'},
                    component:()=>import('@/view/menu/restaurant.vue'),
                },
                {
                    path:'magasin',
                    meta:{titel:'Model magasin'},
                    component:()=>import('@/view/menu/restaurant.vue'),
                },
            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{ 
    NProgress.start()
    next()
})

router.afterEach((to,from)=>{
    if(to.meta && to.meta.title){
        document.title = to.meta.title as string
    }
    NProgress.done()
})
export default router
