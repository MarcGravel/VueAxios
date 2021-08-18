import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //Global use vaiables
  state: {
    theJoke: "",
    getAJoke: "Please click button to get a joke!",
    editedJoke: ""
  },
  mutations: {
    //receives data from axios call and sets state of the joke from API call
    requestedJoke(state, joke) {
      state.theJoke = joke;
      state.editedJoke = "";
    },
    //receives button event and sets edited joke state
    loudEdit(state, loud) {
      state.editedJoke = loud;
    },
    //receives button event and sets edited joke state
    snakeEdit(state, snake) {
      state.editedJoke = snake;
    },
    //receives button event and removes editedJoke so page will display theJoke variable
    //due to v-if + v-else statement in template section of JokeButton.
    normalize(state) {
      state.editedJoke = "";
    }
  },
  actions: {
  },
  getters: {
    //returns the joke as all uppercase
    makeJokeLoud(state) {
      if(state.theJoke != '') {
        return state.theJoke.toUpperCase();
      }
    },
    //returns the joke as a snake case. replacing spaces with underscores
    makeJokeSnake(state) {
      if(state.theJoke != '') {
        return state.theJoke.split(' ').join('_');
      }
    }
  }
})
