import React, { useState, useEffect } from 'react';

const AddText = ({ text }) => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [textAdd, setTextAdd] = useState('');

    useEffect(() => {
        setTextAdd(text1 + text2);
    }, [text1, text2]);

    return (
        <>
            <p>文字連結</p>
            <input type="text" onChange={(e) => setText1(e.target.value)} />
            +
            <input type="text" onChange={(e) => setText2(e.target.value)} />
            <p>{textAdd}</p>
        </>
    );
};

export default AddText;
