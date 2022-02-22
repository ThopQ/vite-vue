<script setup>
import useCounterStore from "~/store/counter.js";
import AppDialog from "~/components/AppDialog.vue";

const store = useCounterStore();
</script>

<template>
  <div class="grid h-screen place-content-center">
    <div class="h-96 w-96 grid place-content-center shadow-xl rounded-xl">
      <h1 class="text-4xl">
        Der Counter beträgt:
        <span class="badge badge-lg">{{ store.doubleCount }}</span>
      </h1>
      <app-dialog closable>
        <template #dialog-title> Title </template>
        <template #dialog-content> Test </template>

        <template #dialog-actions>
          <div class="flex justify-end">
            <button class="btn btn-sm btn-success">Speichern</button>
          </div>
        </template>
      </app-dialog>
    </div>
  </div>
</template>
