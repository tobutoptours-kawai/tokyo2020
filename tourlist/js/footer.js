//共通パーツ読み込み
$(function() {
    $("#footer").load("../footer.html");
});



// function writeFooter(rootDir){
//     $.ajax({
//         url: rootDir + "footer.html",
//         cache: false,
//         async: false,
//         success: function(html){

//             html = html.replace(/\{\$root\}/g, rootDir);
//             document.write(html);
//         }
//     });
// }