import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '@/pages/PostsPage'
import PostId from '@/pages/PostId'

const routes = [
	{
		path: '/',
		component: PostsPage
	},
	{
		path: '/:id',
		component: PostId
	}
]

export const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})
