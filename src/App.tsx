import './App.css'
import { InputArea } from './components/InputArea';
import {AppWrapper} from './components/appWrapper';
import { FruitsTable } from './components/fruitsTable';
import { TableWrapper } from './components/tableWrapper';

function App() {
  return (
    <>
      <h1>busra</h1>
      <InputArea/>
      <AppWrapper/>
      <FruitsTable/>
      <TableWrapper/>
    </>
  );
}

export default App
