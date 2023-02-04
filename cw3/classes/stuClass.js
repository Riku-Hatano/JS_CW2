class stuClass {
    constructor(fname, lname, html = null, css = null, js1 = null, js2 = null, php = null, cms = null) {
        this.fname = fname,
        this.lname = lname,
        this.html = html,
        this.css = css,
        this.js1 = js1, 
        this.js2 = js2,
        this.php = php,
        this.cms = cms
    }
    calcAvg() {
        let total = 0;
        let person = 0;
        let courses = [
            this.html,
            this.css,
            this.js1,
            this.js2,
            this.php,
            this.cms
        ];
        courses.forEach((score) => {
            if(score !== null) {
                total += parseInt(score)
                person++
            }
        })
        console.log(`total: ${total} person: ${person} avg: ${total / person}`)
        return total / person
    }
}

export default stuClass;