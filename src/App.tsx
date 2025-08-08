import './App.css'
import {MaskedMaterialTextField, MaskedMaterialTextFieldRange} from "./copy-paste-picker.tsx";
import ClearableTextField from "./clearable-text-field.tsx";

function App() {
  return (
    <>
      <MaskedMaterialTextField/>
      <MaskedMaterialTextFieldRange/>
     <div>
       20000826<br/>
       2000.08.27<br/>
       2000-08-28<br/>
     </div>
      <br/>
      <br/>
      <ClearableTextField displayButton="hover" />
      <ClearableTextField displayButton="input" />
    </>
  )
}

export default App
