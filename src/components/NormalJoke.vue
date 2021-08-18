<template>
    <div id="normalContainer">
        <!--v-if only displays the button if a joke is available to edit-->
        <!--click event to trigger loud joke edit from getters-->
        <button id="normalBtn" v-if="returnCurrentJokeState!=''" @click="displayNormalJoke">Make Normal!</button>
    </div>
</template>

<script>
    export default {
        name: 'NormalJoke',
        computed: {
            //returns state of joke to see if string empty for display of button
            returnCurrentJokeState() {
                return this.$store.state.theJoke;
            }
        },
        methods: {
            //event to send a call to mutations to update the state. 
            //No data needs to be passed as the mutation will only be replacing 
            //data from the state with an empty string. 
            displayNormalJoke() {
                return this.$store.commit('normalize');
            }
        }
    }
</script>

<style scoped>
    #normalContainer {
        grid-column: 4;
    }

    #normalBtn {
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

    #normalBtn:active {
        background-color: #3e8a74;
    }
</style>