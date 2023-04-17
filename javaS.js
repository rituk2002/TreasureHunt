function checkContent() {
    var input = document.getElementById("inputText").value;
    var defaultString = "world";
    if(input === defaultString) {
        document.getElementById("result").innerHTML = "Content matches!!! now click on the rightmost-bottom button";
        
    } else {
        document.getElementById("result").innerHTML = "Content does not match!";
    }
}
