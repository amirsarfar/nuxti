<template>
    <a-container class="h-full">
        <a-row class="h-full bg-purple-300 rounded-full px-7 flex justify-between items-center">
            <div>
                <fa :icon="['fas', 'bars']" />
            </div>
        </a-row>
    </a-container>
</template>

<script>
import { ARow, AContainer } from "./Layout";
export default {
    components:{
        AContainer,
        ARow,
    }
}
</script>

<style>

</style>