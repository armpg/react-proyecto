import './App.css';
import { BrowserRouter, Router } from 'react-router';
import { Route } from './components/Router';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Router />
            </BrowserRouter>
        </div>
    );
}
export default App;