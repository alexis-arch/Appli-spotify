<script setup>
import { onMounted, ref, reactive, watch } from "vue";

const props = defineProps(["idAlbum"]);
const album = ref(null);

const url = "https://api.spotify.com/v1/albums/";
const token =
  "BQB1yA10hkM3odErPj09xBqcTi70fXvA6T8AqyBynhu4SOj_a99_kqoaYyCWj3Bms53G9r-UodGbwiXbIhrkV9ZAPu4T2YNAjBsQNf-qqLVmIgMn7ZjsphP4c7z5vDQfb_F7omD9sRhTOqJgDXA61qUdlXXRCno";

onMounted(() => {
  //console.log("rrrrrrrrrrr " + props.idAlbum)
  getInfo();
});

function getInfo() {
  //console.log(props.idAlbum)
  if (props.idAlbum != null && props.idAlbum != "") {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    };

    fetch(url + props.idAlbum, fetchOptions)
      .then((response) => response.json())
      .then((rep) => {
        console.log(rep);
        album.value = rep;
      })
      .catch((error) => console.log("error AlbumDetail : " + error));
  }
}
</script>

<template>
  <div v-if="album">
    <p>{{ album.name }}</p>
    <img :src="album.images[1].url" alt="image" />
    <p>Interprete</p>
    <ul>
      <li v-for="artist in album.artists" :key="[artist.id]">
        <p>{{ artist.name }}</p>
      </li>
    </ul>
    <p>Extraits de chansons</p>
    <ul>
      <li v-for="track in album.tracks.items" :key="[track.id]">
        <p>{{ track.name }}</p>
        <audio controls :src="track.preview_url"></audio>
      </li>
    </ul>
  </div>
  <div v-else>Chargement...</div>
</template>

<style></style>
