<script setup>
import { ref, onMounted } from "vue";
import AlbumList from "../components/AlbumList.vue";
import FormTexte from "../components/FormTexte.vue";

const nomAlbum = ref("nekfeu");

function handlerSearch(motcle) {
  nomAlbum.value = motcle;
}
</script>

<template>
  <div>
    <FormTexte @handlerS="handlerSearch"></FormTexte>
    <AlbumList :album="nomAlbum"></AlbumList>
  </div>
</template>
