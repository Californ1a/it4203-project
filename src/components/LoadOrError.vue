<template>
  <div v-if="loading" class="progress blue lighten-4">
    <div class="indeterminate blue darken-3"></div>
  </div>
  <div v-if="error" class="card red">
    <div class="card-content white-text">
      <span class="card-title">{{ error }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'loading',
    'error',
  ]),
};
</script>

<style>
</style>
