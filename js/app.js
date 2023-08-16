document.getElementById('convert').addEventListener('click', tempConvert);
document.getElementById('reset').addEventListener('click', tempReset);

function tempConvert(){
    var c = document.getElementById('celsius').value;
    var f = document.getElementById('fahrenheight').value;

    if(c != ''){
        f = (parseFloat(c * 9/5 ) + 32);
        document.getElementById('fahrenheight').value = parseFloat(f).toFixed(1);
    }
    else{
        c = (parseFloat(f - 32)* 5/9);
        document.getElementById('celsius').value = parseFloat(c).toFixed(1);
    }

    

}

function tempReset(){
    document.getElementById('fahrenheight').value = '';
    document.getElementById('celsius').value = '';
}