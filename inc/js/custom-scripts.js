jQuery(document).ready(function(){
		
	jQuery('.navtoggle').click(function(){
    var $this = jQuery(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('Read Less →');         
    } else {
        $this.text('Read More →');
    }
});

var windowSize = jQuery(window).width();
if (windowSize > 978) {

      var child = jQuery("#social div").children();
      var lis = jQuery(child);
                for(var i = 0; i < lis.length; i+=3) {
                    lis.slice(i=3, i+=11).wrapAll("<div class='collapse collapse-icon'></div>");
      }
  }else{
       jQuery(".icontoggle").css('display', 'none');
  }

} );
