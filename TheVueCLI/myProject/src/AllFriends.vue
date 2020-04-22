<template>
    <div id="all-friends">
        <h2>All friends</h2>
        <div v-for="(friend, index) in friends" :key="index" >
            <span @click="unfriend(friend.name)">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'allFriends',
    props: ['friends'],
    data() {
        return {
            
        }
    },
    methods: {
        unfriend(name) {
            //     Ime eventa    Sta zelimo da posaljemo
            this.$emit('delete', { name })
        }
    }
}
</script>
