function nhap(){
  var trangTin = document.getElementById('trangtin').value

  var tieuDe = document.getElementById('tieuDe').value+""
  var noiDung = document.getElementById('noiDung').value+""
  noiDung = noiDung.replace(/[\r\n]/g, "\n");
  var dienTich = document.getElementById('dienTich').value+""
  


  switch(trangTin){

    case 'phonhadat':
      var tabId
      chrome.tabs.getSelected(null, function(tab){ 
        var tabId=tab.id
      })

      chrome.tabs.executeScript(
        tabId,
        {
          file:'js/jquery.min.js'
        },
        function(){
          chrome.tabs.executeScript(
            tabId,
            {
              code: "var tieuDe = '"+tieuDe+"'; var noiDung = '" + noiDung+"'; var dienTich='"+dienTich+"';"
            },
            function(){
              chrome.tabs.executeScript(
                tabId,
                {
                  file:'js/tinbatdongsan.js'
                }
                )
            }
            )
        })

   

    break;
    case 'dothidiaoc':
    case 'tinbatdongsan':
      //code here
    break;
    default:
  }

}


function xoa(){
  document.getElementById('tieuDe').value = ""
  document.getElementById('noiDung').value = ""
  document.getElementById('dienTich').value = ""

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('xoaTrang').addEventListener('click',xoa)
  document.getElementById('nhapNoiDung').addEventListener('click',nhap)
  document.getElementById('tieuDe').addEventListener('change',function(){
    var theValue = document.getElementById('tieuDe').value;
    chrome.storage.local.set({'tieuDe': theValue});
  })
  document.getElementById('noiDung').addEventListener('change',function(){
    var theValue = document.getElementById('noiDung').value;
    chrome.storage.local.set({'noiDung': theValue});
  })
   document.getElementById('dienTich').addEventListener('change',function(){
    var theValue = document.getElementById('dienTich').value;
    chrome.storage.local.set({'dienTich': theValue});
  })
})



    chrome.storage.local.get('tieuDe', function (result) {
      if(result.tieuDe != null)
        document.getElementById('tieuDe').value = result.tieuDe;
    });

    chrome.storage.local.get('noiDung', function (result) {
      if(result.noiDung != null)
        document.getElementById('noiDung').value = result.noiDung;
    });
     chrome.storage.local.get('dienTich', function (result) {
      if(result.dienTich != null)
        document.getElementById('dienTich').value = result.dienTich;
    });