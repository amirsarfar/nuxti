<template>
  <a-container>
		<a-row>
			<div v-if="isLoading">
				Loading ...
			</div>
			<div v-else>
				<div v-for="type in types" :key="type.id" class="flex">
          <NuxtLink :to="`/types/${type.id}`">{{type.key}} - {{type.title}}</NuxtLink>
				</div>
			</div>
      <hr>
			<NuxtLink to="/">Home page</NuxtLink>
      <br>
			<NuxtLink to="/types/create">Create a New Type</NuxtLink>
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
        types: [],
        isLoading: true,
      }
    },
    mounted(){
      this.fetchSomething();
    },
    methods: {
      async fetchSomething() {
        const ip = await this.$axios.$get(`/types/`);
        // this.ip = ip
        console.log(ip);
        this.types = ip.types;
        this.isLoading = false;
      }
    }

}
</script>

<style>

</style>
