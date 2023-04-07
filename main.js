//Start Section
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");

//Get All 'H4' From Quiz Section (quizdata)
let choice_que = document.querySelectorAll(".choice_que");

let index = 0;
let interval = 0;

//total points
let selectedLabels=[];

//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
});

let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = quizdata[index].question;
    option1.innerText = quizdata[index].options[0].text;
    option2.innerText = quizdata[index].options[1].text;
};

loadData();

//what happen when 'Continue' Button
continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    guide.style.display = "none";

    loadData();

    //remove All Active Classes When Continue Button Will Click
    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })
});


choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        // 선택한 옵션의 라벨값을 변수에 저장        
        selectedLabel = quizdata[index].options[choiceNo].label;
        selectedLabels[index] = selectedLabel;

        console.log(selectedLabels[index]);
        console.log(selectedLabels);

        choices.classList.add("active");

        // 모든 선택지를 기본값으로 초기화
        choice_que.forEach((option) => {
            option.classList.remove("active", "disabled");
        });
    })
});


// 선택하지 않았을 때 처리
document.getElementById("next_question").addEventListener("click", () => {
    const selectedCount = selectedLabels.filter((label) => label).length;
    
    if((index+1)!==selectedCount){
        alert('damm');
        
        // 이전 문제의 선택지를 초기화
        selectedLabels[index] = null;
        choice_que.forEach((option) => {
        option.classList.remove("active", "disabled");
        });

        // 이전 문제로 돌아가서 다시 푸는 처리
        index--;

        return;
    }
});


////what happen when 'Next' Button Will Click
next_question.addEventListener("click", () => {
    //if index is less then quizdata.length
    if (index !== quizdata.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        loadData();

    }
    else {
        index = 0;
        //when Quiz Question Complete Display Result Section
        clearInterval(interval);
        quiz.style.display = "none";
        description.innerHTML = `You got`+ selectedLabels;
        result.style.display = "block";
    }

    for (i = 0; i <= 1; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

