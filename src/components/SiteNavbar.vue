<template>
    <nav class="hidden py-4 md:flex md:justify-center dark:bg-neutral-900">
        <div
            v-for="routeName in props.routesList"
            :key="routeName"
            class="px-4 py-10 font-redhat text-sm font-medium uppercase text-neutral-600 dark:text-purple-200 lg:text-xl"
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
