<template>
    <div id="snakeContainer">
        <!--v-if only displays the button if a joke is available to edit-->
        <!--click event to trigger loud joke edit from getters-->
        <button id="snakeBtn" v-if="returnCurrentJokeState!=''" @click="displaySnakeJoke">Make_Snake!</button>
    </div>
</template>

<script>
    export default {
        name: "SnakeJoke",
        computed: {
            //returns state of joke to see if string empty for display of button
            returnCurrentJokeState() {
                return this.$store.state.theJoke;
            },
            //returns edited string from getters
            getSnakeJoke() {
                return this.$store.getters.makeJokeSnake;
            }
        },
        methods: {
            //event to send data to mutations to update the state
            displaySnakeJoke() {
                return this.$store.commit("snakeEdit", this.getSnakeJoke);
            }
        }
    }
</script>

<style scoped>
    #snakeContainer {
        grid-column: 3;
    }

    #snakeBtn {
        cursor: pointer;
        height: 4vh;
        width: 15vw;
        background-color: #52b69a;
        color: rgb(51, 51, 51);
        border: 3px #34a0a4 solid;
        border-radius: 12px;
        font-weight: bold;
        font-size: 1.2em;
    }

    #snakeBtn:active {
        background-color: #3e8a74;
    }
</style>