$(document).ready(function() {
   $(".nav li.disabled a").click(function() {
      return false;
   });

   // jQuery to enable link to tab  -- thanks to https://stackoverflow.com/users/4007579/manu-l and his solution on https://stackoverflow.com/questions/19814481/linking-to-a-bootstrap-tab-from-outside-how-to-set-the-tab-to-active
       var hash = window.location.hash;
       // If a hash is provided
       if(hash && hash.length>0)
       {
           // Manage Pill titles
           $('ul.nav-pills li a').each(function( index ) {
               if($(this).attr('href')==hash)
                   $(this).parent('li').addClass('active');
               else
                   $(this).parent('li').removeClass('active');
           });
           // Manage Tab content
           var hash = hash.substring(1); // Remove the #
           $('div.tab-content div').each(function( index ) {
               if($(this).attr('id')==hash)
                   $(this).addClass('active');
               else
                   $(this).removeClass('active');
           });
       }

});
// document.ready
