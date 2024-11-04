<template>
      <footer class="d-flex justify-content-center w-100 bg-light p-2 opacity-50">

      <p class="text-dark p-0 m-0">
        {{ team.name }} - members is ({{ team.spots }})
      </p>

    </footer>
</template>

<script setup>

import { useTeamStore } from '@/stores/TeamStore';
let team = useTeamStore();
</script>

<style>

</style>
