// carousal pause play jquery 
 // shorthand for $( document).ready(function() { ... });
 $(function() {

    //carousel interval 2sec
    $( ".carousel" ).carousel( { interval: 2000 } );

    //on click on carousel btn
    $( "#carouselButton" ).click( function( ) {

        //if btn child <i>(fontawsome logo) is fa-pause
        if ( $( "#carouselButton" ).children( "i" ).hasClass( "fa-pause" ) ) {

            //pause carousel
            $( ".carousel" ).carousel( "pause" );
            //show play btn
            $( "#carouselButton" ).children( "i" ).removeClass( "fa-pause" );
            $( "#carouselButton" ).children( "i" ).addClass( "fa-play" );

        } else {

            //play carousel
            $( ".carousel" ).carousel( "cycle" );
            //show pause btn
            $( "#carouselButton" ).children( "i" ).removeClass( "fa-play" );
            $( "#carouselButton" ).children( "i" ).addClass( "fa-pause" ); 

        }

    });

});