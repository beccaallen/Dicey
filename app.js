let dieHolder = document.querySelector(".dieHolder");
let newButton = document.querySelector(".newDie");
let rollButton = document.querySelector(".roll");
let sumButton = document.querySelector(".sum");
let dieArray = [];
let counter = 0;

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "die";
    this.value = document.createTextNode(counter);
    this.div.append(this.value);
    this.roll();
    dieHolder.appendChild(this.div);
    dieArray.push(this);
    counter++;

    //change value on die on click

    this.div.addEventListener("click", () => this.roll());

    //remove obj from div and global array on double click

    this.div.addEventListener("dblclick", function (e) {
      this.remove();
      dieArray.splice(this, 1);
      // check that correct obj was deleted from global array
      // console.log(dieArray)
    });
  }

  roll() {
    this.value = Math.floor(Math.random() * 7);
    this.div.textContent = this.value;
  }
}

newButton.addEventListener("click", function () {
  new Die();
});

rollButton.addEventListener("click", function () {
  for (i = 0; i < dieArray.length; i++) {
    dieArray[i].roll();
  }
});

sumButton.addEventListener("click", function () {
  let val = dieArray.map((a) => a.value);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  alert(val.reduce(reducer));
});
