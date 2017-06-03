let currentPage = 0; 
let isLoading = false;
let language = 'zh-tw'; // default language
let title = document.getElementById('title');

 // i18n
function chageLanguage(lang) {

     console.log('Language is:' + lang)

     title.textContent = window.I18N[lang].TITLE;
     currentPage = 0;
     language = lang;
     refreshTable();
     appendData(language);
}
 // claer
function refreshTable() {
     $("#content").empty();

}

$(document).ready(function() {
    
     appendData(language); // function appendData
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

     console.log('loading');

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
             $content.append(getTemaplateData(stream));
         }
         currentPage += 20;
         isLoading = false;
     });
}

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
