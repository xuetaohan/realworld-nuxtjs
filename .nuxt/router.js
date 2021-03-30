import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b6f020f = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _b7191df8 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _2b9a1038 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _027b5f64 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _439ec470 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _4fa02852 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2d74ba9e = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5b6f020f,
    children: [{
      path: "",
      component: _b7191df8,
      name: "home"
    }, {
      path: "/login",
      component: _2b9a1038,
      name: "login"
    }, {
      path: "/register",
      component: _2b9a1038,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _027b5f64,
      name: "profile"
    }, {
      path: "/settings",
      component: _439ec470,
      name: "settings"
    }, {
      path: "/editor",
      component: _4fa02852,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2d74ba9e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
