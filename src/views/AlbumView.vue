<script setup>

    import AlbumDetail from '../components/AlbumDetail.vue';



</script>

<template>
  <div class="about">
    <AlbumDetail :idAlbum="$route.params.id"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>