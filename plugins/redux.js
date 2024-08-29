

export default defineNuxtPlugin((nuxtApp) => {
  // You can access the Nuxt app instance here
  // For example, to add a global state
  const state = useState('myState', () => ({
    counter: 0
  }));

  // You can use this state across your application
  nuxtApp.provide('redux', state);
});
