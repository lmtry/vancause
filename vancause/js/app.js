$(document).ready(function() {
  // $('#tab li').each(function(index) {
  //   var LiNode=$(this);
  //   $(this).mouseover(function() {
  //     timoutid=setTimeout(function(){
  //       $('div.contentshow').removeClass('contentshow');
  //       $('#tab li.on').removeClass('on');
  //       $('.contentfirst').eq(index).addClass('contentshow');
  //       Linode.addClass('on');
  //     },300);
  //
  //   }).mouseout(function() {
  //     clearTimeout(timoutid);
  //   });
  // });
  $('#accordion').accordion();
});
