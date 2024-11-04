<template>
  <header class="team-nav">
    <div
      class=" d-flex flex-column justify-content-center align-items-center gap-3"
    >
      <div >
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Add Member
        </button>
        <div class="dropdown-menu p-4" aria-labelledby="dropdownMenuButton">
          <form>
            <div class="mb-3">
              <input
                v-model="newMember.name"
                placeholder="Enter name"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <input
                v-model="newMember.email"
                placeholder="Enter email"
                class="form-control my-2"
              />
            </div>
            <div class="mb-3">
              <select v-model="newMember.status" class="form-control">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <button
              class="add-btn btn btn-success mt-2"
               :class="{ 'btn-danger': ! team.spotRemaining }"
              :disabled="
                !team.spotRemaining || !newMember.name || !newMember.email
              "
              @click="addMember"
            >
              Add member ({{ team.spotRemaining }} spots left)
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center gap-2 mt-3">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/2445151777/display_1500/stock-vector-doodle-sketch-style-of-smile-face-icon-vector-illustration-for-concept-design-2445151777.jpg"
        alt="team logo"
        height="50px"
        width="50px"
      />
      <h3>{{ team.name }} team</h3>
    </div>
  </header>
</template>

<script setup>
import { useTeamStore } from '@/stores/TeamStore'
import { reactive } from 'vue'

let team = useTeamStore()

// Reactive object to hold new member details
let newMember = reactive({
  name: '',
  email: '',
  status: 'active',
})

function addMember() {
  team.addMember(newMember)
  // Reset fields after adding
  newMember.name = ''
  newMember.email = ''
  newMember.status = 'active'
}
</script>
