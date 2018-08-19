import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import PodcastIndex from '@/views/PodcastIndex.vue'
import Podcast from '@/views/Podcast.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            name: 'not found',
            component: NotFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/podcast',
            name: 'podcastindex',
            component: PodcastIndex
        },
        {
            path: '/podcast/:id',
            name: 'podcast',
            component: Podcast
        }
    ]
})
