<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "/@/components/HelloWorld.vue";
import { ConfigProvider } from "ant-design-vue";
import { useLocale } from "./locales/uselocale";

const { getAntdLocale } = useLocale();
</script>

<template>
  <ConfigProvider :locale="getAntdLocale">
    <HelloWorld msg="'123'" />
  </ConfigProvider>
</template>

<style></style>
