<template>
    <nav class="hidden py-4 md:flex md:justify-center">
        <div
            v-for="routeName in props.routesList"
            :key="routeName"
            class="px-4 py-4 font-redhat text-sm font-medium uppercase text-gray-700 lg:text-xl"
        >
            <router-link :to="{ name: routeName }">{{ routeName }}</router-link>
        </div>
    </nav>
</template>
<script>
export default {
    props: { routesList: Array },
    setup(props) {
        return { props }
    },
}
</script>
