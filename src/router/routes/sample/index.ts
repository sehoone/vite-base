const DefaultLayout = async (): Promise<typeof import('*.vue')> => await import(/* webpackChunkName: "sample" */ '@/layouts/sample/DefaultLayout.vue');
  
const Reactive = async (): Promise<typeof import('*.vue')> => await import(
    /* webpackChunkName: "sample" */ '@/views/sample/Reactive.vue'
  );


export default {
    path: '/sample',
    // component: DefaultLayout,
    redirect: '/sample/helloWorld',

    children: [
      {
        path: '/sample/helloWorld',
        component: Reactive,
        meta: {
          title: 'reactive',
        },
      },
    ],
  };
