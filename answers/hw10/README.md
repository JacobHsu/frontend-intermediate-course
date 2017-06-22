<h1>HW10-改掉你的壞習慣：ESLint 與 standard</h1>
<h2>作業說明</h2>
每個人寫出來的code都不一樣，可藉由現成工具，幫助改正code，讓code一致。
<h2>作業規範</h2>
<ol>
<li>在 <a href='http://eslint.org/'>ESLint</a> 與<a href='https://github.com/feross/standard'> standard </a>兩套裡面挑一套使用並通過檢測。</li>
<li>如果你喜歡分號，也歡迎使用分號版的<a href='https://github.com/Flet/semistandard'>semistandard</a></li>
</ol>
<h2>後記</h2>
<ul>
<li>使用有分號的semistandard做語法檢測，並安裝:</li>
<code>npm install -g semistandard</code><br>
<code>npm install --save-dev semistandard</code>
<li>為了比較好閱讀，安裝snazzy:</li>
<code>npm install -g snazzy</code><br>
<code>npm install --save-dev snazzy</code>
<li>並在package.json設定 semistandard的ignore配置，避免檢驗到不必要的檔案</li>
 "semistandard": {<br>
    "ignore": [<br>
      "/dist/*.js",<br>
      "webpack.config.js"<br>
    ]<br>
  }<br>
  </ul>
我原本安裝在Local，但我發現我打了$ semistandard 後沒反應，於是又在package.json加了:"test": "semistandard && node my-normal-tests-littered-with-semicolons.js"，之後npm test，它終於開始檢測了!但無法auto fix。<br>
後來，我改以global安裝，也安裝了snazzy，它可以正常檢測了。

進行檢測:<br>
$ semistandard <br>
auto fix:<br>
$ semistandard --fix<br>
好讀:<br>
$ semistandard --verbose | snazzy<br>
<hr>
<h3>後記</h3>
Huli說如果安裝在Local，可在Package.json中的"test"加上"semistandard"，之後npm test
<h1>Demo</h1>
https://clingoram.github.io/frontend-intermediate-course/answers/hw10/index.html

