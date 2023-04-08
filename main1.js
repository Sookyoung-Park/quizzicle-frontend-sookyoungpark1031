//Start Section
let start = document.querySelector(".start");
let startbtn=document.getElementById('start-text');

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
const optionsList = document.querySelectorAll('#optionList');
const optionh3 = document.querySelectorAll('#optionList h3');
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let button=document.querySelector('#optionList button')

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

let resultKey=selectedLabels.join("");
let resultImage = results["AAAAAA"].image;
let resultDescription = results["AAAAAA"].description;

let selectedOption = null;

optionsList.forEach(option => {
    option.addEventListener('click', event => {
        const clickedOption = event.target;
        if (selectedOption !== null) {
        selectedOption.classList.remove('selected');
        }
        clickedOption.classList.add('selected');
        selectedOption = clickedOption;
    });
});


function resetOptions() {
    optionsList.forEach(option => {
    option.querySelector('.choice_que').classList.remove('selected');
    });
}


function updateKey(){
    if(selectedLabels.length===6){
        resultKey = selectedLabels.join("");
    }
}

document.getElementById("next_question").addEventListener("click", () => {
    const selectedCount = selectedLabels.filter((label) => label).length;
    resetOptions();
});


start.addEventListener("click", () => {
    start.style.display = "none";
});



let loadData = () => {
    questionText.innerText = quizdata[index].question;
    document.getElementById("option-image1").src = quizdata[index].options[0].image;
    document.getElementById("option-image2").src = quizdata[index].options[1].image;
    option1.innerText = quizdata[index].options[0].text;
    option2.innerText = quizdata[index].options[1].text;
};

loadData();
resetOptions();

startbtn.addEventListener("click", () => {
    quiz.style.display = "block";

    loadData();

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })
});


choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {  
        selectedLabel = quizdata[index].options[choiceNo].label;
        selectedLabels[index] = selectedLabel;

        console.log(selectedLabels[index]);
        console.log(selectedLabels);

        choices.classList.add("active");

        choice_que.forEach((option) => {
            option.classList.remove("active", "disabled");
        });
    })
});


document.getElementById("next_question").addEventListener("click", () => {
    const selectedCount = selectedLabels.filter((label) => label).length;
    
    if((index+1)!==selectedCount){
        alert('Please choose one!');
        
        selectedLabels[index] = null;
        choice_que.forEach((option) => {
        option.classList.remove("active", "disabled");
        });

        index--;
        return;
    }
    
});


next_question.addEventListener("click", () => {

    if (index !== quizdata.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active","selected");
        })

        loadData();

    }
    else {
        index = 0;

        clearInterval(interval);
        quiz.style.display = "none";

        updateKey();

        resultImage = results[resultKey].image;
        resultDescription = results[resultKey].description;
        
        document.getElementById("description").textContent += resultDescription;
        document.getElementById("result-image").src = resultImage;  


        result.style.display = "block";
    }

    for (i = 0; i <= 1; i++) {
        choice_que[i].classList.remove("disabled");
    }
})