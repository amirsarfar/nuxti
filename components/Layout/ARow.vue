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
                "w-full mx-auto px-6 2xl:px-0",
                this.full ? "" : "max-w-screen-xl"
            ]
        }
    }
}
</script>

<style>

</style>