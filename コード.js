

function send_Main(text = 'none'){
 UrlFetchApp.fetch("https://slack.com/api/chat.postMessage", {
      'method': 'post',
      'payload': {
        "token": PropertiesService.getScriptProperties().getProperty('SLACK_TOKEN'),
        "channel":"#random",
        "text":text,
      },
    });
}

function myFunction() {
  var spread = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spread.getSheetByName('シート1');
  
  var Robokon_HTML_OLD = sheet.getRange(1,1).getValue();
  var Robokon_HTML = UrlFetchApp.fetch("http://www.official-robocon.com/kosen/").getContentText();
  if(Robokon_HTML_OLD === Robokon_HTML){
    console.log("No diff");
  }else{
    console.log("diff on");
    send_Main("ロボコンの公式サイトに何らかの更新があったようです.");
   
  }
  sheet.getRange(1,1).setValue(Robokon_HTML);
  
}
