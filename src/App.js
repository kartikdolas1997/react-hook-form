import React from "react";
import "./styles/App.scss";
import {useForm} from 'react-hook-form'
import BasicForm from './Components/BasicForm'
import FieldArray from "./Components/FieldArray";
import Validations from "./Components/Validations";
function App() {

  return(
    <div>
        <BasicForm></BasicForm>
        <FieldArray></FieldArray>
        <Validations></Validations>
    </div>
  );
}

export default App;
