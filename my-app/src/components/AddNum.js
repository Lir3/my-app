import { useState, useEffect } from 'react';

const AddNum = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [numAdd, numadd1] = useState(0);

    useEffect(() => { numadd1(num1 + num2); }, [num1, num2]);

    return (
        <>
            <p>足し算</p>
            <input type="number" onChange={(e) => setnum1(Number(e.target.value))} />
            +
            <input type="number" onChange={(e) => setnum2(Number(e.target.value))} />
            {`=${numAdd}`}
        </>
    );
};
export default AddNum;