import { useState } from 'react';

import Dashboard from './dashboard';
import AddDataForm from './form';

function App() {
  const [data, setData] = useState([
    {id: "1", name: "Raja"},
    {id: "2", name: "Vani"}
  ]);
  
  const addData = (newRow) => {
    if (data.filter(r => r.id === newRow.id).length > 0) {
      return;
    }
    setData([...data, newRow]); 
  };

  return (
    <div className="App">
      <AddDataForm onSubmit={addData}/>
      <Dashboard data={data}/>
    </div>
  );
}

export default App;
