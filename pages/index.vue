<template>
  <div>
    <div v-for="user of users">
      {{user.id}} - {{user.posts}}
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const {data: users} = useFetch('/api/hello')
</script>
