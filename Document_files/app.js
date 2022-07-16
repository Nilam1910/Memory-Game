document.addEventListener("DOMContentLoaded", ()=>{
   // make an array with object card and image 
   const cardsArray = [
      {cardName: "A",
       image: "./images/card_A.webp"
      },
      {cardName: "A",
       image: "./images/card_A.webp"
      },  
      {cardName: "king",
       image: "./images/card_K.webp"
      },
      {cardName: "king",
       image: "./images/card_K.webp"
      },
      {cardName: "queen",
       image: "./images/card_Q.webp"
      },
      {cardName: "queen",
       image: "./images/card_Q.webp"
      },  
      {cardName: "Joker",
       image: "./images/card_J.webp"
      }, 
      {cardName: "Joker",
       image: "./images/card_J.webp"
      },
      {cardName: "J",
       image: "./images/card_J1.webp"
      }, 
      {cardName: "J",
       image: "./images/card_J1.webp"
      }   
   ]
    cardsArray.sort(()=> 0.5 - Math.random())
   // console.log(cardsArray) //to check array
   // create variable for get gameGrid
   const grabGameGrid = document.querySelector(".gameGrid")
   // const get
   // create varible to get attempts holder,found holder , how many card in the game,for attempts=0 and foundCards=0
   // set location equal to  attemtsHolder and foundHolder
   const grabAttemptsHolder =document.querySelector(".attemptsHolder")
   const grabFoundHolder = document.querySelector(".foundHolder")
   // const cards = 10
   // const attempts = 0
   // const foundCards = 0
   
   // create a function to initiate the board
   function initiateBoard(){
      // make a for loop for length of cardsArray
      for(let i=0; i< cardsArray.length; i++){
         // let grabImg = document.querySelectorAll("#deta-id")
         // console.log(grabImg) //not working
         
         //  console.log(cardsArray[i])   // worked
         // set variable to create element for imgage
         let createImg = document.createElement("img")
         // createImg.innerHTML=cardsArray[i]
         // console.log(createImg) // to check img tag created
         // create a source for images with placeholder
         createImg.setAttribute("src","/images/placeholder.webp")
          // create  deta id and cardsArray(variable we use for "forloop")
         createImg.setAttribute("data-id",i)
         // add an event listner for click with function flipCard
         createImg.addEventListener("click", flipCard) // befor this we need to crate create a fuction flipCard

         getGameGrid.appendChild(createImg)
      }
   }
   // initiateBoard();
   // use sort method to randamize array
   
   
})