<template>
  <div class="player">
    <video id="player" autoplay playsinline></video>
  </div>
</template>

<script>

export default {
    name:"player",
   
    mounted() {
        this.playerInit()
    },
    methods:{
        playerInit() {
            const video = document.querySelector('video');
            let source = this.$route.query.src
            // For more options see: https://github.com/sampotts/plyr/#options
            // captions.update is required for captions to work with hls.js
            const player = new Plyr(video, {iconUrl:require('./plyr.svg'),
            ratio:"16:9",
            controls: [
                'play-large',
                // 'restart',
                // 'rewind',
                'play',
                // 'fast-forward',
                // 'progress',
                // 'current-time',
                // 'duration',
                'mute',
                'volume',
                // 'captions',
                // 'settings',
                'pip',
                'airplay',
                // 'download',
                'fullscreen',
            ],});
            if (!Hls.isSupported()) {
                video.src = source;
            } else {
                // For more Hls.js options, see https://github.com/dailymotion/hls.js
                const hls = new Hls();
                hls.loadSource(source);
                hls.attachMedia(video);
                window.hls = hls;
                
                // Handle changing captions
                player.on('languagechange', () => {
                    // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
                    setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
                });
            }
            
            // Expose player so it can be used from the console
            window.player = player;
        }
    }
}
</script>