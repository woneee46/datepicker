import './App.css'
import {MaskedMaterialTextField} from "./copy-paste-picker.tsx";

function App() {
  return (
    <>
      <MaskedMaterialTextField/>
      {/*<MaskedMaterialTextFieldRange/>*/}
     <div>
       20000826<br/>
       2000.08.27<br/>
       2000-08-28<br/>
       2000/08/29
     </div>
    </>
  )
}

export default App
