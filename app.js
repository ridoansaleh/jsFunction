function myFunction() {
    var text = document.getElementById("text").value;
    var number = document.getElementById("number").value;    
    var textLength = text.length;
    if(number!=''){
        if((number>=0) && (number<textLength)){
            var textNew = text.split('');
            textNew.splice(number, 1);
            document.getElementById("result").innerHTML = "<div class='alert alert-success' role='alert'>"+textNew.join('')+"</div>";
        }else{
            document.getElementById("result").innerHTML = "<div class='alert alert-danger' role='alert'> The number you've entered is out of scope.</div>";
        }
    }else{
        document.getElementById("result").innerHTML = "<div class='alert alert-danger' role='alert'> You didn't entered anything yet.</div>";
    }
}