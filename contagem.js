      (function($){$.fn.countdown=function(options,callback){var thisEl=$(this);var settings={'date':null,'format':null};if(options){$.extend(settings,options);}
                                                             function countdown_proc(){var eventDate=Date.parse(settings['date'])/1000;var currentDate=Math.floor($.now()/1000);if(eventDate<=currentDate){callback.call(this);clearInterval(interval);}
                                                                                       var seconds=eventDate- currentDate;var days=Math.floor(seconds/(60*60*24));seconds-=days*60*60*24;var hours=Math.floor(seconds/(60*60));seconds-=hours*60*60;var minutes=Math.floor(seconds/60);seconds-=minutes*60;if(days==1){thisEl.find(".timeRefDays").text("Dia");}else{thisEl.find(".timeRefDays").text("days");}
                                                                                       if(hours==1){thisEl.find(".timeRefHours").text("Hora");}else{thisEl.find(".timeRefHours").text("hours");}
                                                                                       if(minutes==1){thisEl.find(".timeRefMinutes").text("minute");}else{thisEl.find(".timeRefMinutes").text("minutes");}
                                                                                       if(seconds==1){thisEl.find(".timeRefSeconds").text("second");}else{thisEl.find(".timeRefSeconds").text("seconds");}
                                                                                       if(settings['format']=="on"){days=(String(days).length>=2)?days:"0"+ days;hours=(String(hours).length>=2)?hours:"0"+ hours;minutes=(String(minutes).length>=2)?minutes:"0"+ minutes;seconds=(String(seconds).length>=2)?seconds:"0"+ seconds;}
                                                                                       if(!isNaN(eventDate)){thisEl.find(".days").text(days);thisEl.find(".hours").text(hours);thisEl.find(".minutes").text(minutes);thisEl.find(".seconds").text(seconds);}else{alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");clearInterval(interval);}}
                                                             countdown_proc();interval=setInterval(countdown_proc,1000);}})(jQuery);
      //]]>
    </script>
    <!--
_____    _ _ _     _
| ____|__| (_) |_  | |__   ___ _ __ ___
|  _| / _` | | __| | '_ \ / _ \ '__/ _ \
| |__| (_| | | |_  | | | |  __/ | |  __/
|_____\__,_|_|\__| |_| |_|\___|_|  \___|
Edit date: "4 december 2026 11:20:00" with your own launch date.
Happy blogging from BTemplates.com :)
-->
    <script type='text/javascript'>
      //<![CDATA[
      jQuery.noConflict();
      jQuery(document).ready(function() {
        jQuery("#countdown").countdown({
          date: "4 december 2019 11:20:00", //add the countdown's end date (i.e. 3 november 2012 12:00:00)
          format : "on"
        });
      });