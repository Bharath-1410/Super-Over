let csk = document.getElementById("csk").getElementsByTagName("div")
let csk_score = 0
let mi = document.getElementById("mi").getElementsByTagName("div")
let mi_score = 0
let possibleScores = [1,2,3,4,5,6,"W"]
let current_idx = 0
let CSK_wickets = 0
let MI_wickets = 0
let dot = document.getElementsByClassName("dot");
let batting = document.querySelectorAll(".events button")[0]
function SuperOver() {
    let score = Math.ceil(Math.random() * 7)-1;
    if (current_idx<12){
        dot[current_idx].innerHTML = possibleScores[score]
        if (current_idx<6 && possibleScores[score]!="W"){
            csk_score+=possibleScores[score]
        }else if(possibleScores[score]==="W" && current_idx<6){
            CSK_wickets+=1
            if(CSK_wickets==2){
                current_idx=5
                batting.innerHTML = "RCB Batting"
            }
        }
        else if(current_idx>=6 && possibleScores[score]!="W"){
            batting.innerHTML = "RCB Batting"
            mi_score+=possibleScores[score]
        }
        else if(current_idx>=6 && possibleScores[score]==="W"){
            batting.innerHTML = "RCB Batting"
            MI_wickets+=1
            if(MI_wickets==2){
                current_idx=12
            }
        }
        if (mi_score>csk_score){
            current_idx = 12
        }
        current_idx+=1
    }else{
        if (csk_score>mi_score){
            document.getElementById("Result").innerText = "CSK Won The Match"
        }else if(csk_score==mi_score){
            document.getElementById("Result").innerText = "Its Draw Match"
        }else{
            document.getElementById("Result").innerText = "RCB Won The Match"
        }
    }
    document.getElementById("scores").innerText = `${csk_score} - ${mi_score}`
}
