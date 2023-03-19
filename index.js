// let btn = document.querySelectorAll(".btn-num");
// let display = document.querySelector(".display");
// let num = [];
// let convertedNums;
// btn.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//       display.innerHTML = getNum(e.target.value);
//     });
// })

// const getNum = (e) => {

//     num.push(e);
//     convertedNums = parseInt(num.join(""));
//     return convertedNums
// }

let dupeArr = [1, 1, 2, 3, 4, 5, 6, 6];

for (let i = 0; i < dupeArr.length; i++) {
  for (let j = 0; j < dupeArr.length; j++) {
    if (i !== j) {
      console.log(dupeArr[i], dupeArr[j]);
    }
  }
}
console.log(dupeArr);
