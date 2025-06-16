
const Resurt = ({onRestart,appScore}) => {
    return (
        <div className="result">
            <h3>끝났습니다</h3>
            <p>SCORE : {appScore}점</p>
            <button onClick={onRestart}>다시시작</button>
            
        </div>
    );
};

export default Resurt;