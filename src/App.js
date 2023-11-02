import logo from './logo.svg';
import './App.css';
import { Message } from './component/message';
import { Header } from './component/header';
import { Change } from './component/change';

function App() {
  return (
    <div className="App">
        <Message/>
        <Header/>
        <Change/>
    </div>
  );
}

export default App;
