<template>
  <a-container>

		<a-row>
      <text-input name="title" v-model="title" label="Type Title" class="mt-4"/>
		</a-row>

    <a-row v-if="attributes.length > 0">
      <div v-for="attribute in attributes" :key="attribute.name">
        {{attribute.name}} : {{attribute.type}}
      </div>
    </a-row>

    <a-row class="flex items-center flex-wrap mt-4">
      <div class="px-3 w-1/2">
        <text-input name="attributeName" v-model="attributeName" label="Attribute Name" />
      </div>
      <!-- <text-input name="attributeType" v-model="attributeType" label="Attribute Type" /> -->
      <div class="px-3 w-1/2">
        <select-input :data="attributeTypes" v-model="attributeType" v-on:valueSelect="onValueSelect">
          <template v-slot:SelectLabel>Attribute Type</template>
        </select-input>
      </div>
      
      <button class="bg-lime-500 p-3 rounded-lg my-3" @click="addAttribute">Add Attribute</button>
    </a-row>
    
    <a-row>
      <button class="bg-sky-500 p-3 rounded-lg my-3" @click="createType">Create New Type</button>

      <hr>
      <NuxtLink to="/types">All Types</NuxtLink>
    </a-row>
  
  </a-container>
</template>

<script>
import { ARow, AContainer } from "~/components/Layout";
import { TextInput, SelectInput } from "~/components/Form";
export default {
    components:{
        AContainer,
        ARow,
        TextInput,
        SelectInput,
    },
    data(){
      return{
        title: '',
        attributes: [],
        attributeName: '',
        attributeType: 'text',
        attributeTypes: [
          'text',
          'number',
          'relation',
        ]
      }
    },
    mounted(){
    },
    methods: {
      async createType() {
        const ip = await this.$axios.$post('http://127.0.0.1:8000/api/v1/types/', {
          title : this.title,
          definition: this.attributes
        });
        console.log(ip);
      },
      onValueSelect(value) {
        this.attributeType = value;
      },
      addAttribute(){
        this.attributes.push({
          name: this.attributeName,
          type: this.attributeType
        });
      }
    }

}
</script>

<style lang="scss">
</style>
