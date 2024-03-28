// const DefaultLayout = async (): Promise<typeof import('*.vue')> =>
//   await import(/* webpackChunkName: "sample" */ '@/layouts/sample/DefaultLayout.vue');

const Reactive = async (): Promise<typeof import('*.vue')> =>
  await import(/* webpackChunkName: "sample" */ '@/views/sample/Reactive.vue');
const Computed = async (): Promise<typeof import('*.vue')> =>
  await import(/* webpackChunkName: "sample" */ '@/views/sample/Computed.vue');
const PropsParent = async (): Promise<typeof import('*.vue')> =>
  await import(/* webpackChunkName: "sample" */ '@/views/sample/PropsParent.vue');
const EmitsParent = async (): Promise<typeof import('*.vue')> =>
  await import(/* webpackChunkName: "sample" */ '@/views/sample/EmitsParent.vue');
const LoginPage = async (): Promise<typeof import('*.vue')> =>
  await import(/* webpackChunkName: "sample" */ '@/views/sample/LoginPage.vue');

export default {
  path: '/sample',
  // component: DefaultLayout,
  redirect: '/sample/helloWorld',

  children: [
    {
      path: '/sample/helloWorld',
      component: Reactive,
      meta: {
        title: 'reactive'
      }
    },
    {
      path: '/sample/computed',
      component: Computed,
      meta: {
        title: 'computed'
      }
    },
    {
      path: '/sample/propsParent',
      component: PropsParent,
      meta: {
        title: 'propsParent'
      }
    },
    {
      path: '/sample/emitsParent',
      component: EmitsParent,
      meta: {
        title: 'emitsParent'
      }
    },

    {
      path: '/sample/loginPage',
      component: LoginPage,
      meta: {
        title: 'loginPage'
      }
    }
  ]
};
