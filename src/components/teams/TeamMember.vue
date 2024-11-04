<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ email }}@gmail.com</td>
        <td><button class="text-success">{{ status }}</button></td>
    </tr>
</template>

<script setup>

defineProps({
  name: String,
  email: String,
  status:String,
})
</script>

<style>

</style>
