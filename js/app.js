document.getElementById('convert').addEventListener('click', tempConvert);
document.getElementById('reset').addEventListener('click', tempReset);

function tempConvert(){
    var c = parseFloat(document.getElementById('celsius').value);
    var f = parseFloat(document.getElementById('fahrenheight').value);
    var k = parseFloat(document.getElementById('kelvin').value);

    if(isNaN(c) && isNaN(f) && isNaN(k)){
        document.getElementById('err').innerHTML = 'Please Enter something';
    } else {
        document.getElementById('err').innerHTML = '';
    }

    if(!isNaN(c)){
        f = (c * 9/5) + 32;
        k = c + 273.15;
        document.getElementById('fahrenheight').value = f.toFixed(1);
        document.getElementById('kelvin').value = k.toFixed(1);
    }
    else if(!isNaN(f)){
        c = (f - 32) * 5/9;
        k = (f - 32) * 5/9 + 273.15;
        document.getElementById('celsius').value = c.toFixed(1);
        document.getElementById('kelvin').value = k.toFixed(1);
    }
    else if(!isNaN(k)){
        c = k - 273.15;
        f = (k - 273.15) * 9/5 + 32;
        document.getElementById('celsius').value = c.toFixed(1);
        document.getElementById('fahrenheight').value = f.toFixed(1);
    }
}

function tempReset(){
    document.getElementById('fahrenheight').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('kelvin').value = '';
    document.getElementById('err').innerHTML = '';
}
