import './App.css';
// import FolderComponent from './components/FolderComponent';
// import TextAreaComponent from './components/TextAreaComponent';
// import FormComponent from './components/FormComponent';
import ApiDataComponent from './components/ApiDataComponent';
// import SearchComponent from './components/SearchComponent';

function App() {  // Need to replace the component with a specific one from the list below
  return (
    <div className="App">
      <ApiDataComponent />
    </div>
  );
}
// <FolderComponent inputData="This is props.data passing to component." />
// <TextAreaComponent userName="MARY" />
// <FormComponent />
// <ApiDataComponent />
// <SearchComponent />

export default App;