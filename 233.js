function isLeap(){
    if (new Date().getDate() == 29) {return true;} 
    else {return false;}
}
if (isLeap == true){console.log("Год - високосный")}
else{console.log('Год - обычный')}