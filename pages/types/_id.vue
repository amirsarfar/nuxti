<template>
  <a-container>
		<a-row>
			<div v-if="isLoading">
				Loading ...
			</div>
			<div v-else>
				<div>
					<div>{{type.key}} - {{type.title}}</div>
				</div>
        <hr>
				<div v-for="attribute in type.definition" :key="attribute.name">
					<div>{{attribute.name}} ({{attribute.type}})</div>
          <div v-if="attribute.options">
            <div v-for="(item, index) in attribute.options" :key="index">
              {{index}} : {{item}}
            </div>
          </div>
          <hr>
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
        const ip = await this.$axios.$get('/types/' + id);
        console.log(ip);
        this.type = ip.type;
        this.isLoading = false;
      }
    }

}
</script>

<style>

</style>
