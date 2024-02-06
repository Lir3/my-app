// 引数の定義で分割代入（変数名を属性名にして取得, children も使える）
const ColorText2 = ({ color, fontSize, children }) => {
    const styles = {
        color,     // color: color と同じこと
        fontSize,  // fontSize: fontSize と同じこと
    };

    return (
        <>
            <p style={styles}>{children}</p>
        </>
    );
};

export default ColorText2;
