document.getElementById("ex_age").addEventListener("change", function(){
    var age_elem = document.getElementById("ex_age");
    var s_value = age_elem.options[age_elem.selectedIndex].value;
    var box_elem = document.getElementsByClassName("checks");
    
    if(s_value == "under"){
        //disabledをtrueで入力不可、falseで入力可能
        for(i = 0;i < box_elem.length+1; i++){
            box_elem[i].disabled = true;
        }
    }else{
        for(i = 0;i < box_elem.length+1; i++){
        box_elem[i].disabled = false;
    }
}
}, false);