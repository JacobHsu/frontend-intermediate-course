// requires different files from others 
var style = require('./style/css/style.css');
var i18n = {
    en:require('./i18n/lang-en.js'),
    tw:require('./i18n/lang-zh-tw.js')
};
let currentPage = 0; 
let isLoading = false;
let language = 'zh-tw'; // default language
let theTitle = document.getElementById('title');
document.getElementById('btn').addEventListener('click',changeLanguage);

// i18n
function changeLanguage(lang) {

    var e = event.target;
    const attr = e.getAttribute('data-selectLang');

    if (attr === 'en' || attr === 'zh-tw') {

        theTitle.innerHTML = i18n[attr].TITLE; // switch the language of stream.

        if( attr === 'zh-tw') {
            console.log('你正使用' + ' ' + i18n[attr].WORDS + '觀看Twitch。')
        } else {
            console.log("You're viewing Twitch in"+' '+ i18n[attr].WORDS);
        }

        language = attr;
        currentPage = 0;
        $('#content').empty(); // clear
        appendData(language);
    }
}

$(document).ready(function infiniteScroll() {

    appendData(language); 
    const reverse_height = 200;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - reverse_height) {

            if (!isLoading) {
                appendData(language);
            }
        }
    });
})

function getData(lang, callback) {

    console.log('Loading data.');

    const clientId = 'rx55ypcn5s81meroo6b5fagl1bwwkw'; 
    const mycontentType = 'application/vnd.twitchtv.v5+json';
    const autoplay = false;
    const limit = 20;

    isLoading = true;

    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/?autoplay=' + autoplay + '&game=League%20of%20Legends&limit=' + limit + '&offset=' + currentPage + '&language=' + lang,
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

function appendData(lang) {
    getData(lang, (err, data) => { 
        const { streams } = data;
        const $content = $('#content');
        for (let stream of streams) {
            $content.append(getTemplateData(stream));
        }
        currentPage += 20;
        isLoading = false;
    });
}

function getTemplateData(data) {

    var logo = data.channel.logo; // host's logo
    var placeholderIMG = data.preview.medium; // placeholder
    var name = data.channel.display_name;
    var status = data.channel.status;

    if (logo === null) {
        logo = '../images/host.png'; // image of host
    } else if (placeholderIMG === null) {
        placeholderIMG = '../../images/404_preview-320x180.jpg'; // image of placeholder
    }

    return `
            <li class='item'>
                <div class='video'>
                    <img class='live_video' src='${placeholderIMG}' onload='this.style.opacity=1;'>
                    <div class='placeholder'></div>
                </div>
                <div class='avatar'> 
                    <img class='img_' src='${logo}' onload='this.style.opacity=1;'>
                    <div id='info_' class='info'> 
                        <p class='channel'> ${status} </p>  
                        <p class='host'> ${name} </p>
                    </div>
                </div>
            </li>`;
}
