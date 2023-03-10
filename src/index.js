import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_MOVIE", fetchOneMovie);
  yield takeEvery("FETCH_GENRES", fetchGenres);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchOneMovie(action) {
  // get  one movie from the DB
  try {
    const movie = yield axios.get(`/api/movie/${action.payload}`);
    console.log("here's the get one:", movie.data);
    console.log("this is the action payload", action.payload);
    yield put({ type: "SET_MOVIE", payload: movie.data });
  } catch {
    console.log("get one error");
  }
}
function* fetchGenres(action) {
  //get the genres for that movie from the db
  try {
    const genres = yield axios.get(`/api/genre/${action.payload}`);
    console.log("here's the genre: ", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch {
    console.log("get genre error");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};
//used to store the movie that was selected
const movie = (state = {}, action) => {
  if (action.type === "SET_MOVIE") {
    return action.payload;
  } else {
    return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

//render to DOM
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
