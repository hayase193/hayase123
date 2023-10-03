<?php
print "性別: ";
print $_REQUEST["SEIBETU"];
print "<br>";

print "好きな科目： ";
if (isset($_REQUEST["KAMOKU"])){
    foreach ($_REQUEST["KAMOKU"] as $data){
        print $date;
    }
}else{
    print "なし";
}

print "<br>";
?>