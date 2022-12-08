$(document).ready(function () {
    $('.catpri').click(function(e) {
      if ($(this).parent().hasClass('menusecAtivo')) {
        $(this).parent().removeClass('menusecAtivo');
        return false;
      }
      else {
        $('.catpri').parent().removeClass('menusecAtivo');
      }
      $ (this).parent().addClass('menusecAtivo');
  
      e.stopPropagation();
    });
  });