var celldiv= document.getElementsByClassName("celldiv");
var para=document.querySelector("p");
var pmsg=document.querySelector("p span");
var a=1;

function xcheck(a,b,c){
    if(celldiv[a].classList.contains("x") && celldiv[b].classList.contains("x") && celldiv[c].classList.contains("x")){
        return true;
    }
}
function ocheck(a,b,c){
    if(celldiv[a].classList.contains("o") && celldiv[b].classList.contains("o") && celldiv[c].classList.contains("o")){
        return true;
    }
}

function checker(){
    if(xcheck(0,3,6)||xcheck(1,4,7)||xcheck(2,5,8)||xcheck(0,1,2)||xcheck(3,4,5)||xcheck(6,7,8)||xcheck(0,4,8)||xcheck(2,4,6)){
        para.textContent="Player 1 won";
        return false;
    }
    else if(ocheck(0,3,6)||ocheck(1,4,7)||ocheck(2,5,8)||ocheck(0,1,2)||ocheck(3,4,5)||ocheck(6,7,8)||ocheck(0,4,8)||ocheck(2,4,6)){
        para.textContent="Player 2 won";
        return false;
    }
    else{
        return true;
    }
}

var t= true;

for(var i=0; i<10; i++ ){
    celldiv[i].addEventListener("click",function(){
        if(a%2===1 && !this.classList.contains("x") && !this.classList.contains("o") && t){
            this.classList.add("x");
            pmsg.textContent="2";
            a++;
            t=checker();
        }
        else if(!this.classList.contains("x") && !this.classList.contains("o") && t){
            this.classList.add("o");
            pmsg.textContent="1";
            a++;
            t=checker();
        }
    });
}
