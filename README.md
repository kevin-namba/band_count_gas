# band_count_gas
## 1.	概要
Googleフォームにより作成されたスプレッドシートから，サークル員がそれぞれ何バンド組んでいるかを出力する．出力されたものはそのままエクセルにコピペすることができる．
## 2.	構成
・スプレッドシート
　Googleフォームにより作成されたスプレッドシート
・homes_sum
　集計するアプリ．コード.gsとindex.htmlから構成される．
## 3.	想定するスプレッドシート
Googleフォームで出力された形式とする．カラムは以下を想定する．
時刻	バンド名	バンマス	Vo1	Vo2	Vo3	Vo4	Gt1	Gt2	Ba	Dr	Key1	Key2	他	連絡先	セトリ

パートを増やしたい場合は，
https://qiita.com/cazimayaa/items/224daebe536799e5a8a2
を参考にして，コード.gsの21行目のgetRangeの引数を変更すること．
 
## 4.	使用方法
(i)コード.gsのスプレッドシートのIDとシート名を入力する．
(ii)デプロイ→新しいデプロイを作成→種類の選択→ウェブアプリ
(iii)次のユーザーで実行(自分のメールアドレス)，アクセスできるユーザー(全員)
(iv)スプレッドシートへのアクセスのために承認が必要.自分で作ったアプリなので警告が出てくるが，気にしなくていい．詳細から安全でないページに移動を押して，アクセスを許可する．
(v)デプロイ→デプロイを管理　URLを押すと，集計結果が表示される
## 5.	注意点
・空白も名前としてカウントされます
・その他パートの欄の人数は集計にされません

