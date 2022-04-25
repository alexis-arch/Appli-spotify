<script setup>
import { onMounted, reactive, watch } from "vue";

const props = defineProps(["album"]);

watch(props, () => {
  getAlbums(props.album);
});

let listeAlbums = reactive([]);

const url = "https://api.spotify.com/v1/search?type=album&market=FR&q=";
const token =
  "BQB1yA10hkM3odErPj09xBqcTi70fXvA6T8AqyBynhu4SOj_a99_kqoaYyCWj3Bms53G9r-UodGbwiXbIhrkV9ZAPu4T2YNAjBsQNf-qqLVmIgMn7ZjsphP4c7z5vDQfb_F7omD9sRhTOqJgDXA61qUdlXXRCno";

function getAlbums(motcle) {
  listeAlbums.splice(0);
  if (motcle != null && motcle != "") {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    };

    fetch(url + motcle, fetchOptions)
      .then((response) => response.json())
      .then((rep) => {
        rep.albums.items.map((element) => {
          listeAlbums.push(element);
        });
        console.log(rep);
      })
      .catch((error) => console.log("error AlbumList :" + error));
  }
}

onMounted(() => {
  getAlbums(props.album);
});
</script>

<template>
  <div>
    <h2>Résultat de la recherche</h2>
    <ul>
      <li v-for="music in listeAlbums" :key="music.id">
        <RouterLink :to="{ name: 'album', params: { id: music.id } }">
          <h3>{{ music.name }}</h3>
          <img :src="music.images[2].url" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
