$('.close').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.sidebar').toggleClass('sidebar-active');
});






