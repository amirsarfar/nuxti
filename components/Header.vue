<template>
    <a-container>
        <a-row>
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