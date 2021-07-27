<template>
  <a-container>
		<a-row>
      <!-- <div class="float-input relative my-4">
        <input type="text" id="title" v-model="title" class="p-3 bg-gray-300 focus:bg-gray-100 rounded-lg focus:border-none">
        <label for="title" class="absolute top-3 left-3">Type Title</label>
      </div> -->

      <text-input name="title" v-model="title" label="Type Title" class="mt-4"/>

      <button class="bg-sky-500 p-3 rounded-lg my-3" @click="createType">Create New Type</button>

      <hr>
      <NuxtLink to="/types">All Types</NuxtLink>
		</a-row>
  </a-container>
</template>

<script>
import { ARow, AContainer } from "~/components/Layout";
import { TextInput } from "~/components/Form";
export default {
    components:{
        AContainer,
        ARow,
        TextInput,
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
      async createType() {
        const ip = await this.$axios.$post('http://127.0.0.1:8000/api/v1/types/', {
          title : this.title
        });
        console.log(ip);
      }
    }

}
</script>

<style lang="scss">
</style>
