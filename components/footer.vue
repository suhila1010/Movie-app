<script></script>
<template>
  <div class="px-36 py-10">
    <div class="flex gap-4 mb-5">
      <img src="~/assets/movies-sm.webp" width="25" height="25" alt="Logo" />
      <h1 class="text-xl">Nuxt Movies</h1>
    </div>
    <div class="flex gap-4 mb-5">
      <h1 class="text-sm opacity-50">Made with</h1>
      <a href="https://nuxt.com/" target="_blank" title="Nuxt 3">
        <IconsNuxt3 class="h-5" />
      </a>
    </div>
    <div class="flex gap-4 mb-5">
      <h1 class="text-sm opacity-50">Data provided by</h1>
      <a href="https://nuxt.com/" target="_blank" title="Nuxt 3">
        <IconsTMDB class="h-5" />
      </a>
    </div>
    <p class="text-sm opacity-50 mb-8">
      This project uses the TMDB API but is not endorsed or certified by TMDB.
    </p>
    <div class="flex gap-5">
      <a href="https://nuxt.com/" target="_blank" title="Twitter">
        <font-awesome-icon
          :icon="['fab', 'fa-twitter']"
          class="opacity-50 text-3xl"
        />
      </a>
      <a href="https://nuxt.com/" target="_blank" title="Twitter">
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="opacity-50 text-3xl"
        />
      </a>
      <a href="https://nuxt.com/" target="_blank" title="Twitter">
        <IconsVercle class="h-5" />
      </a>
      <LangSwitch></LangSwitch>
    </div>
  </div>
</template>
