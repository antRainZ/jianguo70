function index(data) {
    // $.getJSON("json/index.json", "", function(data) {
    //     　//each循环 使用$.each方法遍历返回的数据date
    //     $("#pos1").text(data.pos1);
    //     $("#pos2").text(data.pos2);
    //     $("#pos3").text(data.pos3);
    //     $("#pos4").text(data.pos4);
    // });
    // $.ajax({
    //     crossDomain: true,
    //     url: "json/index.json?callback=?", //json文件位置
    //     type: "GET", //请求方式为get
    //     dataType: "jsonp",
    //     jsonp: "callback",
    //     jsonpCallback: "handler",
    //     success: function (data) { //请求成功完成后要执行的方法 
    //         $("#pos1").text(data.pos1);
    //         $("#pos2").text(data.pos2);
    //         $("#pos3").text(data.pos3);
    //         $("#pos4").text(data.pos4);
    //     }
    // })
    //console.log(data);
    if (data == null || data == undefined) return;
    $("title").text(data.title);
    var  s = $("head").html();
    $("head").html(s+'<link rel="icon" href="'+data.ico+'" >');
    $("#pro").text(data.pro);
    $("#pos1").text(data.pos1);
    $("#pos1").attr("href", data.pos1a);
    $("#pos2").text(data.pos2);
    $("#pos2").attr("href", data.pos2a);
    $("#pos3").text(data.pos3);
    $("#pos3").attr("href", data.pos3a);
    $("#pos4").text(data.pos4);
    $("#pos4").attr("href",data.pos4a);
    var str = "";
    $.each(function (i) {
        if (i == 0) {
            str += '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
        } else {
            str += '<li data-target="#myCarousel" data-slide-to="' + i + '" ></li>';
        }
        //<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    });
    $("#carousel_ol").empty();
    $("#carousel_ol").html(str);
    str = "";
    $.each(data.carousel_img, function (i, item) {
        if (i == 0) {
            str += '<div class="item active">';
            str += '<img src="' + item.img + '"></img> </div>'
        } else {
            str += '<div class="item">';
            str += '<img src="' + item.img + '"></img> </div>'
        }
        //     <div class="item active">
        //     <img class="firsst-slide" alt="First slide" id="first-slide" src="img/head1.jpg">
        // </div>
    });
    $("#carousel_img").empty();
    $("#carousel_img").html(str);
    $("#ft").html("<p>"+data.ft+"</p>");
}

function chairman(data){
    if (data == null || data == undefined) return;
     // <div class="col-lg-4">
    // <img class="img-circle" src="" width="140" height="140">
    // <h2>Heading</h2>
    // <p></p>
    // </div>
    var str = "";
    $.each(data.chair,function (i,item){
        str += '<div class="item> <div class="col-lg-4"> ';
        str += '<img class="img-circle" src="'+item.img+'" width="140" height="140">';
        str += '<h2>'+item.h2+'</h2>';
        str += '<p>'+item.p+'</p></div></div>';
    });
    $("#owl-demo").html(str);
}

function hdata(data) {
    if (data == null || data == undefined) return;
    $("#btitle").text(data.btitle);
    $("#ntitle").text(data.ndata);
    var str = "";
    $.each(data.first, function (i, item) {
        str += '<li>';
        str += '<div class="item-info02"><a>';
        str += '<strong class="item-number02 counter" ';
        str += 'data-speed="1500">' + item.sdata + '</strong>';
        str += '<p class="item-txt02">' + item.pdata + '</p>';
        str += ' </a></div> </li>'
    })
    $("#before").empty();
    $("#before").html(str);
    str  = "";
    $.each(data.second, function (i, item) {
        str += '<li>';
        str += '<div class="item-info02"><a>';
        str += '<strong class="item-number02 counter" ';
        str += 'data-speed="1500">' + item.sdata + '</strong>';
        str += '<p class="item-txt02">' + item.pdata + '</p>';
        str += ' </a></div> </li>'
    })
    $("#now").html(str);
    // <li>
    // <div class="item-info02"><a>
    //         <strong class="item-number02 counter"
    //             data-speed="1500">42655</strong>
    //         <p class="item-txt02">全日制学生</p>
    //     </a></div>
    // </li>
}

function ysu(data) {
    if (data == null || data == undefined) return;
    $("#ytitle").text(data.title);
    var str = "";
    $.each(data.first, function (i, item) {
        str += '<li>';
        str += '<div class="item-info02"><a>';
        str += '<strong class="item-number02 counter" ';
        str += 'data-speed="1500">' + item.sdata + '</strong>';
        str += '<p class="item-txt02">' + item.pdata + '</p>';
        str += ' </a></div> </li>'
    })
    $("#ysu").empty();
    $("#ysu").html(str);
}

function his(data) {
    if (data == null || data == undefined) return;
    // <div class="timeline">
    //                         <a href="#" class="timeline-content">
    //                             <h3 class="title">Web Designing</h3>
    //                             <div class="inner-content">
    //                                 <div class="timeline-icon">
    //                                     <i class="fa fa-globe"></i>
    //                                 </div>
    //                                 <p class="description">
    //                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dolor in,
    //                                     maiores natus ipsum dolor sit amet, consectetur adipisicing elit. Alias animi
    //                                     dolor in, maiores natus.
    //                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dolor in,
    //                                     maiores natus ipsum dolor sit amet, consectetur adipisicing elit. Alias animi
    //                                     dolor in, maiores natus.
    //                                 </p>
    //                             </div>
    //                         </a>
    //                     </div>
    $("#main_timeline").empty();
    var str = ""
    $.each(data.first, function (i, item) {
        str += '<div class="timeline"> <a href="#" class="timeline-content">';
        str += '<h3 class="title">' + item.h + '</h3><div class="inner-content" ><i  class="fa fa-globe"></i><p class="description">';
        str += item.p + " </p> </div> </a> </div>"
    });
    $("#main_timeline").html(str);
}