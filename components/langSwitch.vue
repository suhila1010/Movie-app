<script setup>
const { locale, locales, setLocale } = useI18n();
// console.log(locales)
const availableLocales = computed(() => {
  return locales.value;
});

function updateLocale(event) {
  setLocale(event.target.value);
  window.location.reload();
}

onMounted(() => {
  const langSwitcher = document.querySelector("#langSwitcher");
  langSwitcher.value = locale.value;
});
</script>

<template>
  <div class="flex gap2 items-center">
    Language:
    <select
      id="langSwitcher"
      class="rounded-md text-sm px-5 py-1 bg-[#111]"
      @change="updateLocale"
    >
      <option
        v-for="loc in availableLocales"
        :key="loc.code"
        :value="loc.code"
        class="bg-[#111] p-2"
      >
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>
