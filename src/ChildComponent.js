// ChildComponent.js
import React, { useState } from 'react';

const ChildComponent = ({ name }) => {
    const [age, setAge] = useState(0);
    
    return (
        <div className="child-component">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    );
};

export default ChildComponent;