//react 라이브러리에서 useState라는 hooks 를 좀 사용하겠습니다.
import { useState } from "react";

function App() {
    //const [스테이트 이름, 셋터 메소드 이름] = useState('기본값');
    const [color, setColor] = useState('red');
    const [name, setName] = useState('카푸치노');
    const [image, setImage] = useState('cappuccino02.png');

    const ClickEvent = () => {
        console.log(`현재 색상 : ${color}`, `현재 이름 : ${name}`, `현재 이미지 : ${image}`);
        if (color === 'red', name === '카푸치노', image === 'cappuccino02.png') {
            setColor('blue');
            setName('크루아상');
            setImage('croissant_08.png');
        } else {
            setColor('red');
            setName('카푸치노');
            setImage('cappuccino02.png');
        }
        // console.log(`현재 이름 : ${name}`);
        // if (name === '카푸치노') {
        //     setName('크루아상');
        // } else {
        //     setName('카푸치노');
        // }

        // console.log(`현재 이미지 : ${image}`);
        // if (image === 'cappuccino02.png') {
        //     setImage('croissant_08.png');
        // } else {
        //     setImage('cappuccino02.png');
        // }
    }

    return (
        <div className="App">
            <h1>My favoriter color is {color}!</h1>

            {/* 외부 {} 기호는 JSX 표현식에 사용하는 중괄호 */}
            {/* 내부 {} 기호는 자바 스크립트 객체 표현시 사용하는 중괄호 */}
            <span style={{ color: color, fontWeight: 'bold' }}>글자 색상</span>
            <br /><br />
            <button type="button" onClick={ClickEvent}>
                클릭시 이미지 변경 및 {color} 색상으로 변경
            </button>
            <br /><br />
            <h4>{name}</h4>
            <img src={`/images/${image}`} alt={name} width="210" height="210" />
        </div>
    );
}

export default App;