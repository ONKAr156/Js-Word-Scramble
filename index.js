const displayWord = document.querySelector(".word")
const displayHint = document.querySelector(".hint span")
const displayTime = document.querySelector(".time b")
const refreshBtn = document.querySelector(".refresh")
const checkBtn = document.querySelector(".check")
const inputData = document.querySelector("input")
let correctWord, timer ;
const initTimer = maxTime=>{
    clearInterval(timer)
    timer = setInterval(()=>{
        if (maxTime >0) {
            maxTime--
          return  displayTime.innerHTML = maxTime
        }
        clearInterval(timer)
        alert(`Time Up !!   "${correctWord.toLowerCase()}" was the right anser`)
        startGame()

    },1000)
}

const  startGame = ()=>{
    initTimer(30)
    // for random word generation
    let randomObj = data[Math.floor(Math.random() * data.length)]
    let wordsArray = randomObj.word.split("")
    //random number and shuffled values
    for (let i = wordsArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
    }
    displayWord.innerHTML= wordsArray.join("")
    displayHint.innerHTML= randomObj.hint
    correctWord = randomObj.word.toLowerCase()
    inputData.innerHTML="";
    inputData.setAttribute("maxlength", correctWord.length)
    console.log(wordsArray, randomObj.word);
}
startGame()

const checkStat =()=>{
let getData = inputData.value.toLocaleLowerCase()
// console.log(getData);
if (!getData) {
    return alert("please enter a word")
}
if (getData !== correctWord ) {
 return  alert(` "${getData}": didn't match !!`) 
}else{
    alert(` Congrats !!! its Right Answer`)
}
// when user has entered right answer  restart the game
startGame()
}
refreshBtn.addEventListener("click", startGame) 
checkBtn.addEventListener("click", checkStat) 