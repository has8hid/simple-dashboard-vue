import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: 'smaily',
    spots: 5,
    members: [],
  }),

  actions: {
    async fill() {
      let r = await import('@/team.json')
      this.$state = r.default
    },
    addMember(newMember) {
      if (this.spotRemaining > 0) {
        this.members.push({ ...newMember })
      }
    },
  },

  getters: {
    spotRemaining() {
      return this.spots - this.members.length
    },
  },
})
