import React from 'react';
import './App.css';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';

import * as dataSource from './dataSource.json';

export default function App() {
  function btnClick(){
    dropdownObj.showPopup();
  }
  let dropdownObj: any;
  let data = dataSource.localData as any;
  let fields: any = { dataSource: data, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' };
  let footer = "<span>*Above items available</span>";
  return (
    <div className="App">
      <div className="addContainer">
          <button onClick={btnClick}>show popup</button>
      </div>
      <DropDownTreeComponent ref={(scope) => { dropdownObj = scope; }} footerTemplate={footer}
       id='dropdowntree' fields={fields} width={"350px"}/>
    </div>
  );
}