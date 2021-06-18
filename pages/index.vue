<template>
  <a-container>
        <a-row>
          <div v-for="type in types" :key="type.id" class="flex">
            <div>{{type.title}}</div>
          </div>
          <button class="btn btn-blue">sadsds</button>
        </a-row>
  </a-container>
</template>

<script>
import { ARow, AContainer } from "../components/Layout";
export default {
    components:{
        AContainer,
        ARow,
    },
    data(){
      return{
        types: [],
      }
    },
    mounted(){
      this.fetchSomething();
    },
    methods: {
      async fetchSomething() {
        const ip = await this.$axios.$get('http://127.0.0.1:8000/api/v1/types')
        // this.ip = ip
        console.log(ip);
        this.types = ip;
      }
    }

}
</script>

<style>

</style>
