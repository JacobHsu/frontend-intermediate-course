$(function() {

    console.log('JavaScript is loading...');

    var twitchURL = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends';
    var myContentType = 'application/vnd.twitchtv.v5+json';
    var clientID = 'rx55ypcn5s81meroo6b5fagl1bwwkw';

    function getData() {

        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
            headers: {
                'Accept':'application/vnd.twitchtv.v5+json',
                'Client-ID': 'rx55ypcn5s81meroo6b5fagl1bwwkw' // need to register a 'developer application' on the connections page of Twitch account.
            },

            success: function(data) {

                console.log('ajax is loading successfully!!');

                for (var i = 0; i < 20; i++) {
                    var $content =`
                    <li class='item'>
                        <div class='video_'>
                            <img class='placeholder' src='${data.streams[i].preview.medium}' />
                        </div>
                        <div class='avatar'> 
                            <img class='img_' src='${data.streams[i].channel.logo}'>
                            <div id='info_' class='info'> 
                                <p class='channel'> ${data.streams[i].channel.status} </p>  
                                <p class='host'> ${data.streams[i].channel.display_name} </p>
                            </div>
                        </div>
                    </li>`;
                    $( '#content').append($content);
                    $content = $();
                }
            },
            error: function(data) {
                console.log('Error',data);
            }
        });
    }
    getData();
})
