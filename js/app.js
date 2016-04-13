'use strict';
$(function () {

    const BV = new $.BigVideo();

    function randomizeVideos() {
        const videos = [
                        'videos/mac.mp4',
                        'videos/sydney.mp4',
                        'videos/traffic.mp4'
                      ];
        videos.sort(function () {
            return 0.5 - Math.random();
        }); // random order on load
        console.log(videos);
        return videos;
    }

    function showLiveBackground() {
        BV.init();
        BV.showPlaylist(randomizeVideos(), {ambient:true});
    }
    // Playlist button click starts video, enables autohiding
    $('.playlist-btn').on('click', function (e) {
        e.preventDefault();
        BV.show($(this).attr('href'));
    });
    //pause video
    $('#pause').on('click', function (e) {
        BV.getPlayer().pause();
    });
    //play video
    $('#play').on('click', function (e) {
        BV.getPlayer().play();
    });
    //reload video
    $('#reload').on('click', function (e) {
        BV.getPlayer().load();
    });

    showLiveBackground();
});