import React, { useState } from 'react';

const NumberInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const number = parseInt(value, 10);

        setInputValue(value);

        if (isNaN(number)) {
            setOutput('');
        } else if (number < 0) {
            setOutput('Enter a positive value');
        } else if (number % 2 === 0) {
            const nextEvenNumbers = [number + 2, number + 4, number + 6];
            setOutput(`${nextEvenNumbers.join(', ')}`);
        } else {
            const nextOddNumbers = [number + 2, number + 4, number + 6];
            setOutput(`${nextOddNumbers.join(', ')}`);
        }
    };

    return (
        <div className=' flex justify-center items-center bg-slate-800  h-screen ' >
           <div className=' m-5'>
           <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a number"
                className=' p-2 text-2xl mb-4 border border-cyan-400 rounded-md outline-none'
            />
            <div style={{ fontSize: '18px', color:'white' }}>
                {output}
            </div>
           </div>
        </div>
    );
};

export default NumberInput;
