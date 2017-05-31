<h1>HW6-返璞歸真：vanilla js</h1>
<h3>作業說明</h3>
<p>不能使用任何library，只有純粹的JavaScript(vanilla js)。</p>
<h3>Properties</h3>
<p>
<ol>
<li>改寫ajax</li>
    let request = new XMLHttpRequest();
    request.open(type, twitchAPI, true);

    request.onload = function(data) {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = request.responseText;
            callback(null, JSON.parse(data));

        } else {
            // We reached our target server, but it returned an error.
            console.log('err');
        }
    };
    request.onerror = function(err) {
        console.log(err);
    };
    request.send();
<li>改寫appendData</li>
<li>改寫scroll</li>
<li>改寫infinite scroll高度判斷</li>
</ol>
</p>
<h3>自我練習</h3>
<ol>
<li><h4>用 vanilla js 有哪些優缺點？</h4></li>
<p>
<ul>
<li>trade-off(權衡/選擇)：考慮優缺點</li>
<li>優點:<br></li>
  <ol>
  <li>>效率高(考慮到程式規模，規模太小無法發揮作用)</li>
  <li>>節省空間(節省jQuery lib的空間)</li>
  </ol>
<li>缺點:<br></li>
  <ol>
  <li>>不易維護</li>
  <li>>考慮到瀏覽器兼容性問題</li>
  <li>>因別人可能使用jQuery，因此有團隊協作困難</li>
  </ol>
  <li>什麼時候需要用?</li>
  <p>考慮需求的場景</p>
    <ol>
      <li>網速慢的地區</li>
      <li>規模大的公司如google、FB</li>
      <li>給手機使用的網站</li>
    </ol>
   <li>appendChild()也可以拿來append HTML tag</li>
</ul>
</p>
<h5>內容來自直播筆記</h5>
</ol>
<h3>資源</h3>
<a href='http://youmightnotneedjquery.com/'>YOU MIGHT NOT NEED JQUERY</a>
<h1>Demo</h1>
<p>https://clingoram.github.io/frontend-intermediate-course/answers/hw6/index.html</p>

