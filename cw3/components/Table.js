function Table(props) {
    const studentArray = props.studentArray
    const subjectArray = ["html", "css", "js1", "js2", "php", "cms"]
    console.log(studentArray);
    const getCourseAvg = (course) => {
        let total = 0;
        let persons = 0;
        let bs = {name: "", score: -99999};
        let ws = {name: "", score: 99999};
        
        for (let i = 0 ; i < studentArray.length ; i++) {
            if(studentArray[i][course] !== null) {
                const studentScore = parseInt(studentArray[i][course])
                total += studentScore;
                if(studentScore > bs["score"]) {
                    bs = {name: `${studentArray[i]["fname"]} ${studentArray[i]["lname"]}`, score: studentScore}
                    // console.log(bs)
                }
                if(studentScore < ws["score"]) {
                    ws = {name: `${studentArray[i]["fname"]} ${studentArray[i]["lname"]}`, score: studentScore}
                    // console.log(ws)
                }
                persons++;
            } else {
                console.log("no value")
            }
        }
        if (persons == 0) {
            return "not yet"
        } else {
            // console.log(bs)
            return [
                total / persons,
                bs,
                ws
            ]
            // return {
            //     avg: total / persons,
            //     best: bs,
            //     worst: ws
            // }
            // return total / persons;
        }
    }

    return (
        <>
        <table border="1">
            <thead>
                <tr>
                    <td>name</td>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>JS1</td>
                    <td>JS2</td>
                    <td>PHP</td>
                    <td>CMS</td>
                    <td>average</td>
                </tr>
            </thead>
            <tbody>
                {
                    studentArray.map((student, i) => 
                        <tr key={i}>
                            <td key={i + "name"}>{`${student.fname} ${student.lname}`}</td>
                            <td key={i + "html"}>{student.html}</td>
                            <td key={i + "css"}>{student.css}</td>
                            <td key={i + "js1"}>{student.js1}</td>
                            <td key={i + "js2"}>{student.js2}</td>
                            <td key={i + "php"}>{student.php}</td>
                            <td key={i + "cms"}>{student.cms}</td>
                            <td key={i + "avg"}>{student.calcAvg()}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <table border="1">
            <thead>
                <tr>
                    <td>course name</td>
                    <td>average</td>
                    <td>best score/student</td>
                    <td>worst score/student</td>
                </tr>
            </thead>
            <tbody>
                {
                    subjectArray.map((subject, i) => 
                        <tr key={i}>
                            <td key={i + "subject"}>{subject}</td>
                            <td key={i + "average"}>{getCourseAvg(subject)[0]}</td>
                            <td key={i + "best"}>{getCourseAvg(subject)[1]["name"]}</td>
                            <td key={i + "worst"}>{getCourseAvg(subject)[2]["name"]}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </>
    )
}

export default Table;