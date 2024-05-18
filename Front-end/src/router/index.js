import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/Students/view.vue'
import StudentCreate from '../views/Students/Create.vue'
import StudentEdit from '../views/Students/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/students/create',
      name: 'studentscreate',
      component: StudentCreate
    },
    {
      path: '/students/:id/edit',
      name: 'studentsedit',
      component: StudentEdit
    }
  ]
})

export default router
