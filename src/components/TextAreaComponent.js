/*==================================================
TextAreaComponent.js
It uses a function component instead a class component because it is not using state.

Functionalities:
- Display UI elements such as heading, textarea, and button

Practice:
Change backgroundColor of "Title" textarea to yellow.
================================================== */
// Import "material-ui" for building UI with React components
import TextField from '@material-ui/core/TextField';  

const TextAreaComponent = (props) => {
  return (
    <div style={{width: 400, backgroundColor: 'white'}}>
      <h1>Message from {props.userName}</h1>
      <TextField
        label="Title"
        style={{ margin: 8, backgroundColor: 'lightblue' }}
        placeholder="Enter title here"
        fullWidth
        margin="normal"          
      />
      <TextField
        style={{ margin: 8, backgroundColor: 'lightblue' }}          
        label="Note"
        placeholder="Enter note here"
        multiline
        fullWidth
        rows={5}
        margin="normal"
      />
      <button>Submit</button>
    </div>
  )
}

export default TextAreaComponent;