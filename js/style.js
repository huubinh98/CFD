// bài 1
    let a = 4,b =12;
    console.log(a+b)
    let remainder = b%a;
    console.log(remainder)
    let div = b/a;
    console.log(div)
// bài 2
    let lastName = 'Nguyen'
    let firstName = 'Duc'
    console.log(firstName+' '+lastName)

// bài 3
    let exam = 'happy news year'
    console.log(exam.length)
    console.log(exam.indexOf('y'))
    console.log(exam.lastIndexOf('y'))
    console.log(exam.replace('happy','T_T'))

// Bài 4
    let num = 6;
    function checkNumber(_num){
        if(num % 2 === 0){
            return true
        }
        else return false;
    }

    console.log(checkNumber(num))
//Bai 5
    let total=0;
    for( let i = 0; i < 10; i++ ){
        total += i;
    }
    console.log(total)
// Bai 6

    for( let i = 0; i <= 20; i++ ){
        if(i % 2 ===0){
            console.log(i)
        }
    }
//Bai 7
    /*
        Dùng var khi khai báo lại và giá lại giá trị biến đã khởi tạo
        Dùng let khi không được khai báo lại
        Dùng const khi giá trị mặc định, chỉ khai báo 1 lần

        Điểm khác nhau chính giữa biến cục bố và biến toàn cục là biến toàn cục có thể truy cập trong
        toàn bộ chương trình, còn biến cục bộ có thể truy cập trong chỉ trong hàm hoặc khối đẫ được định
        nghĩa
    */

// Bai 8
    let arr = [1,2,3,4,5]
    let arr_new = arr.slice(0,arr.length-2)
    console.log(arr_new)
// Bai 9
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let clock  = document.querySelector('.clock');
    console.log(clock)
    clock.innerHTML = `${time}`
    //document.body.innerHTML = hours+":"+mins+":"+secs;

//Bai 10
let cfd = document.querySelector('.Bai10');
console.log(cfd)
cfd.onclick = function(e){
    e.preventDefault();
    console.log(cfd.getAttribute('href'));
    
}

//Bai 11
/*
    Callback là 1 fuction được thực thi khi 1 fuction khác thực thi xong
*/
function hello(){
    console.log("say hello");
}
function show(a,callback){
    console.log(a)
    callback();
}
//Bai12 
checkBox = document.querySelector('#myCheck1')
checkBox.onclick = function(){
    alert(checkBox.value)
}
show('abc',hello)
//Bai 13
checkAll = document.querySelector('#myCheck2')
checkAll.onclick = function(e) {
    //console.log(1)
    //console.log("checkbox")
    checkboxes = document.querySelectorAll('.checkBox_child');
    //console.log(checkboxes)
    for(var checkbox of checkboxes){
        checkbox.checked = true
    }
  }
//   huyCheckAll = document.querySelector('#myCheck3')
//   huyCheckAll.onclick = function(e) {
//     //console.log(1)
//     //console.log("checkbox")
//     checkboxes = document.querySelectorAll('.checkBox_child');
//     //console.log(checkboxes)
//     for(var checkbox of checkboxes){
//         checkbox.checked = false
//     }
//   }
//Bai 14
cars = document.querySelector('#cars')
cars.onchange = function(e){
    console.log(this.value)
}
//Bai 15
function checkPhone(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneno)) {
      alert("okela Phone")
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }

  //checkPhone("012 312 1234")
  function checkEmail(inputtxt) {
    let email = /\S+@\S+\.\S+/;
    if(inputtxt.match(email)) {
      alert("okela Email")
    }
    else {
      alert("message");
    }
  }
  //checkEmail('duc2006@gmail.com')
//Bai 16
let arr1 = [1,2,3,4,5,6,7,8,9,10]

let check = arr1.find(function(value){
    return value >5;
})
console.log(check)

// Bai 17

check = arr1.filter(function(value){
    return value > 5
})

console.log(check)



// CFD Wooder

// tick on hamberger_btn
// let hamberger_btn = document.querySelector('.hamberger');
// let nav = document.querySelector('nav')
// console.log(nav)
// hamberger_btn.onclick = function() {
//     nav.classList.toggle('active');
//     document.querySelector('header').classList.toggle('nav-active');
//     document.querySelector('.hamberger').classList.toggle('active');
// }

// // overcome slide
 
// let slide = document.querySelector('.slide')
// let hightHeader = document.querySelector('header').clientHeight
// console.log(hightHeader);
// document.onscroll = function() {
//     console.log(window.pageYOffset)
//     if(window.pageYOffset > slide.clientHeight - hightHeader){
//         document.querySelector('header').classList.add('nav-active');
//     }  
//     else{
//         document.querySelector('header').classList.remove('nav-active');
//     } 
// }