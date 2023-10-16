var sumstay = 0;
var num = 0;
var num1 = 0;

const stay = ()=>{

    const staytime = document.querySelector("input[name=staytime]");

    var date = new Date(document.getElementById("times").value);
    var date1 = new Date(document.getElementById("time1").value);
    sumstay = (date1 - date) / 1000 / 60 / 60 / 24;
    if (sumstay-1 <= 0){
        document.querySelector(`#output`).innerHTML = "正しい日程を入力してください"
    }else{
        document.querySelector(`#output`).innerHTML = sumstay-1 + "泊" + sumstay + "日";
    }
    wm.set({stay: sumstay});
}

let time = document.getElementById('time1');
time.addEventListener('change', stay);

let times = document.getElementById('times');
times.addEventListener('change', stay);

const calc = ()=>{
    //querySelector　HTML要素をid属性、class属性に関係なく、取り出すこと可能
    //input　ユーザーの操作によって変更された際にイベントを発生させる

    const result = document.querySelector("input[name=result]");

    total = 0;
    var check = document.getElementsByClassName('checks');

    for ( i = 0; i < 3; i++) {
        if ( check[i].checked === true ) {
            //valueの要素をテキストに入れる
            var total = total + 6000 - Number(check[i].value);
            
        }
    }
    result.value =Number(result.value)+ Number(total);
}

const sum = ()=>{
    const result = document.querySelector("input[name=result]");

    if(num >0 && num1 > 0 && sumstay > 0){
    result.value = Number(num) * Number(num1) + Number(sumstay)*6000;
    }
            
}


function inputChange(event){
    num = event.currentTarget.value;
    sum();
}
function inputChange1(event){
    num1 = event.currentTarget.value;
    sum();
}
let grade = document.getElementById('grade');
grade.addEventListener('change', inputChange);

let ninzu = document.getElementById('ninzu');
ninzu.addEventListener('change', inputChange1);
