<script setup>
import { ref, onMounted } from "vue";
import ArtisteList from "../components/ArtisteList.vue";
import FormArtist from "../components/FormArtist.vue";

const nomArtiste = ref("népal");

function handlerSearchArt(libelle) {
  nomArtiste.value = libelle;
  console.log(libelle);
}
</script>

<template>
  <div>
    <FormArtist @handlerSub="handlerSearchArt"></FormArtist>
    <ArtisteList :artiste="nomArtiste"></ArtisteList>
  </div>
</template>
