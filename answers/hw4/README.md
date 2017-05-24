<h1>HW4-從假資料到真資料：Ajax 與 API 串接</h1>
<h3>自我練習</h3>
<ol>
<li><h4>HTTP method 有哪幾個？有什麼不一樣？</h4></li>
<p>
<ul>
<li>GET: 讀取資源 (safe & idempotent)</li>
<li>PUT: 替換資源 (idempotent)</li>
<li>DELETE: 刪除資源 (idempotent)</li>
<li>POST: 新增資源；也作為萬用動詞，處理其它要求</li>
<li>PATCH: 更新資源部份內容</li>
<li>HEAD: 類似GET，但只回傳HTTP header (safe & idempotent)</li>
</ul>
</p>
<li><h4>GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？</h4></li>
<p>
<ul>
<li>GET:<br>傳遞參數(name=value)都在 URL 中，任何人都可見。<br>
<br>
適用於資訊獲取(查詢結果)。<br>
使用 URL 傳遞參數(name=value)。<br>
對所發送資訊的數量有限制，一般在  2,000  個字串。<br></li>
<br>
<li>POST:<br>
傳遞參數(name=value)，隱密性較GET高。<br>
<br>
適用於修改伺服器上的資料。<br>
所有傳遞的參數(name=value)將被嵌入 HTTP 的請求主體(body)。<br>
對所發送資訊的數量無限制。<br>
</li>
</ul>
</p>
<li><h4>什麼是 RESTful API？</h4></li>
<p>是一種 Web 應用程式架構風格，這種風格使API設計具有整體一致性，易於維護、擴展，並且充份利用HTTP協定的特點。</p>
<li><h4>JSON 是什麼？</h4></li>
<p>JSON（JavaScript Object Notation）是個以純文字為基底去儲存和傳送簡單結構資料，可以透過特定的格式去儲存任何資料(字串,數字,陣列,物件)，也可以透過物件{}或陣列[]來傳送較複雜的資料。<br>
最常被用在 Web 網頁程式從 Server 端傳送資料給 browser，典型範例就是透過 AJAX 方式交換 JSON 資料<br>
Ex：<br>
{<br>
    "firstName": "Tom",<br>
    "lastName": "Hanks",<br>
    "sex": "male",<br>
    "age": 60,<br>
    "works": {<br>
        "1994": "Forrest Gump",<br>
        "1998": "Saving Private Ryan",<br>
        "2000": "Cast Away"<br>
    }<br>
}<br>
</p>
<li><h4>JSONP 是什麼？</h4></li>
<p> JSONP (JSON with Padding)，在 HTML 裡面有幾個標籤不受到跨網域的限制，'script'是其中一個。
可以在 HTML 裡引入 API URL 到script 裡，然後定義 callback function 的參數，在 JavaScript 檔案裡用 callback function 呼叫出 JSONP 的資料。或是直接在 JavaScript 檔案裡引入 API URL 再利用 callback function 也可以。<br>
但是一般不建議使用 JSONP，因為如果引入'script'的網站遭駭客入侵，自身的網站也會受到影響。
</p>
<li><h4>要如何存取跨網域的 API？</h4></li>
<p>
<ol>
<li>JSONP</li>
<li>CORS (cross-origin resource sharing):<br>
在 Response Header 中 Access-Control-Allow-Origin 可以看到 API 資料是否有開放跨網域存取。</li>
</ol>
<p>跨網域存取分成：</p>
<ol>
<li>簡單請求：<br>只允許 'GET'、'HEAD'、'POST' 這三個方法。</li>
<li>先導請求 (Preflight Request)：<br>先以 HTTP 的 OPTIONS 方法送出 request 到另一個網域，確定 Access-Control-Allow-Origin 沒問題後，才送出真正的 response 到此網域中。所以會發生送出一個 request 但有兩個 response，先導請求是瀏覽器驗證是否有開放跨網域存取的方法。如果想要避免先導請求多產生出來的 response，可以取消字定義的標頭（例如 'setRequestHeader'）就可以解決了。</li>
</ol>
<p>不過，要是遠端伺服器沒有開放跨網域存取，不管用什麼方法瀏覽器都沒辦法存取資料的。</p>

</p>
</ol>
<h1>Demo:</h1><br>
<p>https://clingoram.github.io/frontend-intermediate-course/answers/hw4/index.html</p>
