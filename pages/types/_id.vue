<template>
  <a-container>
		<a-row>
			<div v-if="isLoading">
				Loading ...
			</div>
			<div v-else>
				<div>
					<div>{{type.title}}</div>
				</div>
        <hr>
				<div v-for="attribute in type.definition" :key="attribute.name" class="flex">
					<div>{{attribute.name}} ({{attribute.type}})</div>
          <div v-if="attribute.options">
            
          </div>
				</div>
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
        type: null,
        isLoading: true,
      }
    },
    mounted(){
      this.fetchSomething();
    },
    methods: {
      async fetchSomething() {
        const id = this.$route.params.id;
        const ip = await this.$axios.$get('http://127.0.0.1:8000/api/v1/types/' + id);
        console.log(ip);
        this.type = ip;
        this.isLoading = false;
      }
    }

}
</script>

<style>

</style>
