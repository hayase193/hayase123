function checkfruit() {
    //ドロップダウンメニューで選択したものを出力
    var fruitSelect = document.getElementById('fruit');
    i = 0;
    for ( i = 1; i < 4; i++) {
        if (fruitSelect.options[i].selected == true ) {
            var fruit = fruitSelect[i].value;
        }
    }
}
const stay = ()=>{

    const staytime = document.querySelector("input[name=staytime]");

    var date = new Date(document.getElementById("times").value);
    var date1 = new Date(document.getElementById("time1").value);
    var stay = (date1 - date) / 1000 / 60 / 60 / 24;
    document.querySelector(`#output`).innerHTML = stay-1 + "泊" + stay + "日";
}

const calc = ()=>{
    //querySelector　HTML要素をid属性、class属性に関係なく、取り出すこと可能
    //input　ユーザーの操作によって変更された際にイベントを発生させる

    const result = document.querySelector("input[name=result]");

    total = 0;
    var check = document.getElementsByClassName('checks');

    for ( i = 0; i < 3; i++) {
        if ( check[i].checked === true ) {
            //valueの要素をテキストに入れる
            var total = total + Number(check[i].value)
            
        }
    }
    result.value = Number(total);
}