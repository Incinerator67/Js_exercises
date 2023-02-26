function isLeap(){
    if (new Date().getFullYear() == 12) {return true;} 
    else {return false;}
}
if (isLeap == true){console.log("Високосный")}
else{console.log('Обычный')}