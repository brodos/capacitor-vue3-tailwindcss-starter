<template>
  <div>
    <ul class="flex items-center space-x-4">
      <li>
        <router-link :to="{name: 'home'}">
          Home
        </router-link>
      </li>

      <li>
        <router-link :to="{name: 'about'}">
          About
        </router-link>
      </li>
    </ul>
  </div>
  <div class="mt-2">
    <router-view />
  </div>
</template>
