<template>
    <div id="mainBody">
        <!--if/else statement to display the API called joke if the edited joke-->
        <!--is not empty string. if the edited joke state has been updated due to-->
        <!--clicking an edit button, the edited joke will render instead of the original display-->
        <h2 v-if="this.editedJoke() == ''">{{displayJoke()}}</h2>
        <h2 v-else>{{editedJoke()}}</h2>
        <button id="jokeBtn" @click="requestJoke">Get New Joke</button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "JokeButton",
        methods: {
            //Axios API call
            requestJoke() {
                axios.request({
                    url: "https://geek-jokes.sameerkumar.website/api?format=json",
                    method: "GET"
                }).then((response) => {
                    return this.$store.commit("requestedJoke", response.data.joke);
                })
            },
            //displays the joke if joke state has been updated with API called data
            //if joke state is still emtpy string, a message appears for user instead
            displayJoke() {
                if(this.$store.state.theJoke !== "") {
                    return this.$store.state.theJoke
                } else {
                    return this.$store.state.getAJoke
                }
            },
            //returns the edited joke state, either empty string or updated 
            //due to button events
            editedJoke() {
                return this.$store.state.editedJoke;
            },
        }
    }
</script>

<style scoped>
    #mainBody {
        grid-column: 1 / 6;
        grid-row: 1;
    }

    h2 {
        color: #999999;
        margin: 7vh 0 2vh 0;
        height: 10vh;
    }

    #jokeBtn {
        cursor: pointer;
        height: 4vh;
        width: 15vw;
        background-color: #52b69a;
        color: rgb(51, 51, 51);
        border: 3px #34a0a4 solid;
        border-radius: 12px;
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 6vh;
    }

    #jokeBtn:active {
        background-color: #3e8a74;
    }
</style>