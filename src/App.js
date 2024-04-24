import { useState } from 'react'
import Result from './components/Result'
import Keypad from "./components/Keypad"
import './App.css'
function App() {
  const [state, setState] = useState({ result: "" })
  const onClick = button => {
    switch (button) { case "=":
      calculate()
      break
      case "C":
      reset()
      break
      case "CE":
      backspace()
      break
      default:
      setState({ result: state.result + button }) }
  }

  const calculate = () => {
    try {
      let result;
      if (eval(state.result) === Infinity || eval(state.result) === -Infinity) {
        result = "Nie dziel przez 0!";
      } else {
        result = eval(state.result) + "";
      }
      setState({
        result: result
      });
    } catch (e) {
      setState({
        result: "error"
      })
    }
  }

  const reset = () => { setState({
    result: "" })
  }
  const backspace = () => {
    setState({
      result: state.result.slice(0, -1)
    }) }
  return ( <div>
        <div className="srodek"> <h3>Kalkulator</h3>
          <Result result={state.result} /> <Keypad onClick={onClick} />
        </div> </div>
  ) }
export default App