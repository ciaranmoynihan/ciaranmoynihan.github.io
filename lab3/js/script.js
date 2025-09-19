document.querySelector("#submit").addEventListener("click",submit);
let totalScore = 0;

function submit() {
    let userAnswer1 = document.querySelector("#q1Text").value;
    if(userAnswer1 == "Wardell"){
        document.querySelector("#q1").style.backgroundColor = "green";
        totalScore += 20;
    }else{
        document.querySelector("#q1").style.backgroundColor = "red";
    }

    let userAnswer2 = document.querySelector("input[name=q1]:checked").value;
    if(userAnswer2=="Warriors"){
        document.querySelector("#q2").style.backgroundColor = "green";
        totalScore += 20;
    }else{
        document.querySelector("#q2").style.backgroundColor = "red";
    }

    let userAnswer3 = document.querySelector("#food").value;
    if(userAnswer3=="Popcorn"){
        document.querySelector("#q3").style.backgroundColor = "green";
        totalScore += 20;
    }else{
        document.querySelector("#q3").style.backgroundColor = "red";
    }

    let userAnswer4 = document.querySelector("#numThrees").value;
    if(userAnswer4==13){
        document.querySelector("#q4").style.backgroundColor = "green";
        totalScore += 20;
    }else{
        document.querySelector("#q4").style.backgroundColor = "red";
    }

    if(document.querySelector("#b").checked&&document.querySelector("#c").checked&&!document.querySelector("#a").checked&&!document.querySelector("#d").checked){
        document.querySelector("#q5").style.backgroundColor = "green";
        totalScore += 20;
    }else{
        document.querySelector("#q5").style.backgroundColor = "red";
    }

    document.querySelector("h2").removeAttribute('hidden');
    document.querySelector("h2").textContent = "Total Score: " + totalScore;
    
    
}












// displayQ3Options();
// function displayQ3Options() {

//     let q3Options = ["font-color","fontColor","color","textColor"];
//     q3Options = _.shuffle(q3Options);

//     for(let i of q3Options) {
//         let inputElement = document.createElement("input");
//         inputElement.type = "checkbox";
//         inputElement.name = "q3";
//         inputElement.value = i;

//         let labelElement = document.createElement("label");
//         labelElement.textContent = i;
//         labelElement.prepend(inputElement);
//         document.querySelector("#q3Options").append(labelElement);
//     }
    

    
// }