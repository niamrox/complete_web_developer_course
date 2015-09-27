var car = {type: "Fiat", model: 500, color: "white"};
function person(firstName,lastName,id){
    this.fistName=firstName;
    this.lastName=lastName;
    this.id=id;
    this.fullName=function(){
        return this.fistName + " " + this.lastName;
    }
}

var niam= new person("Niamul","Hasan",555);

var tuhin=new person("Name2","Name3",666)

document.getElementById("demo").innerHTML=tuhin.fullName();
