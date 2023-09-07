
let users = []

function  notifyuseradd(){
    let alert=document.getElementById('alert-sucesses');
    alert.classList.remove('alert');
    alert.classList.add('alert-sucesses');

    setTimeout(()=>{
        alert.classList.add('alert');
        alert.classList.remove('alert-sucesses');
    },2000);
}

function notifyuser(){
   let alert = document.getElementById('alert-danger');
   alert.classList.remove('alert'); 
   alert.classList.add('alert-danger'); 

   setTimeout(()=>{
    alert.classList.add('alert'); 
    alert.classList.remove('alert-danger'); 
   }, 2000);
}

function adduser(addinguser){
    let adduser = users.filter((CurrentUser)=>{
        return CurrentUser.email == addinguser.email;
    })
    if(adduser.length == 0){
        users.push(addinguser);
        notifyuseradd();
    }
    else{
        notifyuser();
    }
   
}

function displayuser(){
 let divusercontainer = document.getElementById('user');
 divusercontainer.innerHTML = " ";
 users.map((a) => {
    let userdiv = document.createElement('div');
    userdiv.classList.add('user');
    let namecontainer = document.createElement('p');
    namecontainer.innerText = a.name;
    let emailcontainer = document.createElement('p');
    emailcontainer.innerText = a.email; 
    let examcontainer = document.createElement('p');
    examcontainer.innerText = a.randomDiv;
    divusercontainer.appendChild(userdiv);
    userdiv.append(namecontainer);
    userdiv.append(emailcontainer);
    userdiv.append(examcontainer);
})
}
// function displayuser1(){
//     let divusercontainer1 = document.getElementById('user1');
//     divusercontainer1.innerHTML = " ";
//     users.map((a) => {
//         let storage1div = document.createElement('div');
//         storage1div.classList.add('user1');
//         let examcontainer = document.createElement('p');
//         examcontainer.innerText = a.exam;
//     divusercontainer1.appendChild(storage1div);
//         storage1div.append(examcontainer);
//    })
//    }



var randomStrings = [
    "Exam-Centre : MUMBAI",
    "Exam-Centre : PUNE",
    "Exam-Centre : DELHI",
    "Exam-centre : PUNJAB",
    "Exam-centre : GUJARAT"
    // "Top 5 Ways To insert user input here ",
    // "hello 2",
    // "hello 3",
    // "hello 4",
    // "hello 5",
    // "hello A",
    // "hello B",
    // "hello C",
    // "hello D",
    // "hello E"  // Note: No comma after last entry
];
// function Exam() {
//   var msg = randomStrings[Math.floor(Math.random()*randomStrings.length)];
//   document.getElementById('randomDiv').innerHTML = msg;
// }
function add(){
    let msg = randomStrings[Math.floor(Math.random()*randomStrings.length)];
    console.log(msg)
    let randomDiv=document.getElementById('randomDiv');
    let name=document.getElementById('name');
    let email=document.getElementById('email');

    let  user = {
        name :name.value,
        email:email.value,
        randomDiv:innerText=msg,
    }
    adduser(user);
    // displayuser1();
    displayuser();
    console.log(users);

    
}