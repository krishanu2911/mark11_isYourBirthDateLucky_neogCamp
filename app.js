const dateOfBirth = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const checkButton = document.querySelector("#check-button");
const outputLuck = document.querySelector("#output-luck");

checkButton.addEventListener("click", checkbirthdateIsLucky);

function checkbirthdateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  const number = Number(luckyNumber.value);
  if(number >0){
    if(sum%number === 0){
      outputLuck.innerText = "Your BirthDate is Lucky 🥳";
  }else{
    outputLuck.innerText = "Your BirthDate is not lucky 😊 But you are awesome";
  }
}else{
  outputLuck.innerText = "please give + ve lucky number";
}

 }
  // if(sum%number === 0){
  //     outputLuck.innerText = "lucky";
  // }else{
  //   outputLuck.innerText = "not lucky";
  // }


function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}
