<template>
  <div class="home">
    <MacbookPro/>
  </div>
</template>

<script>
// <HelloWorld msg="Registration"/>
// @ is an alias to /src
import MacbookPro from '@/components/Component.vue'

export default {
  name: 'HomeView',
  components: {
    MacbookPro
  }
}
</script>
