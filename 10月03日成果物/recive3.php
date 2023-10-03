<?php
print "都道府県: ";
print $_REQUEST["PREF"];
print "<br>";

print "部署： ";
if (isset($_REQUEST["WORK"])){
    foreach ($_REQUEST["WORK"] as $data){
        print $date;
    }
}else{
    print "なし";
}

print "<br>";
?>