<script setup>
import AppDialog from "~/components/AppDialog.vue";
</script>

<template>
  <div class="grid h-screen place-content-center">
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
</template>
