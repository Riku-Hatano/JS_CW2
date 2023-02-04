import stuClass from '../classes/stuClass';
import Table from './Table'
import { useState } from "react";

const initialState = {
    fname: '',
    lname: '',
    html: null,
    css: null,
    js1: null,
    js2: null,
    php: null,
    cms: null
}

function Form() {
    const [student, setStudent] = useState(initialState)
    const ChangeStudent = (e) => {
        const changedKey = e.target.name
        setStudent(prevState => {
            return {
                ...prevState,
                [changedKey]: e.target.value
            }
        })
    }

    const [studentArray, setStudentArray] = useState([])
    const ChangeStudentArray = () => {
        if (student.fname !== "" && student.lname !== "") {
            const newObj = new stuClass(student.fname, student.lname, student.html, student.css, student.js1, student.js2, student.php, student.cms)
            setStudent(initialState);
            setStudentArray(prevArray => {
                return (
                    [...prevArray, newObj]
                )
            })
        }
    }

    return (
        <>
        <h1>first name: {student.fname}</h1>
        <h1>last name: {student.lname}</h1>
        <h1>html: {student.html}</h1>
        <form>
            <input value={student.fname} placeholder="fname" name="fname" onChange={ChangeStudent}></input>
            <input value={student.lname} placeholder="lname" name="lname" onChange={ChangeStudent}></input>
            <input value={student.html} placeholder="HTML" name="html" type="number" onChange={ChangeStudent}></input>
            <input value={student.css} placeholder="CSS" name="css" type="number" onChange={ChangeStudent}></input>
            <input value={student.js1} placeholder="JS1" name="js1" type="number" onChange={ChangeStudent}></input>
            <input value={student.js2} placeholder="JS2" name="js2" type="number" onChange={ChangeStudent}></input>
            <input value={student.php} placeholder="PHP" name="php" type="number" onChange={ChangeStudent}></input>
            <input value={student.cms} placeholder="CMS" name="cms" type="number" onChange={ChangeStudent}></input>
            <button type="button" onClick={ChangeStudentArray}>submit</button>
        </form>
        {(studentArray.length > 0)? <Table studentArray={studentArray}></Table> : console.log("nothing")}
        </>
    )
}

export default Form