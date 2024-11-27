import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import FakeApiMuiCrud from './FakeApiCRUD/FakeApiMuiCrud';
import FakeApi from './FakeAPI/FakeApi';
import AxiosData from './Axios/AxiosData';
import JsonServerApi from './JsonServer/JsonServerApi';
// imoort {Button} from '@material-ui/core'

function App() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false)
  const clickBtn = () => {
    alert("function called")
    setColor("secondary")
    setDisableBtn(true)
  }
  return (
    <>
    <h2>Ronaksinh</h2>
    {/* <FakeApiMuiCrud /> */}
    {/* <FakeApi /> */}
    {/* <AxiosData /> */}
    <JsonServerApi />

    {/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */}
      {/* <h1>React Web Page</h1>
      <button>Click Me</button><br /><br />
      <Button
        color={color}
        disabled={disableBtn}
        variant='contained'
        onClick={clickBtn}
        startIcon={<Delete />}
      >MUI Button</Button> */}
    </>
  );
}

export default App;
