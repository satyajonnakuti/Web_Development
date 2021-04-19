var username;
var rollnum;
var score = 0;
var attempt=0;
var displayname;
function saveLogin()
 { 
    username = document.getElementById("username").value;
    rollnum = document.getElementById("rollnum").value;
    localStorage.setItem("username", username)
    localStorage.setItem("rollnum", rollnum)
    localStorage.setItem("score", score)
    window.location.href = "q1.html"

}
function nextPage(qid, name, type, page)
{
    if(qid == "q1"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if(ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }

    if(type == "radio" && qid == "q2"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)
            }
        }
    }

    if(type == "radio" && qid == "q3"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q4"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q5"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q6"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q7"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q8"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }
    if(type == "radio" && qid == "q9"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }
    if(type == "radio" && qid == "q10"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked){attempt++}
            if (ql[i].checked && ql[i].value == '100')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }

    window.location.href = page;
}

function getScore(){
    return localStorage.getItem("score", score)
}

function setScore(score){
    localStorage.setItem("score", score)
}

displayname = localStorage.getItem("username")
displayroll = localStorage.getItem("rollnum")
displayscore = localStorage.getItem("score")
console.log(displayname, score, displayroll)
document.getElementById("setUname").innerHTML = displayname + " - "+displayroll
document.getElementById("result").innerHTML="Score: "+ displayscore +"/10"
document.getElementById("correct").innerHTML = "Correct: " + displayscore
document.getElementById("wrong").innerHTML = "Wrong: " + (10-displayscore)
// document.getElementById("attempted").innerHTML="Attempted: "+ attempt
// document.getElementById("result").innerHTML = "Score: "+displayscore+"/3"