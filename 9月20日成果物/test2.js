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