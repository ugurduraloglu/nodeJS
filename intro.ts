const http = require("http");
const myDt = require("./exportsDemo.js"); //modülü require etmek gerekli
let log = require("./log.js");
var fs = require("fs");

http
  .createServer(function (request, response) {
    console.log(request.url);
    if (request.url == "/admin") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(
        "Tarih : " +
          myDt() +
          " " +
          "<html><body><strong>Admin Sayfasi</strong></body></html>"
      );
    } else if (request.url == "/") {
      response.writeHead(200, { "Content-Type": "text/html" }); //client bilgilendirmek için kullanılır.
      response.write("<html><body><strong>Ana Sayfa</strong></body></html>");
    } else if (request.url == "/customer") {
      response.writeHead(200, { "Content-Type": "application/json" }); //Header bilgilerini veririz content type tanımlarız.
      response.write(JSON.stringify({ name: "Ugur", lastName: "Durmus" }));
    }

    response.end(" Sayfa Sonu hep var"); //response.end eklenmesi gereken bir response türü aksi halde çalışmaz.
  })
  .listen(8080);

log.information("sunucu yayına geçti");
log.fault("hata var");
console.log(myDt()); //oluşturulan modüle bu şekilde erişim sağlandı.

///////////**NODE.JS FİLESTREAM**////////////

fs.readFile("dosya.txt", "utf8", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log(data);
});

// fs.writeFile(
//   "dosya2.txt",
//   "Ugur Durmus(data veya obje yazılır)",
//   function (hata) {
//     if (hata) {
//       throw hata;
//     }
//     console.log("yazıldı");
//   }
// );

// fs.appendFile(
//     "dosya2.txt",
//     "duralog Durmus(data veya obje yazılır.)",
//     function (hata) {
//       if (hata) {
//         throw hata;
//       }
//       console.log("dosya yazıldı.");
//     }
//   );
fs.open('yeni.txt','w',function(hata){
  if(hata){
    throw hata;
  } 
});

// fs.unlink("dosya2.txt", function (hata) {
//     if (hata) {
//       throw hata;
//     }
//     console.log("Silindi.");
//   });
