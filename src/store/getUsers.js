/*==================================================
getUsers.js
This Redux Store defines Thunk, Action, and Reducer.
It retrieves user data by accessing API: https://jsonplaceholder.typicode.com/users
================================================== */
import axios from "axios";  // Library used to send asynchronous HTTP requests to RESTful endpoints (APIs)

// ACTION TYPE:
const GET_USERS = "GET_USERS";

// ACTION CREATOR:
// Create an Action object to be dispatched to Reducer
const getUsers = (users) => {
  return {  // The Action object
    type: GET_USERS,
    payload: users,
  };
};

// THUNK CREATOR: 
// It contains a Thunk (it is an Action creator and dispatches the Action object to Reducer)
// - Makes an async API call to retrieve data from remote website.
// - Dispatches an Action to Reducer with received data.
export const getUsersThunk = () => async dispatch => {
  // The Thunk
  let linkToAPI = 'https://jsonplaceholder.typicode.com/users';  // Link to remote website API
	try {  // Accept success response as array of JSON objects (users)
		let response = await axios.get(linkToAPI);
    console.log("RESPONSE:", response);  // Print out response
    // To get data object in the response, need to use "response.data"
    // After receiving data, call Action Creator "getUsers" to create an Action object. 
    // Then dispatch the action object (GET_USER, payload) to Reducer to update the State. 
		dispatch(getUsers(response.data));  // Call Action Creator "getUsers" to create an Action object. 
	} 
  catch(error) {  // Print out errors at console when there is an error response
		console.error("ERROR:", error.response);
	}
};

// REDUCER: 
// It receives an Action object and updates the State
export const reducer = (state = {users: []}, action) => {
// Initialize State "users" as an empty array.
// If Action Type is "GET_USERS", update the State with "users" array in the payload
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.payload,
      }
    default:
      return state;
  }
};