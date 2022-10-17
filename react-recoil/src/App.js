import Button from 'react-bootstrap/Button';
import { useRecoilState } from "recoil";
import textState from "./atom.js";

function App() {

  const [text, setText] = useRecoilState(textState);
  
  const handleClick = () => {
    setText(text + 1);
  }

  return (
    <div className="App">
      <h1>Recoil Test</h1>
      Atom : {text}
      <Button variant='primary' onClick={handleClick}>Button</Button>
    </div>
  );
}

export default App;
