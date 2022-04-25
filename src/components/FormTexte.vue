<script setup></script>

<template>
  <form @submit.prevent="$emit('handlerS', nomA)">
    <input type="text" v-model="nomA" placeholder="album ?" />
    <input type="submit" value="valider" />
  </form>
</template>

<style></style>
