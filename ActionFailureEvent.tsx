import React from 'react';
import './App.css';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';

export default function App() {
  function btnClick(){
    dropdownObj.showPopup();
  }
  function fail(){
    console.log("failed");
  }
  let dropdownObj: any;
  let data = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind1.svc',
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
});
let query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
  let query1 = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
  let fields: any = {dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
    child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
};
  return (
    <div className="App">
      <div className="addContainer">
          <button onClick={btnClick}>show popup</button>
      </div>
      <DropDownTreeComponent ref={(scope) => { dropdownObj = scope; }} actionFailure={fail}
       id='dropdowntree' fields={fields} width={"350px"}/>
    </div>
  );
}