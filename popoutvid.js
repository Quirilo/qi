var tag = document.createElement('script');
  tag.src = "//www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player,
        width = 680,
        height = 350,
        videoContainer = '<div id="video"></div>',
        videoStreams = ['Qp2rN_uWaks', 'sNIOA7rUakE', 'Snm5M5kar2A', ];

      // get random video from array
    Array.prototype.shuffle = function () {
        for (var i = this.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = this[i];
            this[i] = this[j];
            this[j] = tmp;
        }

        return this;
    };

    function randomVideo() {
        var stream = videoStreams.shuffle();
        return stream[0];
    };

    // create youtube player
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('video', {
          height: height,
          width: width,
    
    playerVars: { 'autoplay': 0, 'controls': 1, },
          videoId: randomVideo(),
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
    };

    // when video ends
    function onPlayerStateChange(event) {        
        if(event.data === 0) {            
            document.location.reload(true);
        }
    };