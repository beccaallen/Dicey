let dieHolder = document.querySelector(".dieHolder");
let newButton = document.querySelector(".newDie");
let rollButton = document.querySelector(".roll");
let dieArray = [];

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "die";
    this.value = this.roll();
    this.div.append(this.value);
    dieHolder.appendChild(this.div);
    dieArray.push(this.div);
  }

  roll() {
    let randomVal = Math.floor(Math.random() * 7);
    return `${randomVal}`;
  }
}

newButton.addEventListener("click", function () {
  new Die();
});


rollButton.addEventListener("click", function (){
    for (i=0; i < dieArray.length; i++){
        dieArray[i]
        console.log(dieArray[i]);
    }
   
})