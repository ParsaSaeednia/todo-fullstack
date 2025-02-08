<template>
  <div
    v-if="generalStore.isLoading"
    class="overlay"
  >
    <div class="d-flex justify-content-center">
      <div
        class="spinner-border"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGeneralStore } from "@/store/GeneralStore";

  const generalStore = useGeneralStore();
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
</style>
