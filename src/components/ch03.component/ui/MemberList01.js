function App() {
    const memberList = [
        { id: "hong123", name: "홍길동", email: "hong123@example.com", joinDate: "2024-06-15", age: 10 },
        { id: "kim456", name: "김철수", email: "kim456@example.com", joinDate: "2024-07-20", age: 15 },
        { id: "park789", name: "박영희", email: "park789@example.com", joinDate: "2024-08-05", age: 20 },
        { id: "lee101", name: "이민수", email: "lee101@example.com", joinDate: "2024-09-12", age: 25 }
    ];

    //나이에 따른 성인여부 현황
    const getComment = (age) => {
        if (age < 18) return '아동';
        if (age < 30) return '성인';
        return '노인';
    };

    const MemberTable = (
        <table border="1">
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>날짜</th>
                    <th>나이</th>
                    <th>성인여부</th>
                </tr>
            </thead>
            <tbody>
                {memberList.map((member) => (
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.joinDate}</td>
                        <td>{member.age}세</td>
                        <td>{getComment(member.age)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div>
            {MemberTable}
        </div>
    );
}

export default App;