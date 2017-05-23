$(function() {

    console.log('JavaScript is loading...');

    function getData() {

        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': 'rx55ypcn5s81meroo6b5fagl1bwwkw' // need to register a 'developer application' on the connections page of Twitch account.
            },

            success: function(data) {

                console.log('ajax is loading successfully!!');

                for (var i = data.result.streams; i <=data.result.streams.length; i++) {
                    // iframe
                    $('.video_' + i).attr('src', 'https://player.twitch.tv/?autoplay=false&channel=' + data.streams[i].channel.name);
                    // host icon
                    $('.img_' + i).attr('src', data.streams[i].channel.logo);
                    // status of channel
                    $('#info_' + i).html('<p class="channel">' + data.streams[i].channel.status + '</p><p class="host">' + data.streams[i].channel.display_name + '</p>');
                }
            },
            error: function(err) {
                console.log('Error');
            }
        });
    }
getData();
})
