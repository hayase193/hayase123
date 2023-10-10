const parent = document.getElementById("parent");

//進むボタンを押した時の関数
function susumu() {

//アニメーション発火 
parent.classList.add("susumu");
parent.insertBefore(parent.children[0],parent.children[parent.children.length+1]);
//アニメーション完了時のイベントリスナ 
parent.addEventListener("animationend",{once:true});
}

//戻るボタンを押したときの関数
function modoru() {

//アニメーション発火
parent.classList.add("modoru");
//要素の順番を入れ替え
parent.insertBefore(parent.children[parent.children.length-1],parent.children[0]);
//アニメーション完了時のイベントリスナ
parent.addEventListener("animationend",{once:true});
}