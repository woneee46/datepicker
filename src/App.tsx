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
      <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
        <tr>
          <th>Button Display</th>
          <th>showButtonAfterInput = true</th>
          <th>showButtonAfterInput = false</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>input</td>
          <td><ClearableTextField buttonDisplay="input" /></td>
          <td><ClearableTextField buttonDisplay="input" showButtonAfterInput={false} /></td>
        </tr>
        <tr>
          <td>always</td>
          <td><ClearableTextField buttonDisplay="always" /></td>
          <td><ClearableTextField buttonDisplay="always" showButtonAfterInput={false} /></td>
        </tr>
        <tr>
          <td>focus</td>
          <td><ClearableTextField buttonDisplay="focus" /></td>
          <td><ClearableTextField buttonDisplay="focus" showButtonAfterInput={false} /></td>
        </tr>
        <tr>
          <td>hover</td>
          <td><ClearableTextField buttonDisplay="hover" /></td>
          <td><ClearableTextField buttonDisplay="hover" showButtonAfterInput={false} /></td>
        </tr>
        </tbody>
      </table>

    </>
  )
}

export default App
