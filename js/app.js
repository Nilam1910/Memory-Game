document.addEventListener("DOMContentLoaded", ()=>{    // it will give you ablity to write css before you write app.js or you can say web browser trigger HTML element more beter way to faster access  
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
      // const grabTimeHolder = document.querySelector("#timeHolder")
      // var music = {
      //    src:[""]
      // }
      var chosenCardId =[] 
      var chosenCard = []  
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
      const grabTimeHolder = document.querySelector("#timeHolder")
      var time1 = {time: 60}
      let time1Active;
      grabTimeHolder.textContent = time1.time
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
         // console.log(cardArray)
      function board (){
         for(let i=0; i<cardArray.length; i++){
               console.log(i)
               const card = document.createElement("div")
               const back = document.createElement("img")
               const front = document.createElement("img")
               back.setAttribute("name", cardArray[i].cardName )
               card.setAttribute("name", cardArray[i].cardName + "div") //geting back when you do surch card that why need to set up this 
               card.classList = "card" // made class of each
               front.classList = "front"
               back.classList = "back"
               grabGameGrid.appendChild(card)
               card.appendChild(back)
               card.appendChild(front)
               back.src = cardArray[i].imageSrc // back image attached it
               // grab another image for font and attached with 
               front.setAttribute("src","images/Rainbow_background.webp") 
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
               chosenCard = document.querySelectorAll(".flipCard") //chosencard empty array from ref line 22 
               //  console.log(chosenCard)  //worked in empty array grab all [div.card.toggleCard.flipCard]
            if(chosenCard.length===2){
                  // console.log(chosenCard[1]) //when we click second card then we grab name and src both
                  checkForMatch()
                 
                  /* grabFoundHolder.textContent = found
                     grabAttemptsHolder.textContent = attempts */ // for only player game
                  grabPlayerOneAttemptsHolder.textContent = playerOne.attempts
                  grabPlayerOneFoundHolder.textContent = playerOne.found
                  grabPlayerTwoAttemptsHolder.textContent = playerTwo.attempts
                  grabPlayerTwoFoundHolder.textContent = playerTwo.found 
                  grabPlayerTwoFoundHolder.textContent = playerTwo.found
                  
                  playerOneTurn = !playerOneTurn // that mean its plyerTwo turn so that gives playerOne and plyerTwo turn by turn
               }

         }  
         function time(){
          time1Active = setInterval(() => {
               time1.time-=1
               grabTimeHolder.textContent = time1.time
               if(time1.time === 0){
                  clearInterval(time1Active)
                  alert("Time's Up")
               }
            }, 1000);
         }  
         time()  
         function checkForMatch(){
               // attempts++; //will increase after every two card chosen. see line 90    // for only player game
               if(playerOneTurn == true){
                     playerOne.attempts++
                     
                  }else{
                     playerTwo.attempts++
                  }
               if(chosenCard[0].getAttribute("name") === chosenCard[1].getAttribute("name")) { //store infomation in div under the name attribute
                  if(playerOneTurn == true){
                        playerOne.found++
                        // time.time --
                     }else{
                        playerTwo.found++
                     }
                     // found++      // for only player game 
                     alert("Good job! you found the match")
                     chosenCard[0].classList.remove("flipCard")
                     chosenCard[1].classList.remove("flipCard")
                     /* if(found == cardsInGame){
                         alert("Nice job you found all the cards ")
                        }  */    // for only player game        
                  if (playerOne.found + playerTwo.found === cardsInGame) {
                        
                        alert("Game is Finished")
                        clearInterval(time1Active)
                        
                     if (playerOne.found>playerTwo.found) {
                           
                           alert("Player One Wins The Game")
                        
                        }else{
                           
                           alert("Player Two Wins The Game")
                           
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
               }  
            }
            cardGenerator()
})
         
   






         // to make two player game  
         // do chage html attempt and found for each player
         // make them variable
         // grab them
         // line 97 must needed
         // if staement for attems and found
         // add to score found in game
         // plyerone found = player found
         // if statement to declair winers  

         //for add time we can start with following
         /*  
         const grabTimeHolder = document.querySelector("#timeHolder")
         var time = {time: 15}
         grabTimeHolder.textContent = time.time
         if(playerOne + playerTwo == time){
                            time --
                            alert("Game time finished")
                         } */
   