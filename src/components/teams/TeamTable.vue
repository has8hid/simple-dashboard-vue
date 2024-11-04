<template>
      <table class="table table-light w-50">
        <thead class="justify-content-around text-light p-5">
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </thead>
        <tbody>
          <team-member v-for="member in team.members"  :key="member.id" :name="member.name" :email="member.email" :status="member.status" />
        </tbody>
      </table>
          <div
      class="d-flex justify-content-center"
      v-show="team.spotRemaining <= 0"
    >
      <p class="opacity-50 fw-bold text-light">
        there's no more space to add members wanna update ?
       </p>
    </div>

</template>

<script setup>
import TeamMember from './TeamMember.vue';

import { useTeamStore } from '@/stores/TeamStore';
let team = useTeamStore();
</script>

<style>

</style>
