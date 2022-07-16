document.addEventListener("DOMContentLoaded", ()=>{
   // make an array with card and image 
   const getArray = ()=>[   
      {card: "A", imageSrc: "./images/card_A.webp"},
      {card: "A", imageSrc: "./images/card_A.webp"},
      {card: "king", imageSrc: "./images/card_K.webp"},
      {card: "king", imageSrc: "./images/card_K.webp"},
      {card: "queen", imageSrc: "./images/card_Q.webp"},
      {card: "queen", imageSrc: "./images/card_Q.webp"},
      {card: "Joker", imageSrc: "./images/card_J.webp"}, 
      {card: "Joker" , imageSrc: "./images/card_J.webp"},
      {card: "J", imageSrc: "./images/card_J1.webp"}, 
      {card: "J", imageSrc: "./images/card_J1.webp"}   
   ]
   // console.log(getArray) //worked
   // lets grab few things from html
   const grabGameGrid = document.querySelector(".gameGrid")
   // use sort method to randamize array
   const randamize = () => {
      const cardArray = getArray()
      // console.log(cardArray) // worked
      cardArray.sort(()=> Math.random() -0.5)
      // console.log(cardArray)  // worked
      return cardArray
   }
   //  randamize()

   // card generator function
   const cardGenerator = () => {
      const cardArray = randamize()
      console.log(cardArray)
      cardArray.forEach((item)=>{

         const card = document.createElement("div")
         const front = document.createElement("img")
         const back = document.createElement("div")
         card.classList = "card"
         front.classList = "front"
         back.classList = "back"
         grabGameGrid.appendChild(card)
         card.appendChild(front)
         card.appendChild(back)
         front.src = item.imageSrc
      })
   }
   cardGenerator()
   // create variable for get gameGrid
//    
//    console.log(grabGameGrid)  //worked
//   // grab few things
//    const grabAttemptsHolder = document.querySelector(".attemptsHolder")
//    const grabFoundHolder = document.querySelector(".foundHolder")
//    // const makeImgsInGame = 5   // total 5 pairs of image  ---------------??????
//    let attempts = 0  // to start for chose image from 0
//    let foundMakeImgs = 0 // to start how many images found from 0
//    grabAttemptsHolder.textContent = attempts // to count how many attempts happend
//    grabFoundHolder.textContent = foundMakeImgs  // to count how many match you found
   // const chosenMakeImgs = []  //we donot know which image going to be chosen so lefted empty---------???
   // const chosenMakeImgsId = []//we donot know which image id going to be chosen so lefted empty------???

   // make a function for board
   // function initiateBoard (){
   //    for (let i = 0; i < cardsArray.length; i++) {   // for loop for cards array
         
   //       console.log(cardsArray[1]) //worked
   //      var makeImg = document.createElement("img")   // variable createing image 
   //      console.log(makeImg)
   //      grabGameGrid.appendChild(makeImg) //images pushed to gameGrid
   //      makeImg.setAttribute("src", cardsArray[1])
         //   let front = makeImg.setAttribute("src","../images/Rainbow_background.webp")  // set attribute source
         //   let back = makeImg.setAttribute("src", i[1])
        makeImg.setAttribute("id","placeHolder")   // set attribute id veriable for loop
        const palceHolder = document.getElementById("palceHolder")
      //   palceHolder.addEventListener("click",flipPlaceHolder)
      //   function flipPlaceHolder(){
      //    palceHolder.classList.toggle("flipPlaceHolder")
      //   }
      //   const makeImg1 = document.createElement("img1")
      //    //   const makeH1 = document.createElement("h1")
      //    //   makeH1.innerHTML = myFrontText
      //    //   makeImg1.appendChild(makeH1)
      //   const makeImg2 = document.createElement("img2")
        
        
   //    //   makeImg1.setAttribute("class", "front") // for front image
   //    //   makeImg2.setAttribute("class","back")
   //    //   makeImg.appendChild(makeImg1)
   //    //   makeImg.appendChild(makeImg2)
   //    //   palceHolder.addEventListener("click",flipPlaceHolder) // attched function flip image with adding eventListener
        
   //    }    
   // }
   // //    function flipMakeImg(){
   // //       if(chosenMakeImgs.length !=2){ // if statement for chosen image out of images
   // //          var makeImgId = this.getAttribute("id","placeHolder")
   // //          // set if statements for source of blank image
   // //          if(this.getAttribute("src") != "images/card_blank.png"){ // not working
   // //          // push the chosen cards in to cards array cardId name so know which one get choosen
   // //          chosenMakeImgs.push(cardsArray[makeImgId].cardName)
   // //          // then another push for chosen image ids so know for flip chosen to place on blank card
   // //          chosenMakeImgsId.push(makeImgId)
   // //          this.setAttribute("src",cardsArray[makeImgId].image)
   // //          // if statemnet for choosen card not equal to two then its run,because while time out been running we need to able click another card to match
   // //          if(chosenMakeImgs.length == 2){
   // //             setTimeout(checkForMatch, 300)// to stop timer otherwise flip all sometime
   // //          }
   // //         }
   // //      }
   // //    }
   // //    function checkForMatch(){
   // //       attempts++
   // //       var makeImgs = document.querySelectorAll("img")
   // //       var firstMakeImg = chosenMakeImgs[0]
   // //       var secondMakeImg = chosenMakeImgs[1]
   // //       if (chosenMakeImgs[0] == chosenMakeImgs[1]){
   // //          foundMakeImgs++
   // //          makeImgs[firstMakeImg].setAttribute("src","images/card_blank.png")
   // //          makeImgs[secondMakeImg].setAttribute("src","images/card_blank.png")
   // //       }else{
   // //          makeImgs[firstMakeImg].setAttribute("src","images/placeholder.webp")
   // //          makeImgs[secondMakeImg].setAttribute("src","images/placeholder.webp")
   // //       }
   // //       chosenMakeImgs = []
   // //       chosenMakeImgsId = []
   // //       grabAttemptsHolder.textContent = attempts
   // //       grabFoundHolder.textContent = foundMakeImgs
   // //       if(foundMakeImgs == makeImgsInGame)
   // //       alert("nice job ! ")
   // //    }
   //  initiateBoard()
   
   
   
   
   
   
   // // we need to make card flip it self so use this setAttribute source for array id image
   // // if statement for chosenCards variable length equals to two to check the match and use set timeout function 

   // // need to find how to push the cover top
   // // how to attach two player with this 
   // // set compair staement with alert who win

  
})