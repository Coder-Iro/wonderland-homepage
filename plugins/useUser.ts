import { NuxtApp } from 'nuxt3';
import { createPinia, defineStore, setActivePinia } from 'pinia';
import persistedstate from 'pinia-plugin-persistedstate';
import Cookies from 'js-cookie';
import * as cookie from 'cookie';

export default (context: NuxtApp, inject: Function) => {
  context.$pinia.use(persistedstate);
  const useUser = defineStore({
    id: 'user',
    state: () => ({
      username: '',
      uuid: '',
      token: '',
      isLoggedIn: false,
    }),
    actions: {
      login({
        username,
        uuid,
        token,
      }: {
        username: string;
        uuid: string;
        token: string;
      }) {
        this.isLoggedIn = true;
        this.username = username;
        this.uuid = uuid;
        this.token = token;
      },
      logout() {
        this.isLoggedIn = false;
        this.username = '';
        this.uuid = '';
        this.token = '';
      },
    },
    persist: {
      storage: {
        getItem: (key: string) => {
          if (process.server) {
            const parsedCookies = cookie.parse(context.req.headers.cookie);
            return parsedCookies[key];
          } else {
            return Cookies.get(key) || null;
          }
        },
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key: string, value: string | object) =>
          Cookies.set(key, value, { expires: 365, secure: false }),
        removeItem: (key: string) => Cookies.remove(key),
      },
    },
  });

  inject('useUser', useUser);
  context.useUser = useUser;
};
