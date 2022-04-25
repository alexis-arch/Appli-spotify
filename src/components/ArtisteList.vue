<script setup>
import { onMounted, reactive, watch } from "vue";

const props = defineProps(["artiste"]);

watch(props, () => {
  getArtistes(props.artiste);
});

let listeArtistes = reactive([]);

const url = "https://api.spotify.com/v1/search?type=artist&market=FR&q=";
const token =
  "BQD2LqOQH1jZFIZy6ZW73L_JHrUsPxSVsP2Hd9BWYE4t_TCbD7-M_z6YDXF1nOzfAOgmOEeJ6A16kkWwjvZqmkFim-pvnqFjE49W-mveCxN2tZDXZdtuCNtycVjVpTT6QPhRAr04X_IMbCn_doYwY1JVyGfegCc";

function getArtistes(libelle) {
  listeArtistes.splice(0);
  if (libelle != null && libelle != "") {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    };

    fetch(url + libelle, fetchOptions)
      .then((response) => response.json())
      .then((rep) => {
        console.log(rep);
        rep.artists.items.map((element) => {
          listeArtistes.push(element);
        });
        console.log(rep);
      })
      .catch((error) => console.log("error ArtistList :" + error));
  }
}

onMounted(() => {
  getArtistes(props.artiste);
});
</script>

<template>
  <div>
    <h2>Résultat de la recherche</h2>
    <ul>
      <li v-for="artiste in listeArtistes" :key="artiste.id">
        <RouterLink :to="{ name: 'artiste', params: { id: artiste.id } }">
          <h3>{{ artiste.name }}</h3>
          <h4>{{ artiste.genres[2] }}</h4>
          <img :src="artiste.images[2].url" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
