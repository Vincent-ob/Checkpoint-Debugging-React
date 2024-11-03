// App.js
import './App.css';
import ChildComponent from './ChildComponent';

const App = () => (
    <div className="container">
        <h1>Sample React App</h1>
        <ChildComponent name="John" />
    </div>
);

export default App;