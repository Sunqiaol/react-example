/*==================================================
FolderComponent.js
It uses a class component instead a function component because it is using state.

Functionalities:
- Display a folder list
- Display props value passing to component
- Provide a button to toggle display of folder list
- Demonstrate the use of conditional rendering

Practice:
In Add.js, add a second instance of FolderComponent with inputData="HELLO WORLD" so that you have two sets of folder list.
================================================== */
import { Component } from 'react'

class FolderComponent extends Component {
    constructor(props) {  // Set initial state to show folder list
      super(props);
      this.state = {  // Set showList to true
        showList: true 
      }
    }
  
    handleToggleClick = () => {  // Method to toggle display of folder list based on button click
      this.setState(state => {
        return {showList: !state.showList}
      });
    }
  
    render() {  // Method to render React element
      if (this.state.showList) {  // Conditional rendering
        return (  
          <div className="folder-container">
            <h1>Folder List</h1>
            <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>
            <ul>
              <li>Folder 1</li>
              <li>Folder 2</li>
              <li>Folder 3</li>
              <li>Input props Data: {this.props.inputData}</li>
            </ul>
          </div>  
        );
      } 
      else {
        return (  
          <div className="folder-container">
            <h1>Folder List</h1>
            <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>
          </div>  
        );
      }
    }
  }

export default FolderComponent; 