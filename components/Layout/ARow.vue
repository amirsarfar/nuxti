<template>
    <div :class="rowClasses">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Row",
    props: {
        full: Boolean,
    },
    computed:{
        rowClasses() {
            return[
                "w-full mx-auto",
                this.full ? "" : "max-w-screen-xl"
            ]
        }
    }
}
</script>

<style>

</style>