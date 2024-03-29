import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './components/nav/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import TeamsList from './components/teams/TeamsList.vue';
import UsersFooter from "./components/users/UsersFooter.vue";
import UsersList from './components/users/UsersList.vue';

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {
                    name: 'teams-members',
                    path: '/teams/:teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) return savedPosition;
        return {
            left: 0,
            top: 0
        }
    }
});

router.beforeEach((_to, _from, next) => {
    next();
});

const app = createApp(App);

app.use(router);
app.mount('#app');
