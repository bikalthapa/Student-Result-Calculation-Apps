function result(){
//taking students personal detail//
var school = document.getElementById("school").value;
var student = document.getElementById("name").value;
var rollno = document.getElementById("rollno").value;
var classes = document.getElementById("class").value;
var date = document.getElementById("result").value;
var address = document.getElementById("address").value; 
var exam = document.getElementById("examination").value;
var medium = document.getElementById("mediumi").value;

//taking the value of full marks and pass marks
var fullmarks = document.getElementById("fm").value;
var passmarks = document.getElementById("pm").value;
var noofsubject = document.getElementById("fmn").value;


//taking Obtained marks in each subject
var english = document.getElementById("english").value;
var nepali = document.getElementById("nepali").value;
var science = document.getElementById("science").value;
var social = document.getElementById("social").value;
var math = document.getElementById("math").value;
var moral = document.getElementById("moral").value;
var health = document.getElementById("health").value;
var optmath = document.getElementById("optmath").value;
var computer = document.getElementById("computer").value;
var account = document.getElementById("account").value;
var occupation = document.getElementById("occupation").value;

//Some important Formula
var obtainedmarks = Number(english)+ Number(nepali) + Number(science) + Number(social) + Number(math) + Number(moral) + Number(health) +Number(optmath) + Number(computer) + Number(account) +Number(occupation);
var totalfullmarks = fullmarks*noofsubject
var percentage = obtainedmarks/totalfullmarks*100;








//whole function
if(fullmarks<passmarks){alert("Full Marks is less than pass marks");}
else if(english>fullmarks){alert("Obtain marks in english is greater than fullmarks")}
else if(nepali>fullmarks){alert("Obtain marks in Nepali is greater than fullmarks")}
else if(science>fullmarks){alert("Obtain marks in Science is greater than fullmarks")}
else if(social>fullmarks){alert("Obtain marks in Social is greater than fullmarks")}
else if(math>fullmarks){alert("Obtain marks in math is greater than fullmarks")}
else if(moral>fullmarks){alert("Obtain marks in moral is greater than fullmarks")}
else if(health>fullmarks){alert("Obtain marks in health is greater than fullmarks")}
else if(optmath>fullmarks){alert("Obtain marks in optmath is greater than fullmarks")}
else if(computer>fullmarks){alert("Obtain marks in computer is greater than fullmarks")}
else if(account>fullmarks){alert("Obtain marks in account is greater than fullmarks")}
else if(occupation>fullmarks){alert("Obtain marks in occupation is greater than fullmarks")}
else{

//printing final result{GPA, percentage,etc.}
document.getElementById("percentage").innerHTML = "Percentage : "+percentage.toFixed(2);


//printing personal details of students in result
document.getElementById("schoolr").innerHTML = school;
document.getElementById("namer").innerHTML = "Grade Secured By "+student;
document.getElementById("rollnor").innerHTML = "Symbol No: "+rollno;
document.getElementById("classr").innerHTML = "Class: "+classes;
document.getElementById("resultdate").innerHTML = "Result Date: "+date;
document.getElementById("schooladdress").innerHTML = address;
document.getElementById("term").innerHTML = exam;
document.getElementById("medium").innerHTML = "Section : "+medium;

//printing the value of full marks and pass marks in Final Result
document.getElementById("fms").innerHTML = fullmarks;
document.getElementById("fmq").innerHTML = fullmarks;
document.getElementById("fma").innerHTML = fullmarks;
document.getElementById("fmb").innerHTML = fullmarks;
document.getElementById("fmc").innerHTML = fullmarks;
document.getElementById("fmd").innerHTML = fullmarks;
document.getElementById("fme").innerHTML = fullmarks;
document.getElementById("fmf").innerHTML = fullmarks;
document.getElementById("fmg").innerHTML = fullmarks;
document.getElementById("fmh").innerHTML = fullmarks;
document.getElementById("fmi").innerHTML = fullmarks;

document.getElementById("pmsa").innerHTML = passmarks;
document.getElementById("pmsb").innerHTML = passmarks;
document.getElementById("pmsc").innerHTML = passmarks;
document.getElementById("pmsd").innerHTML = passmarks;
document.getElementById("pmse").innerHTML = passmarks;
document.getElementById("pmsf").innerHTML = passmarks;
document.getElementById("pmsg").innerHTML = passmarks;
document.getElementById("pmsh").innerHTML = passmarks;
document.getElementById("pmsi").innerHTML = passmarks;
document.getElementById("pmsj").innerHTML = passmarks;
document.getElementById("pmsk").innerHTML = passmarks;

document.getElementById("fmtotal").innerHTML = totalfullmarks;
document.getElementById("pmtotal").innerHTML = passmarks*noofsubject;
document.getElementById("omtotal").innerHTML = obtainedmarks;


//printing the value of obtained marks in table
document.getElementById("omen").innerHTML = english;
document.getElementById("omne").innerHTML = nepali;
document.getElementById("omsc").innerHTML = science;
document.getElementById("omso").innerHTML = social;
document.getElementById("omma").innerHTML = math;
document.getElementById("ommo").innerHTML = moral;
document.getElementById("omhe").innerHTML = health;
document.getElementById("omop").innerHTML = optmath;
document.getElementById("omco").innerHTML = computer;
document.getElementById("omac").innerHTML = account;
document.getElementById("omoc").innerHTML = occupation;

//starting the functions of Remarks
if(english>=passmarks){document.getElementById("remarksen").innerHTML="Pass"}
else{document.getElementById("remarksen").innerHTML="Fail"};

if(nepali>=passmarks){document.getElementById("remarksne").innerHTML="Pass"}
else{document.getElementById("remarksne").innerHTML="Fail"};

if( science>=passmarks){document.getElementById("remarkssc").innerHTML="Pass"}
else{document.getElementById("remarkssc").innerHTML="Fail"};

if( social>=passmarks){document.getElementById("remarksso").innerHTML="Pass"}
else{document.getElementById("remarksso").innerHTML="Fail"};

if( math>=passmarks){document.getElementById("remarksma").innerHTML="Pass"}
else{document.getElementById("remarksma").innerHTML="Fail"};

if( moral>=passmarks){document.getElementById("remarksmo").innerHTML="Pass"}
else{document.getElementById("remarksmo").innerHTML="Fail"};

if( health>=passmarks){document.getElementById("remarkshe").innerHTML="Pass"}
else{document.getElementById("remarkshe").innerHTML="Fail"};

if( optmath>=passmarks){document.getElementById("remarksop").innerHTML="Pass"}
else{document.getElementById("remarksop").innerHTML="Fail"};

if( computer>=passmarks){document.getElementById("remarksco").innerHTML="Pass"}
else{document.getElementById("remarksco").innerHTML="Fail"};

if( account>=passmarks){document.getElementById("remarksac").innerHTML="Pass"}
else{document.getElementById("remarksac").innerHTML="Fail"};

if(occupation>=passmarks){document.getElementById("remarksoc").innerHTML="pass"}
else{document.getElementById("remarksoc").innerHTML="Fail"};


//Grading function
var lremarks = document.getElementById("lremarks").innerHTML;

if(percentage>=90){document.getElementById("grade").innerHTML = "Grade : A+"}
else if(percentage>=80 && percentage<90){document.getElementById("grade").innerHTML = "Grade : A"}
else if(percentage>=70 && percentage<80){document.getElementById("grade").innerHTML = "Grade : B+"}
else if(percentage>=60 && percentage<70){document.getElementById("grade").innerHTML = "Grade : B"}
else if(percentage>=50 && percentage<60){document.getElementById("grade").innerHTML = "Grade : C+"}
else if(percentage>=40 && percentage<50){document.getElementById("grade").innerHTML = "Grade : C"}
else if(percentage>=30 && percentage<40){document.getElementById("grade").innerHTML = "Grade : D+"}
else if(percentage>=20 && percentage<30){document.getElementById("grade").innerHTML = "Grade : D"}
else if(percentage>=10 && percentage<20){document.getElementById("grade").innerHTML = "Grade : E+"}
else {document.getElementById("grade").innerHTML ="Grade : E"};




};
};

function printpage(){
    
let body = document.getElementById("body").innerHTML;
let finalresult = document.getElementById("finalr").innerHTML;
document.getElementById("body").innerHTML = finalresult;
document.getElementById("finalr").innerHTML = body;
window.print()

}