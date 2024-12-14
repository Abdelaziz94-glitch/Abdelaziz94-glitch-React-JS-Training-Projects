import './App.css';
import InputForm from './inputs';
import FormInReact from './chatGPTsolution';
import InputForm2 from './inputsUsingUseReducer';


function App() {
  return (
    <div className="App">
      <h1 style={{color:"green",textTransform:"capitalize",margin:"30px auto"}}>Form appliocation</h1>
      <h1 style={{color:"green",fontSize:"16px",border:"1px dashed green",textTransform:"capitalize",margin:"30px auto"}}>first solution using the useState hook</h1>
      <InputForm />
      <h1 style={{color:"green",fontSize:"16px",border:"1px dashed green",textTransform:"capitalize",margin:"30px auto"}}>second solution using the useReducer hook</h1>
      <InputForm2 />
      <h1 style={{color:"green",fontSize:"16px",border:"1px dashed green",textTransform:"capitalize",margin:"30px auto"}}>third solution using the ChatGPT</h1>
      {/* ChatGPT Solution */}
      <FormInReact />
    </div>
  );
}

export default App;
