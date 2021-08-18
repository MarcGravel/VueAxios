<template>
    <div id="loudContainer">
        <!--v-if only displays the button if a joke is available to edit-->
        <!--click event to trigger loud joke edit from getters-->
        <button id="loudBtn" v-if="returnCurrentJokeState!=''" @click="displayLoudJoke">Make LOUD!</button>
    </div>
</template>

<script>
    export default {
        name: "LoudJoke",
        computed: {
            //returns state of joke to see if string empty for display of button
            returnCurrentJokeState() {
                return this.$store.state.theJoke;
            },
            //returns edited string from getters
            getLoudJoke() {
                return this.$store.getters.makeJokeLoud;
            }
        },
        methods: {
            //event to send data to mutations to update the state
            displayLoudJoke() {
                return this.$store.commit("loudEdit", this.getLoudJoke);
            }
        }
    }
</script>

<style scoped>
    #loudContainer {
        grid-column: 2;
    }

    #loudBtn {
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

    #loudBtn:active {
        background-color: #3e8a74;
    }

</style>