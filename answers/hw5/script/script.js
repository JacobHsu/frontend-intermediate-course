let currentPage= 0;
let isLoading = false;

$(document).ready(function() {

    appendData();
    const reverse_height= 200;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - reverse_height) {

            if (!isLoading) {
                appendData();
            }
        }

    });
})

function getData(callback) { 

    console.log('loading');

    const clientId = 'rx55ypcn5s81meroo6b5fagl1bwwkw';  
    var mycontentType = 'application/vnd.twitchtv.v5+json';
    const autoplay = false;
    const limit = 20;

    isLoading = true;

    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/?autoplay=' + autoplay + '&game=League%20of%20Legends&limit=' + limit + '&offset=' + currentPage,
        headers: {
             'Client-ID': clientId,
             'Accept': mycontentType
        },
        success: function(data) {
            console.log(data);
            callback(null, data);
        },
        error: function(err) {
            console.log('Error');
            callback(null, err);
        }
    })
}

function appendData() {
    getData((err, data) => {
        const { streams } = data;
        const $content = $('#content');
        for (let stream of streams) {
            $content.append(getTemaplateData(stream));
        }
        currentPage += 20;
        isLoading = false;
    });
}

function getTemaplateData(data) {

    var logo = data.channel.logo;
    var placeholderIMG = data.preview.medium;

    if(logo == null){
        logo ='../../images/host.png'; // image of host
    } else if(placeholderIMG == null){
        placeholderIMG ='../../images/404_preview-320x180.jpg'; // image of placeholder
    }
    return `
            <li class='item'>
                <div class='video'>
                    <img src='${placeholderIMG}' onload='this.style.opacity=1;' />
                    <div class='placeholder'></div>
                </div>
                <div class='avatar'> 
                    <img class='img_' src='${logo}' onload='this.style.opacity=1;'>
                    <div id='info_' class='info'> 
                        <p class='channel'> ${data.channel.status} </p>  
                        <p class='host'> ${data.channel.display_name} </p>
                    </div>
                </div>
            </li>`;
}
