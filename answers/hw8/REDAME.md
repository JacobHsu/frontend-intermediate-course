<h1>HW8-當我們包在一起：Webpack</h1>
<h3>作業說明</h3>
<p>利用webpack把 jQuery 以及其他 js 檔案都打包成一個bundle.js</p>
<h3>作業規範</h3>
<p>index.html 裡面的 js 檔案只能引入一個(bundle.js)<br>
不能把任何東西附加到window上（例如說：windiw.lang = 'en'）</p>
<h3>自我練習</h3>
<ol>
<li><h4>webpack 可以把 CSS 也當作 library 那樣引入，你可以試試看</h4></li>
<p>不知道是否正確，但我下載了css-loader、style-loader還有url-loader<br>
在webpack.config.js中的module裡面的loader打上想載入的loader。<br>
loaders: [<br>
  { test: /\.css$/, loader: ['style-loader', 'css-loader'] }, // to load css<br>
  { test: /\.(png|jpg)$/, loader: 'url-loader' } // to laod img <br>
]<br>
然後，在index.js中require('./style/css/style.css');</p>
</ol>
<h1>Demo:</h1>
<p>https://clingoram.github.io/frontend-intermediate-course/answers/hw8/index.html</p>
