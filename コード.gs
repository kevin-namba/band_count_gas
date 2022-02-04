//https://docs.google.com/spreadsheets/d/{{ココがspreadsheetId}}/
var spreadsheetId = '';
//シートの名前，デフォルトは'フォームの回答 1'
var sheetname = 'フォームの回答 1'

//実行時にwebサービスを実行させる
function doGet(e) {
  var t = HtmlService.createTemplateFromFile("index.html");
  return t.evaluate();
}

//スプレッドシートのデータを読み込む
function GetSpreadsheet(){
  var spreadsheetId = '1wPVbWYVqlVAbuzHFMgxsCDT1hJYBe1kxjJwZrKDFyYA';
  var sheetname = 'フォームの回答 1';
  //操作するスプレッドシートIDとシート名を指定して開く
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetname);
  var last_col = sheet.getLastColumn();  //最終列取得
  var last_row = sheet.getLastRow();     //最終行取得
  //データを取得する範囲を指定して取得し、2次元配列で返す
  members_arr=sheet.getRange(2, 4, last_row, 10).getValues();
  member_and_count_list = []//{name:'名前',count:1}
  
  for(var i=0;i<members_arr.length;i++){
    members = members_arr[i];
    counted_members = [];
    for(var j=0;j<members.length;j++){
      member = members[j];
      if(counted_members.includes(member)){
      }else{
        counted_members.push(member);
        var hasMember = member_and_count_list.some(value => (value.name === member));
        if(hasMember){
          member_index = member_and_count_list.findIndex(({name}) => name === member);
          member_and_count_list[member_index]['count'] = member_and_count_list[member_index]['count']+1;
        }else{
          member_and_count_list.push({name:member,count:1});
        }
      }
    }
  }
  console.log(member_and_count_list);
  return member_and_count_list;
}


