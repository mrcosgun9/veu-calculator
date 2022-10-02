<script setup lang="ts"></script>

<template>
  <main>
    <div
      class="relative w-96 h-[812px] rounded-lg overflow-hidden z-10 bg-white/90 shadow-lg"
    >
      <div class="h-64 w-full flex flex-wrap content-end px-5">
        <div class="w-full h-9 text-right">50 + 50</div>
        <div class="w-full">
          <input class="w-full h-full text-right text-5xl" />
        </div>
      </div>
      <div class="w-full">
        <div class="w-full">
          <div class="w-1/4">C</div>
          <div class="w-1/4">%</div>
          <div class="w-1/4"></div>
          <div class="w-1/4">C</div>
        </div>
        <div v-for="i in 9" :key="i">{{ i }}</div>
      </div>
    </div>
    <div class="blob-box"></div>
  </main>
</template>
