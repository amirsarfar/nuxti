<template>
  <a-container>
		<a-row>
      <div class="float-input relative my-4">
        <input type="text" id="title" @model="title" class="p-3 bg-gray-300 focus:bg-gray-100 rounded-lg focus:border-none">
        <label for="title" class="absolute top-3 left-3">Type Title</label>
      </div>
      <hr>
      <NuxtLink to="/types">All Types</NuxtLink>
		</a-row>
  </a-container>
</template>

<script>
import { ARow, AContainer } from "~/components/Layout";
export default {
    components:{
        AContainer,
        ARow,
    },
    data(){
      return{
        title: '',
        attributes: null,
      }
    },
    mounted(){
    },
    methods: {
    }

}
</script>

<style lang="scss">
  .float-input input{
    padding: 2rem;
    label{
      background: saddlebrown;
    }
  }
</style>
