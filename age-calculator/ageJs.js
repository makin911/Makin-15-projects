
let calcButt = document.getElementById('mybutt');
let inputDate = document.getElementById('myDate');

calcButt.addEventListener('click', () => {

  // console.log(inputDate.value);
  let birth = new Date(inputDate.value);
  let date = new Date();
  // console.log(birth);
  // console.log(date);
  
  let year = date.getFullYear() - birth.getFullYear();
  let month = (date.getMonth()+1) - (birth.getMonth()+1);
  let day = date.getDate() - birth.getDate();
  // console.log(date.getDay(),birth.getDay());
  
  let res = document.getElementById('res');
  // if (month < 0) {
  //   // year--;
  //   month += 12;
  // }
  // if (day < 0) {
  //   month--;
  //   let prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  //   day += prevMonth.getDate(); 
  // }
  res.textContent = `youre age is : ${year} year and ${month} month and ${day} days`;
  console.log(day);


})
