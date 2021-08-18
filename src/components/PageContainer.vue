<template>
    <div>
        <div id="theContainer">
            <JokeButton />
            <LoudJoke />
            <SnakeJoke />
            <NormalJoke />
        </div>
    </div>
</template>

<script>
import JokeButton from './JokeButton.vue'
import LoudJoke from './LoudJoke.vue'
import SnakeJoke from './SnakeJoke.vue'
import NormalJoke from './NormalJoke.vue'

    export default {
        name: "PageContainer",
        components: {
            JokeButton,
            LoudJoke,
            SnakeJoke,
            NormalJoke
        },
    }
</script>

<style scoped>
    #theContainer {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr 1fr;
    }
</style>