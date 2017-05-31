let currentPage = 0;
let isLoading = false;

function getData(callback) {

    // from var request to request.send() is to replace ajax of jQuery,which means do not use jQuery.Use vanilla.js.
    console.log('loading');

    const type = 'GET';
    const clientId = 'rx55ypcn5s81meroo6b5fagl1bwwkw';
    const limit = 20;
    let twitchAPI = 'https://api.twitch.tv/kraken/streams/?autoplay=false&client_id='+ clientId +'&game=League%20of%20Legends&limit='+ limit +'&offset='+ currentPage;
    const autoplay = false;


    isLoading = true;

    let request = new XMLHttpRequest();
    request.open(type, twitchAPI, true);

    request.onload = function(data) {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = request.responseText;
            callback(null, JSON.parse(data));

        } else {
            console.log('err');
        }
    };
    request.onerror = function(err) {
        console.log(err);
    };
    request.send();

}

function appendData() {
    getData((err, data) => {
        const { streams } = data;
        const $content = document.querySelector('#content');
        for (let stream of streams) {
            const div = document.createElement('div');
            $content.appendChild(div); 
            div.outerHTML = getTemaplateData(stream); 
        }
        currentPage += 10;
        isLoading = false;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    appendData();
    var reverse_height = 200;
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop + window.innerHeight > document.documentElement.scrollHeight - reverse_height) {
            if (!isLoading) {
                appendData();
            }
        }
    })
})

function getTemaplateData(data) {
    var logo = data.channel.logo;
    var placeholderIMG = data.preview.medium;

    if (logo == null) {
        logo = '../images/host.png'; // image of host
    } else if (placeholderIMG == null) {
        placeholderIMG = '../../images/404_preview-320x180.jpg'; // image of placeholder
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
