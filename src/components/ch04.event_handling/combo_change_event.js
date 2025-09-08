import React, { useState } from "react";

function App() {
    const [selectedItem, setSelectedItem] = useState("");

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
    };

    const handleItemClick = (e) => {
        alert(e.target.innerText); //클릭된 <li> 의 텍스트를 alert로 표시
    };

    const imageMap = { 빵: "/images/ciabatta_01.png", 음료수: "/images/americano03.png" };

    return (
        <div>
            <h2>Combo Change 이벤트</h2>
            <select onChange={handleChange}>
                <option value="-">메뉴 종류</option>
                <option value="빵">빵</option>
                <option value="음료수">음료수</option>
            </select>

            {selectedItem && imageMap[selectedItem] && (
                <div style={{ marginTop: "20px" }}>
                    <img src={imageMap[selectedItem]} alt={selectedItem} style={{ width: "300px", borderRadius: "10px" }} />
                </div>
            )}

            {selectedItem === "빵" && (
                <ul>
                    <li>식빵</li>
                    <li>크루아상</li>
                    <li>베이글</li>
                </ul>
            )}
            {selectedItem === "음료수" && (
                <ol>
                    <li>커피</li>
                    <li>사이다</li>
                    <li>오렌지 주스</li>
                </ol>
            )}

            <h2>클릭 이벤트 테스트</h2>
            <ul style={{ cursor: "pointer", backgroundColor: "#D2B48C" }}>
                <li onClick={handleItemClick}>식빵</li>
                <li onClick={handleItemClick}>크루아상</li>
                <li onClick={handleItemClick}>베이글</li>
            </ul>
            <ul style={{ cursor: "pointer", backgroundColor: "#32CD32" }}>
                <li onClick={handleItemClick}>커피</li>
                <li onClick={handleItemClick}>사이다</li>
                <li onClick={handleItemClick}>오렌지 주스</li>
            </ul>
        </div>
    );
}

export default App;