const quizData=[{
    question:"Q1: what is full form of html?",
    a:"hyper text markup language",
    b:"hello to main talk",
    c:"hyper texture makeup language",
    d:"hwllo to model language",
    ans:"ans1"
},
{
    question:"Q2: what is full form of css?",
    a:"card syle sheet",
    b:"casper card style sheet",
    c:"casper cading style sheet",
    d:"none of the these",
    ans:"ans3"
},
{
    question:"Q3: what is html used for?",
    a:"makin food",
    b:"making cars",
    c:"making web pages",
    d:"making blogs",
    ans:"ans3"
},
{
    question:"Q4: what are types of heading tag?",
    a:"h1,h2,h3",
    b:"h1,h2",
    c:"h1,h6,h7,h8",
    d:"h1,h2,h3,h4,h5,h6",
    ans:"ans4"
},
{
    question:"Q5: what is css used for?",
    a:"sheet making",
    b:"web page styling",
    c:"cars designing",
    d:"none of the above",
    ans:"ans2"
}]

const question=document.querySelector(".questions")
const option1=document.querySelector("#option1")
const option2=document.querySelector("#option2")
const option3=document.querySelector("#option3")
const option4=document.querySelector("#option4")
const submit=document.querySelector("#submit")
const answers=document.querySelectorAll(".answers")
const showscore=document.querySelector("#showscore")

let count=0;
const loadQuestion=()=>{
    const questionList=quizData[count];
question.innerText=questionList.question;
option1.innerText=questionList.a;
option2.innerText=questionList.b;
option3.innerText=questionList.c;
option4.innerText=questionList.d;
}
let score=0;

loadQuestion();

const getcheckans=()=>{
  let answer;
answers.forEach((item)=>{
    if(item.checked){
        answer=item.id;
    }
})
return answer;
}

const deselectall=()=>{
    answers.forEach((item)=>{
        item.checked=false;
    })
}

submit.addEventListener("click",()=>{
    const checkans=getcheckans();
    if(checkans==quizData[count].ans){
        score++;
    };


    count++;
    deselectall();
    if(count<quizData.length){
        loadQuestion();
    }
    else{
      showscore.innerHTML=`
      <h3>your score is:${score}/${quizData.length}.👍👩‍💻 </h3>
      <button class="btn" onclick="location.reload()"> playagain </button>
      `
      showscore.classList.remove("showans")
    }
})


