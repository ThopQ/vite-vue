<script setup>
import { ref } from "vue";
import { XIcon } from "@heroicons/vue/outline";

const props = defineProps({
  title: String,
  likes: Number,
});

const isOpen = ref(false);
</script>

<template>
  <button @click="isOpen = true" class="btn btn-success">dialog</button>

  <Teleport to="body">
    <Transition name="fade">
      <div
        @click.self="isOpen = false"
        v-if="isOpen"
        id="app-dialog-bg"
        class="app-dialog-bg"
      >
        <div id="app-dialog" class="app-dialog">
          <div class="app-dialog-header">
            <div class="app-dialog-title">
              <slot name="dialog-title"></slot>
            </div>

            <div class="flex-none">
              <button @click="isOpen = false" class="app-dialog-close-button">
                <x-icon class="h-5 w-5" />
              </button>
            </div>
          </div>

          <div class="app-dialog-content">
            <slot name="dialog-content"></slot>
          </div>

          <div class="app-dialog-actions">
            <slot name="dialog-actions"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.app-dialog {
  @apply px-5 py-3 shadow border border-base-300 rounded-xl bg-base-100 w-128;
}

.app-dialog-header {
  @apply flex items-center mb-3;
}

.app-dialog-actions {
  @apply mt-3;
}

.app-dialog-content {
  @apply overflow-y-auto max-h-80;
}

.app-dialog-title {
  @apply text-xl font-semibold flex-1;
}

.app-dialog-bg {
  @apply absolute top-0 h-screen w-full z-50 bg-base-100 backdrop-filter backdrop-blur-md bg-opacity-30 grid place-content-center;
}

.app-dialog-close-button {
  @apply btn btn-sm btn-ghost;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
