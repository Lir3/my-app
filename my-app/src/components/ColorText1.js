const ColorText1 = (props) => {
    // props から分割代入（変数名を属性名にして取得）
    const { color, fontSize, text } = props;
    const styles = {
        color,     // color: color と同じこと
        fontSize,  // fontSize: fontSize と同じこと
    };

    return (
        <>
            <p style={styles}>{text}</p>
        </>
    );
};

export default ColorText1;
