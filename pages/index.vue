<template>
  <a-container>
    <a-row>
      <NuxtLink to="/types">All Types</NuxtLink>
      <button class="btn btn-blue" @click="increment">
        increment
      </button>
    </a-row>
  </a-container>
</template>

<script>
import { ARow, AContainer } from "~/components/Layout";
import { mapMutations } from 'vuex'
export default {
    components:{
        AContainer,
        ARow,
    },
    data(){
      return{
      }
    },
    mounted(){
    },
    methods: {
      ...mapMutations(['increment']),
    }

}
</script>

<style>

</style>
