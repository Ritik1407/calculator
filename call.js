var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resutField = document.getElementById('resultField');
var form = document.getElementById('xy');
form.addEventListener('submit' , function(event) {
    if ( !numField1 || !numField2)  { 
        alert("please enter any value");
    }
    else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var result = x/y;
        var percent = result * 100;
        resutField.innerText = "Answer:" + percent + "%";
        event.preventDefault();
    }
});