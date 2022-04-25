<script setup></script>

<template>
  <form @submit.prevent="$emit('handlerSub', nomArt)">
    <!-- <form @submit.prevent="handlderAdd(libelle, qte)"> -->
    <input type="text" v-model="nomArt" placeholder="artiste ?" />
    <input type="submit" value="valider" />
  </form>
</template>

<style></style>
