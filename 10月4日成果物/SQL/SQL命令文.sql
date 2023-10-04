/*SQL命令文*/
SELECT *
FROM Products

SELECT name, price
FROM Products
/*nameとPriceのデータのみを表示*/

SELECT * FROM Products WHERE id = '002';
idが002のデータを表示*/

SELECT * FROM Products WHERE 200 <= price AND price <=500;
/*priceが200以上500以下のデータを表示*/

SELECT * FROM Products 
WHERE name LIKE 'り%'; 
/*りから始めるデータを出力*/

SELECT * FROM Customers
WHERE pref_id IS NULL;
/*pref_idがNULLのデータを表示*/

SELECT * FROM Products
ORDER BY price DESC;
/*priceデータを降順に並び替える*/

INSERT INTO Products(name, price, id) VALUES('スイカ', 1000, '006');
/*登録する順番が変化しても登録可能、対応したデータを入力*/

UPDATE Products SET price=1200
WHERE id ='006';
/*id006のpriceを変更*/

DELETE FROM Products WHERE id='006';
/*データの削除*/

SELECT P.id, P.name, P.price
FROM Products P;
/*Productsを別名Pとする*/

SELECT id AS ID, name AS NAME, price AS PRICE
FROM Products P;
/*idやname、priceを大文字で表示（別名）*/

SELECT C.id, C.name AS customer_name, P.name AS pref_name
FROM Customers C /*結合元データ*/
INNER JOIN Prefectures P/*結合するデータ*/
ON C.pref_id = P.id
/*CUstomersとPrefecturesのidが一緒なら結合*/

SELECT C.name AS customer_name, G.name AS product_name, P.quantity
FROM Purchases P
INNER JOIN Customers C
ON P.customer_id = C.id
INNER JOIN Products G
ON P.product_id = G.id;
/*3つのデータベースの結合*/

SELECT SUM(price) AS total, AVG(price) AS average
FROM Products;
/*priceの合計と平均を表示　そのまま表示されるため別名表示を追加*/

SELECT MAX(price) AS MAX, MIN(price) AS min
FROM Products;
/*priceの最大値と最小値*/

SELECT COUNT(pref_id) AS Kazu
FROM Customers;
/*レコード数のカウント ()の中を＊に変えるとNULLもカウント*/
/*()にDISTINTを追加すると重複を省く*/

SELECT pref_id, COUNT(pref_id) AS kazu
FROM Customers
GROUP BY pref_id;
/*pref_idの数をカウントし、pref_idを表示する*/
/*GROUP BYは左の方が優先度が高い*/
/*HAVINGに条件を追加することで表示するデータを限定できる*/

SELECT id, name, price
FROM Products
WHERE id IN (SELECT product_id FROM Purchases GROUP BY product_id);
/*Productsの中からPurchasesにあるproduct_idのみを表示する*/

START TRANSACTION;
/*トランザクションの開始*/
ROLLBACK
/*トランザクションからロールバックまでの処理でエラーがあればトランザクション処理前にもどる*/
COMMIT
/*処理の確定*/