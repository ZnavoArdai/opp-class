// //1
// class student{

//     constructor (fname,classOf,idOf){
//         this.fname=fname;
//         this.classOf=classOf;
//         this.idOf=idOf;
//     }
// }
// //2
// let oneShow=new student("avi","10","054236544");
// let twoShow=new student("natan","9","4546544");


// for (const key in oneShow) {
   
//     console.log(oneShow[key])
//     console.log(twoShow[key])

// }
//3


// class user{
//     constructor(fname,lname,age,email){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//         this.email=email;
//     }
// }

//4
// let one=new user("mot","cohen",25,"mo2gmailcom")
// let two=new user("avi","hai",28,"avi@gmailcom")
// let three=new user("dor","men",35,"dor@gmail.com")


// for (const key in one) {
//   display.innerHTML+=` ${one[key]}`
//   display1.innerHTML+=` ${two[key]}`
//   display2.innerHTML+=` ${three[key]}`


// }
//5

// class user{
//     constructor(fname,lname,age,email){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//         this.email=email;
//     }
// }




// btn.onclick=()=>{
//     let one=new user(fname1.value,lname1.value,age1.value,email1.value)

//     tbod.innerHTML=`<tr><td>${one.fname}</td><td>${one.lname}</td><td>${one.age}</td><td>${one.email}</td></tr>`
// }

//7

// class dog{
//     constructor(dogname,kind,birthday){
//         this.dogname=dogname;
//         this.kind=kind;
//         this.birthday=birthday;
//     }
// }

// let dog1=new dog("moki1","labrdor1","12/12/1995")
// let dog2=new dog("moki2","labrdor2","12/12/1995")
// let dog3=new dog("moki3","labrdor3","12/12/1995")
// let dog4=new dog("moki4","labrdor4","12/12/1995")
// let dog5=new dog("moki5","labrdor5","12/12/1995")

//8
// let dogArray=[dog1,dog2,dog3,dog4,dog5];


// dogArray.forEach(i => {
    
//     console.log(i)
// });

//9+10


// class teacher{

//     constructor(fname,lname,techof,email){
//         this.fname=fname;
//         this.lname=lname;
//         this.techof=techof;
//         this.email=email;

//     }
// }

// let myArray=[]
// btn.onclick=()=>{

//         let  one=new teacher(fname1.value,lname1.value,techof1.value,email1.value)
    
    
//         myArray.push(one)

//         if(myArray.length==5){

//             myArray.forEach(i => {
            
//                 tbod.innerHTML+=`<tr><td>${i.fname}</td><td>${i.lname}</td><td>${i.techof}</td><td>${i.email}</td></tr>`
//             });
        
//         } 
// }

//11

class course{
    constructor(fname,isAlectur,listGrades=[],listStud=[]){
        this.fname=fname;
        this.isAlectur=isAlectur;
        this.listGrades=listGrades;
        this.listStud=listStud;
    }
}


let grades=[55,42,23,77,45,67,88]
let students=["avrom","joni","moshe","viki"]

let one=new course("avi",true,grades,students)


for (const key in one) {
    display.innerText+=` ${one[key]}`

}
    
//13

    console.log(students.sort())

//14


grades.sort((a,b)=>a-b)

console.log(grades)










