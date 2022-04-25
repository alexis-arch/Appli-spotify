<script setup>
import { onMounted, ref, reactive, watch } from "vue";

const props = defineProps(["idArtiste"]);
let info = ref(null);

const url = "https://api.spotify.com/v1/artists/";
const token =
  "BQD2LqOQH1jZFIZy6ZW73L_JHrUsPxSVsP2Hd9BWYE4t_TCbD7-M_z6YDXF1nOzfAOgmOEeJ6A16kkWwjvZqmkFim-pvnqFjE49W-mveCxN2tZDXZdtuCNtycVjVpTT6QPhRAr04X_IMbCn_doYwY1JVyGfegCc";

onMounted(() => {
  console.log("rrrrrrrrrrr " + props.idArtiste);
  getInfo();
});

function getInfo() {
  console.log(props.idArtiste);
  if (props.idArtiste != null && props.idArtiste != "") {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    };

    fetch(url + props.idArtiste, fetchOptions)
      .then((response) => response.json())
      .then((rep) => {
        console.log(rep);
        info.value = rep;
      })
      .catch((error) => console.log("error ArtistDetail : " + error));
  }
}
</script>

<template>
  <div>
    <h2>Detail de l'artiste</h2>
    <div v-if="info">
      <p>{{ info.name }}</p>
      <img :src="info.images[1].url" alt="image" />
      <h3>Genre: {{ info.genres[1] }}</h3>
      <h4>{{ info.followers.total }} suiveurs</h4>
      <h4>{{ info.popularity }} de popularité</h4>
      <span
        ><a href="{{ info.href }}">En savoir plus :</a>
        <p>{{ info.href }}</p>
      </span>
      <p>Interprete</p>
      <ul>
        <li v-for="artist in info.artists" :key="[artist.id]">
          <p>{{ artist.name }}</p>
        </li>
      </ul>
    </div>
    <div v-else>Chargement...</div>
  </div>
</template>

<style></style>
