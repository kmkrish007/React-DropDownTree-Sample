import React from 'react';
import './App.css';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';

import * as dataSource from './dataSource.json';

export default function App() {
  function btnClick(){
    dropdownObj.hidePopup();
  }
  function onClose() {
    console.log("onClose");
  }
  let dropdownObj: any;
  let data = dataSource.defaultData as any;
  let fields: any = { dataSource: data, value: 'id', text: 'name', child: 'subChild' };
  return (
    <div className="App">
      <div className="addContainer">
          <button onClick={btnClick}>hide popup</button>
      </div>
      <DropDownTreeComponent ref={(scope) => { dropdownObj = scope; }} close={onClose}
       id='dropdowntree' fields={fields} showCheckBox={true} width={"350px"}/>
    </div>
  );
}