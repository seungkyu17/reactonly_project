function App() {
    const KeyboardEvent = (param, event) => {
        console.log(event);
        console.log(`파라미터 : ${param}`);
        console.log(`이벤트 타입 : ${event.type}`);
        console.log(`이벤트 요소 : ${event.target}`);
        console.log(`아스키 코드 : ${event.keyCode}`);
        console.log(`문자열 : ${event.key}`);
        console.log(`Ctrl 키 누름 여부 : ${event.ctrlKey}`);
        console.log(`Alt 키 누름 여부 : ${event.altKey}`);
        console.log(`Shift 키 누름 여부 : ${event.shiftKey}`);

        if (event.keyCode >= 48 && event.keyCode <= 57) { // 숫자 키가 눌렸을 때 실행되는 코드
            console.log('숫자를 입력하셨습니다.'); //if (event.key >= '0' && event.key <= '9') { - 더 현대적인 방식
        } else {
            console.log('숫자가 아닙니다.');
        }
    }

    return (
        <div className="App">
            <h2>Key 이벤트</h2>
            Key Down :
            <input onKeyDown={(event) => KeyboardEvent('hello', event)}
                onKeyUp={(event) => KeyboardEvent('hello', event)} />
            <br /><br />
        </div>
    );
}

export default App;