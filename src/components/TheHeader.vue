<script setup lang="ts"></script>
<template>
  <div class="navbar bg-black">
    <div class="flex-1">
      <router-link class="btn btn-ghost text-xl text-white cursor-pointer mochiy-pop-one-regular" :to="{ name: 'home' }"
        >Chot Chat</router-link
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link class="cursor-pointer text-white mochiy-pop-one-regular" :to="{ name: 'home' }">チャット</router-link></li>
        <li><router-link class="cursor-pointer text-white mochiy-pop-one-regular" :to="{ name: 'todo' }">TODO表</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.mochiy-pop-one-regular {
  font-family: 'Mochiy Pop One', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
