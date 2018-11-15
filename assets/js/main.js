$(document).ready(function(){
  $('#clock').countdown('2018/12/12', function(event) {
  $(this).html(event.strftime('<span class="count-down-wrapper"><span class="single-count-down-item">%w <br><span>Weeks</span></span><span class="single-count-down-item">%d <br><span>Days</span></span><span class="single-count-down-item">%H <br><span>Hours</span></span><span class="single-count-down-item">%M <br><span>Minutes</span></span><span class="single-count-down-item">%S <br><span>Second</span></span></span>'));
});
});