import React from 'react';
import './App.css';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as dataSource from './dataSource.json';

export default function App() {
  // function onFoucs(){
  //   console.log("onFoucs");focus={onFoucs} 
  // }
  function onKeyPress(){
    console.log("onKeyPress");
  }
  let data = dataSource.defaultData as any;
  let fields: any = { dataSource: data, value: 'id', text: 'name', child: 'subChild' };
  return (
    <div className="App">
      <DropDownTreeComponent id='dropdowntree' keyPress={onKeyPress}
       fields={fields} width={"350px"} allowFiltering={true} filterBarPlaceholder={"Tree"}/>
    </div>
  );
}