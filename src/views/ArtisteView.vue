<script setup>
import ArtisteDetail from "../components/ArtisteDetail.vue";
</script>

<template>
  <div class="about">
    <ArtisteDetail :idArtiste="$route.params.id" />
  </div>
</template>
