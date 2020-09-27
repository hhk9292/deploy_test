<template>
  <v-app>
    <router-link to="/"> Home </router-link>
    <router-link to="/users"> Users </router-link>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
