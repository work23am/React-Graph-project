import React, { useState } from 'react';

const Form = ({ addData }) => {
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = {
            label,
            value: parseInt(value),
        };
        addData(newData);
        setLabel('');
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name/Label:
                    <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Value:
                    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Add Data</button>
        </form>
    );
};

export default Form;
