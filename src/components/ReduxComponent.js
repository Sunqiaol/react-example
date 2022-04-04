/*==================================================
ReduxComponent.js
This component is used to demonstrate Redux, Redux Store, and Redux Thunk.
It performs search for users using API: https://jsonplaceholder.typicode.com/users

Functionalities:
- Use Redux Thunk to retrieve data by sending asynchronous HTTP requests to RESTful endpoints (APIs)
- Dispatch an Action with retrieved data to update UI rendering.

Practice:
- Change API endpoint (variable "linkToAPI") to 'https://jsonplaceholder.typicode.com/posts' 
- Modify React element to display each post's "title" and "body" information
================================================== */
import { Component } from 'react';
import { connect } from 'react-redux'  // Import "connect" function from Redux.
import { getUsersThunk } from '../store/getUsers'  // Import Thunk "getUsersThunk" from the Store.

class ReduxComponent extends Component {
  componentDidMount() {
    // Call Thunk to get data from remote website
    this.props.getUsersThunk();  // Get Thunk from props (passing from the Store)
  }  

  render() {  // Parse each element in the user JSON array returned from API call
    // Get Redux State from props
    let users = this.props.users;
    return (
      <div className="container">
        { users.map( (user) => {  // Extract "id", "name", and "email" properties of each user JSON array element
            return (
              <div key={user.id}>
                <h3>Name {user.id}: {user.name}</h3>
                <h4>Email: {user.email}</h4>
                <p>------------------------------</p> 
              </div>
            )
          })
        }
      </div>
    );
  }
};

// The following 2 parts construct the "connect" function used by ReduxComponent to connect to Redux Store.  
// 1. Passing Redux Thunk (action creator) as props to the "connect" function
// The "mapDispatch" is to call the specific Thunk to dispatch its action.
function mapDispatch(dispatch) {
  return { 
    getUsersThunk: () => dispatch(getUsersThunk())  // Dispatch the Action "getUsersThunk" to get data from remote website.
  }
}
// 2. Passing Redux State as props to the "connect" function
// The "mapState" is called when the Store State changes. 
// It returns an object of "users" data that ReduxComponent needs.
function mapState(state) {
  return {  // Get the retrieved user data from the State
    users: state.users
  }
}
// ReduxComponent uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(ReduxComponent)




