document.addEventListener("DOMContentLoaded", ()=>{
   // make an array with card and image 
const cardsArray = [
       
      {card: "A",
       image: "./images/card_A.webp"
      },

      {card: "A",
       image: "./images/card_A.webp"
      },

      {card: "king",
      image: "./images/card_K.webp"
      },

      {card: "king",
      image: "./images/card_K.webp"
      },
      
      {card: "queen",
      image: "./images/card_Q.webp"
      },

      {card: "queen",
       image: "./images/card_Q.webp"
      },

      {card: "Joker",
       image: "./images/card_J.webp"
      }, 

      {card: "Joker",
       image: "./images/card_J.webp"
      },
      {card: "J",
      image: "./images/card_J1.webp"
      }, 
      {card: "J",
      image: "./images/card_J1.webp"
      }   
   ]
   console.log(cardsArray) //worked
   // use sort method to randamize array
   // create variable for get gameGrid
   // create varible to get attempts holder,found holder , how many card in the game,for attempts=0 and foundCards=0
   // set location equal to  attemtsHolder and foundHolder

   // make variable for chose card array
   // make veriable for id card array
   // make a function for board
   const grabGameGrid = document.querySelector(".gameGrid")
   function initiateBoard (){
      for (let i = 0; i < cardsArray.length; i++) {
        const makeImg = document.createElement("img")
        makeImg.setAttribute("src","images/placeholder.webp")
        makeImg.setAttribute("id",i)
        grabGameGrid.appendChild(makeImg)
         
      }
   }
   // for loop for cards array
   // variable createing imge 
   // set attribute images/placeholder and deta-id veriable for loop 
   // add eventListner for flipCard
   // do appendchild for card to grid

   // make another function for flip card
   // if statemnet for choosen card not equal to two then its run,because while time out been running we need to able click another card to match
   // create variable to get this.getAttribute data id
   // set if statements for source of blank image
   // push the chosen cards in to cards array cardId name so know which one get choosen
   // then another push for chosen card ids to cardId so know for flip chosen to place on blank card
   // we need to make card flip it self so use this setAttribute source for array id image
   // if statement for chosenCards variable length equals to two to check the match and use set timeout function 

  
})