<script setup>
// import team from '@/team.json'
import TeamHeader from '@/components/teams/TeamHeader.vue'
import TeamTable from '@/components/teams/TeamTable.vue'
import TeamFooter from '@/components/teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'

let team = useTeamStore()

team.fill();
</script>

<template>
  <main class="container-fluid bg-dark text-white-50 min-vh-100 p-5">
    <team-header/>

    <div class="d-flex flex-column justify-content-center align-items-center w-100 mt-5">
      <team-table />
    </div>
    <team-footer/>
  </main>
</template>
