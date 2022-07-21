document.addEventListener("DOMContentLoaded", ()=>{    // it will give you ablity to write css before you write app.js or you can say web browser trigger HTML element more beter way to faster acess  
      // make an array with card and image 
      const getArray = ()=>[   
      {cardName: "A", imageSrc: "./images/card_A.webp"},
      {cardName: "A", imageSrc: "./images/card_A.webp"},
      {cardName: "king", imageSrc: "./images/card_K.webp"},
      {cardName: "king", imageSrc: "./images/card_K.webp"},
      {cardName: "queen", imageSrc: "./images/card_Q.webp"},
      {cardName: "queen", imageSrc: "./images/card_Q.webp"},
      {cardName: "Joker", imageSrc: "./images/card_J.webp"}, 
      {cardName: "Joker", imageSrc: "./images/card_J.webp"},
      {cardName: "J", imageSrc: "./images/card_J1.webp"}, 
      {cardName: "J", imageSrc: "./images/card_J1.webp"}   
      ]
      // console.log(getArray) //worked
      // lets grab few things from html
      const grabGameGrid = document.querySelector(".gameGrid")
      /* const grabAttemptsHolder = document.querySelector(".attemptsHolder")
         const grabFoundHolder = document.querySelector("#foundHolder") */ // for only player game
      const grabPlayerOneAttemptsHolder = document.querySelector("#playerOneAttemptsHolder")
      const grabPlayerOneFoundHolder = document.querySelector("#playerOneFoundHolder")
      const grabPlayerTwoAttemptsHolder = document.querySelector("#playerTwoAttemptsHolder")
      const grabPlayerTwoFoundHolder = document.querySelector("#playerTwoFoundHolder")

      var chosenCardId =[] // we donot know which image id going to be chosen so lefted empty
      var chosenCard = []  // we donot know which image going to be chosen so lefted empty
      const cardsInGame = 5   // total 5 pairs of image  
      /* var attempts = 0  // to start for chose image from 0
       var found = 0 // to start how many images found from 0
       grabAttemptsHolder.textContent = attempts  
       grabFoundHolder.textContent = found */ // for only player game
      playerOneTurn = true
      var playerOne = {attempts: 0, found:  0} //{}because they are object
      var playerTwo = {attempts: 0, found:  0}
      grabPlayerOneAttemptsHolder.textContent = playerOne.attempts
      grabPlayerOneFoundHolder.textContent = playerOne.found
      grabPlayerTwoAttemptsHolder.textContent = playerTwo.attempts
      grabPlayerTwoFoundHolder.textContent = playerTwo.found
         // use sort method to randamize array
      const randamize = () => {
         const cardArray = getArray()
         // console.log(cardArray) // worked
         cardArray.sort(()=> Math.random() -0.5)
         // console.log(cardArray)  // worked
         return cardArray // if not return it will undefind
      }
         //  randamize() // need that untill you write next function
         //  card generator function
         const cardGenerator = () => {
         const cardArray = randamize()
         console.log(cardArray)
         // cardArray.forEach((item)=> // not needed after made chages
         
         function board (){
            for(let i=0; i<cardArray.length; i++){
               console.log(i)
               const card = document.createElement("div")
               const back = document.createElement("img")
               const front = document.createElement("img")
               back.setAttribute("name", cardArray[i].cardName )
               card.setAttribute("name", cardArray[i].cardName + "div") //geting back when you do surch card that why need to set up this way
               card.classList = "card" // made class of each
               front.classList = "front"
               back.classList = "back"
               grabGameGrid.appendChild(card)
               card.appendChild(back)
               card.appendChild(front)
               back.src = cardArray[i].imageSrc // back image attached it
               // grab another image for font and attached with 
               front.setAttribute("src","images/Rainbow_background.webp")// in css you have to write ( .card{position: relative; transform-style: prserve-3d;transsition: all 2s ease; transform: rotateY(180deg) } and .face, .front{ position: absolute;  backface-visibility: hidden}) to set image top of back image and
            
               //   front.addEventListener("click", "Flip")  // not needed after made chages 
               card.addEventListener("click", (e) =>{ //event been triger with (e)
                  card.classList.toggle("toggleCard") //use for animation
                  card.classList.add("flipCard") // easy way to ask browse to slect the card what we going to compair
                  checkCards(e)
                  // console.log(e)
               })
            }
         }
         board()
   }      
      const checkCards = (e) => {
            //  console.log(e) // worked
            chosenCard = document.querySelectorAll(".flipCard")
              //chosencard from ref line 22 
            //  console.log(chosenCard)  //worked in emapty array grab all [div.card.toggleCard.flipCard]
            if(chosenCard.length===2){
                  // console.log(chosenCard[1]) //when we click second card then we grab name and src both
                  checkForMatch()
                  // grabFoundHolder.textContent = found
                  // grabAttemptsHolder.textContent = attempts 
                  grabPlayerOneAttemptsHolder.textContent = playerOne.attempts
                  grabPlayerOneFoundHolder.textContent = playerOne.found
                  grabPlayerTwoAttemptsHolder.textContent = playerTwo.attempts
                  grabPlayerTwoFoundHolder.textContent = playerTwo.found 
                  playerOneTurn = !playerOneTurn // that gives playerOne and plyerTwo turn by turn
               }
         }      
         function checkForMatch(){
               // attempts++; //do if state    will increase after every two card chosen. see line 85
                  if (playerOneTurn == true){
                     playerOne.attempts++
                  }else{
                     playerTwo.attempts++
                  }
               if(chosenCard[0].getAttribute("name") === chosenCard[1].getAttribute("name")) { //  store infomation in div under the name attribute
                     if(playerOneTurn == true){
                        playerOne.found++
                     }else{
                        playerTwo.found++
                     }
                  // found++// do if state
                  alert("Good job! you found the match")
                  chosenCard[0].classList.remove("flipCard" )
                  chosenCard[1].classList.remove("flipCard" )
                  // chosenCard[0].setAttribute("src", "images/card_blank.png")//accessing 
                  // chosenCard[1].setAttribute("src", "images/card_blank.png") 
                  
                  // if(found == cardsInGame){
                  //    alert("Nice job you found all the cards ")
                  // }
                  
                  if (playerOne.found + playerTwo.found === cardsInGame) {
                        // game is finished
                        if (playerOne.found>playerTwo.found) {
                           alert("Player One Wins The Game")
                        //playerOne wins
                        } else {
                           alert("Player Two Wins The Game")
                        // playerTwo wins
                      }
                     }
                     
             
               }else{
                  alert("keep trying to find the match")
                  setTimeout(()=>{
                     chosenCard[0].classList.toggle("toggleCard" )
                     chosenCard[1].classList.toggle("toggleCard" )
                  },1000)
                  
                  chosenCard[0].classList.remove("flipCard" )
                  chosenCard[1].classList.remove("flipCard" )
                  // chosenCard[0]=classList //setAttribute("src","images/Rainbow_background.webp")
                  // chosenCard[1]=classList //setAttribute("src","images/Rainbow_background.webp")
                  
               }  
            }
            cardGenerator()
         
         // checkCards() no need
         // checkForMatch() no need to invock again because we did in checkcards() 
})
   
         // to make two player game  
         // do chage html attempt and found for each player
         // make them variable
         // grab them
         // add to score found in game
         // plyerone found = player found
         // then declair wins  


   