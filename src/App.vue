<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { useLocale } from "./locales/uselocale";
import { useTitle } from "/@/hooks/web/useTitle";

const { getAntdLocale } = useLocale();

useTitle();
</script>

<template>
  <ConfigProvider :locale="getAntdLocale">
    <RouteView />
  </ConfigProvider>
</template>

<style></style>
