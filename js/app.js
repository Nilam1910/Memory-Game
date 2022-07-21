document.addEventListener("DOMContentLoaded", ()=>{    // it will give you ablity to write css before you write app.js or you can say web browser trigger HTML element more beter way to faster acess  
      // make an array with card and image 
      const getArray = ()=>[   
      {cardName: "A", imageSrc: "./images/card_A.webp"},
      {cardName: "A1", imageSrc: "./images/card_A.webp"},
      {cardName: "king", imageSrc: "./images/card_K.webp"},
      {cardName: "king1", imageSrc: "./images/card_K.webp"},
      {cardName: "queen", imageSrc: "./images/card_Q.webp"},
      {cardName: "queen1", imageSrc: "./images/card_Q.webp"},
      {cardName: "Joker", imageSrc: "./images/card_J.webp"}, 
      {cardName: "Joker1", imageSrc: "./images/card_J.webp"},
      {cardName: "J", imageSrc: "./images/card_J1.webp"}, 
      {cardName: "J1", imageSrc: "./images/card_J1.webp"}   
      ]
      // console.log(getArray) //worked
      // lets grab few things from html
      const grabGameGrid = document.querySelector(".gameGrid")
      const grabAttemptsHolder = document.querySelector(".attemptsHolder")
      const grabFoundHolder = document.querySelector(".foundHolder") 
       
      var chosenCardId =[] // we donot know which image id going to be chosen so lefted empty
      var chosenCard = []  // we donot know which image going to be chosen so lefted empty
      const CardsInGame = 5   // total 5 pairs of image  
      var attempts = 0  // to start for chose image from 0
      var found = 0 // to start how many images found from 0
      grabAttemptsHolder.textContent = attempts // 
      grabFoundHolder.textContent = found 
      
         // use sort method to randamize array
         const randamize = () => {
         const cardArray = getArray()
         // console.log(cardArray) // worked
         cardArray.sort(()=> Math.random() -0.5)
         // console.log(cardArray)  // worked
         return cardArray // if not return it will undefind
      }
         //  randamize()

         //  card generator function
         const cardGenerator = () => {
         const cardArray = randamize()
         console.log(cardArray)
         // cardArray.forEach((item)=>
         
         function board (){
            for(let i=0; i<cardArray.length; i++){
               console.log(i)
               const card = document.createElement("div")

               const back = document.createElement("img")
               const front = document.createElement("img")
               back.setAttribute("Id", cardArray[i].cardName )
               card.setAttribute("Id", cardArray[i].cardName + "div")
               card.classList = "card" // made class of each
               front.classList = "front"
               back.classList = "back"
            
               grabGameGrid.appendChild(card)
               
               card.appendChild(back)
               card.appendChild(front)
               back.src = cardArray[i].imageSrc // back image attached it
               // grab another image for font and attached with 
               front.setAttribute("src","images/Rainbow_background.webp")// in css you have to write ( .card{position: relative; transform-style: prserve-3d;transsition: all 2s ease; transform: rotateY(180deg) } and .face, .front{ position: absolute;  backface-visibility: hidden}) to set image top of back image and
            
               //   front.addEventListener("click", "Flip")   
               card.addEventListener("click", (e) =>{ //event been triger with (e)
               card.classList.toggle("toggleCard") //use for animation
               checkCards(e)
               // console.log(e)
                  
            
            })
         }
      }
      board()
   }
      const checkCards = (e) => {
            //  console.log(e) // worked
            // if(chosenCard.length !==2){
            let clickedCard = e.target
            // clickedCard.classList.add("flip") // worked  
            // console.log(clickedCard) // worked with id and src
            chosenCard.push(clickedCard) //chosencard from ref line 22 
            // console.log(chosenCardId)  //worked in emapty array
            if(chosenCard.length===2){
               console.log(chosenCard[1]) // id only like img#j.back //with chosenCard[1] retrive id and src both
               checkForMatch()
            }
         }      
         function checkForMatch(){
               attempts++; // will increase after every two card chosen. see line 85
               // console.log("chosen cards : ", chosenCard[0].src + '' + chosenCard[1].src)
               
               var firstCard = chosenCard[1]
               console.log (firstCard) // with id and src collecting two times for same id

               // if(chosenCard[0].src===chosenCard[1].src) { 
               //    found++
               //    alert("Good job! you found the match")
                  
               //    chosenCard[0].setAttribute("src", "images/card_blank.png")//accessing 
               //    chosenCard[1].setAttribute("src", "images/card_blank.png")   
               // }else{
               //    // alert("keep trying to find the match")
               //    let card0 = document.querySelector(`#${chosenCard[0].id + "div"}`)
               //    let card1 = document.querySelector(`#${chosenCard[1].id + "div"}`)
               //    card0.classList.toggle("toggleCard")
               //    card1.classList.toggle("toggleCard")
               //    // chosenCard[0]=classList //setAttribute("src","images/Rainbow_background.webp")
               //    // chosenCard[1]=classList //setAttribute("src","images/Rainbow_background.webp")
            
               //    chosenCard = [];
               //    grabAttemptsHolder.textContent = attempts  
               //    grabFoundHolder.textContent = found 
               //    if(found=CardsInGame){
               //       alert("Nice job you found all the cards ")
             
               //    }
               // }  
            }

         cardGenerator()
         
         // checkCards() no need
         // checkForMatch() no need to invock again because we did in checkcards() 
   
         
})

      //       let timer = 30
      //        const clickedCardActive = setInterval(()=>{
      //             timer--
      //             // console.log(timer)   // worked  
      //           if(back.src == 2){
      //              console.log(clickedCard.length)
      //              if(clickedCard[0] === clickedCard[1]){
      //               alert("nice job ! ")
      //             //  setTimeout(clickedCard, 300)// to stop timer otherwise flip all sometime
      //             }else{
      //              card.style.display="flex"  // to go back to flex
      //              alert("keep trying")
      //                }
      //           }
      //       },3000)
               
            

      

       
        

      // if(chosenFlipCards.length !=2){ // if statement for chosen image out of images
         // set if statements for source of blank image
   // if(this.getAttribute("src") != "images/card_blank.png"){ // not working
   //    chosenFlipCards.push(back.src.cardName)//image with cardName
      // if statemnet for choosen card not equal to two then its run,because while time out been running we need to able click another card to match

  
   
   
   
   
   
   
   
   // // we need to make card flip it self so use this setAttribute source for array id image
   // // if statement for chosenCards variable length equals to two to check the match and use set timeout function 

   // // need to find how to push the cover top
   // // how to attach two player with this 
   // // set compair staement with alert who win

   // if(attempts === 0){
   //    firstSelection = back.src.getAttribute("back.src")
   //    return
      
   // }else{
   //    secondSelection = back.src.getAttribute("front.src")
   //    return
   //    attempts = 0
      
   // }
