  $(document).ready(function() {

      $('.library-container').each(function(index) {
        $(this).css({
          'opacity': '0',
          'transform': 'translateY(30px)'
        }).delay(100 * index).animate({
          'opacity': '1',
          'transform': 'translateY(0)'
        }, 500);
      });
      
      $('.read-more').hover(
        function() {
          $(this).css({
            'transform': 'scale(1.05)',
            'box-shadow': '0 5px 15px rgba(128, 0, 0, 0.3)'
          });
        },
        function() {
          $(this).css({
            'transform': 'scale(1)',
            'box-shadow': 'none'
          });
        }
      );
      
      $('.library-badge').hover(
        function() {
          $(this).animate({
            'top': '10px'
          }, 200);
        },
        function() {
          $(this).animate({
            'top': '15px'
          }, 200);
        }
      );
      
      
      $('.library-img-container').hover(
        function() {
          $(this).find('img').css('transform', 'scale(1.1)');
        },
        function() {
          $(this).find('img').css('transform', 'scale(1.05)');
        }
      );
    });