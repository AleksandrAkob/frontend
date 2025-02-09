import {useState} from 'react'
import './App.css';
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesList from '../employees-list/EmployeesList';




function App() {

  const data = [
    {name: 'John C.', salary: '800', increase: true, id: 1},
    {name: 'Alex M.', salary: '3000', increase: false, id: 2},
    {name: 'Carl W.', salary: '5000', increase: true, id: 3}
  ]


  return (
    <div className="app">
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter/>
      </div>
      
      <EmployeesList data={data} />
 
      
    </div>
  );
}

export default App;





