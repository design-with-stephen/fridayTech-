const tab = document.querySelectorAll(".aboutTab");

tabFunction();

function tabFunction() {
    tab.addEventListener('mouseenter', function (){
        document.alert("mouse over")
    })
}