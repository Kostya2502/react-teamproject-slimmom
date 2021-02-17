import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/home/Home' /* webpackChunkName: "HomePage"*/)),
    // isPrivate: false,
    general: true,
  },
  {
    path: '/login',
    name: 'Вход',
    exact: false,
    component: lazy(() => import('../pages/login/Login' /* webpackChunkName: "LoginPage"*/)),
    isPrivate: false,
    general: false,
    // restricted: true,
  },
  {
    path: '/register',
    name: 'Регистрация',
    exact: false,
    component: lazy(() => import('../pages/registration/Registration' /* webpackChunkName: "RegistrationPage"*/)),
    isPrivate: false,
    general: false,
    // restricted: true,
  },
  {
    path: '/diary',
    name: 'Дневник',
    exact: false,
    component: lazy(() => import('../pages/diary/Diary' /* webpackChunkName: "DiaryPage"*/)),
    isPrivate: true,
    general: false,
    // restricted: false,
  },
  {
    path: '/calculator',
    name: 'Калькулятор',
    exact: false,
    component: lazy(() => import('../pages/calculator/Calculator' /* webpackChunkName: "CalculatorPage"*/)),
    isPrivate: true,
    general: false,
    // restricted: false,
  },
];

export default mainRoutes;
