const display = document.getElementById("display");

function appandSybol(symbol){
    display.value += symbol;
}

function cleatDisplay(){
    display.value ="";
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}
    function calculate(){
        try{
            display.value=eval(display.value);
        }catch{
            display.value="Erro";
        }
    }






