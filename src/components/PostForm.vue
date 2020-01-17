<template>
    <form @submit.prevent="submit">
        <input placeholder="title" v-model="title"/>
        <textarea placeholder="body" v-model="body"/>
        <button type="submit">Create Post</button>
        <hr>
    </form>
</template>

<script>
export default {
    data(){
        return {
            title: "",
            body: ""
        };
    },
    methods: {
        
    }
}
</script>