
(function() {

				var overlay = document.getElementById( 'overlay' ),
					overlayClose = overlay.querySelector( 'button' ),
					header = document.getElementById( 'header' )
					switchBtnn = header.querySelector( 'button.slider-switch' ),
					toggleBtnn = function() {
						if( slideshow.isFullscreen ) {
							classie.add( switchBtnn, 'view-maxi' );
						}
						else {
							classie.remove( switchBtnn, 'view-maxi' );
						}
					},
					toggleCtrls = function() {
						if( !slideshow.isContent ) {
							classie.add( header, 'hide' );
						}
					},
					toggleCompleteCtrls = function() {
						if( !slideshow.isContent ) {
							classie.remove( header, 'hide' );
						}
					},
					slideshow = new DragSlideshow( document.getElementById( 'slideshow' ), { 
						// toggle between fullscreen and minimized slideshow
						onToggle : toggleBtnn,
						// toggle the main image and the content view
						onToggleContent : toggleCtrls,
						// toggle the main image and the content view (triggered after the animation ends)
						onToggleContentComplete : toggleCompleteCtrls
					}),
					toggleSlideshow = function() {
						slideshow.toggle();
						toggleBtnn();
					},
					closeOverlay = function() {
						classie.add( overlay, 'hide' );
					};

				// toggle between fullscreen and small slideshow
				switchBtnn.addEventListener( 'click', toggleSlideshow );
				// close overlay
				overlayClose.addEventListener( 'click', closeOverlay );

			}());

var $fullinput = $('.fullinput'),
    $trigger = $('.circle');

$trigger.click(function(){
  $fullinput.addClass('open');
  $trigger.addClass('open');
})

$('.close-button').click(function(){
  $fullinput.removeClass('open');
  $trigger.removeClass('open');
})

$('.btn-send').click(function(){
  if($(this).valid()){
    document.getElementById("client").reset();
    $fullinput.removeClass('open');
    $trigger.removeClass('open');
    /*$('.wrap').addClass('fly');*/
  }
});

var get_height = window.innerHeight;
var get_height1 =  get_height - 25;
var get_container = document.getElementById('container');
get_container.style.height =  get_height1 + 'px';

//Image Hover
jQuery(document).ready(function(){
    jQuery(function() {
        jQuery('ul.da-thumbs > li').hoverdir();
    });
});

