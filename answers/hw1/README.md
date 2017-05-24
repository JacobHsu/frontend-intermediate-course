<h1>HW1-基本 HTML/CSS 練習：以 Twitch 為例</h1><br>
<hr>
<h3>自我練習</h3>
<ol>
<li><h4>請問 CSS 的屬性position有哪幾種值？</h4></li>
<p>有4種，分別是: static、relative、fixed、absolute。</p>
<li><h4>承上，請問那幾種值有哪些區別？請講出適合應用的地方。</h4></li>
<p>
  <ul>
    <li>Static: <br>預設值，按照瀏覽器預設的配置排版。</li>
    <li>Relative: <br>可設定各位置的值(top、left、right、bottom)，使元素'相對調整'到原本該出現的位置，此調整不影響其他元素的位置，就是不管這些「相對定位」過的元素如何在頁面上移動位置或增加了多少空間，都不影響到原本其他元素所在的位置。</li>
    <li>Fixed： <br>相對於瀏覽器視窗來定位，即使畫面捲動也會出現在固定的位置。和 relative 一樣，會使用 top 、 right 、 bottom 和 left 屬性來定位。</li>
    <li>Absolute: <br>跟fixed很像，不一樣的地方在於 absolute 元素的定位是在他所處上層容器的相對位置。如果這個套用 position: absolute 的元素，其上層容器並沒有「可以被定位」的元素的話，那麼這個元素的定位就是相對於該網頁所有內容（也就是 <body> 元素）最左上角的絕對位置，看起來就是這張網頁的絕對位置一樣，所以當畫面在捲動時，該元素還是會隨著頁面捲動。</li>
  </ul>
</p>
<li><h4>display的三個值inline, block, inline-block有什麼異同？可以試著舉出幾個例子嗎？</h4></li>
<p>
  <ul>
    <li>inline:<br>所有文字或圖片都會是在同一行(呈現水平)。如果兩個元素(A and B)都是display:inline，那麼這兩個元素都會在同一行。
    <br>inline的特性會讓排列完的區塊被後面的其它元素所以覆蓋，所以還必須額外增加一個 clear 屬性來清除水平排列的效果，以免其它元素網頁元素蓋到區塊造成排版錯誤。</li>
    <li>block:<br> block為區塊的意思，代表元素會以'區塊'方式呈現。<br>特性是可以設定高度（height）、寬度（width）、上方與下方距離，像是 div、p、ul、li 均屬 block。但inline高度與寬度都不能設定，文字或圖片所佔的寬度就是他的寬度，像是 span、a、input、img、em 均屬 inline。</li>
    <li>inline-block:<br>因為inline是水平排列的，加上block可以讓原本以水平排列的區塊改以 block 模式呈現，這樣就不會被後面的其它元素所覆蓋。 </li>
  </ul>
</p>
<li><h4>有哪些 HTML 元素是 inline, 哪些是 block？</h4></li>
<p>如上題的第二點提及。<br>
<ul>
<li>inline: <br>span、a、input、img、em ...均屬 inline。無法設定寬高!<br></li>
<li>block: <br>div、h1~h6、p、ul、li、form... 均屬 block。可以設定寬高、距離!<br></li>
</ul>
</p>
<li><h4>當我設定一個元素的width為300px，並且padding設成10px之後，這個元素的寬度應該會是多少？</h4></li>
<p>320px</p>
<li><h4>這次實作的畫面當頻道名稱字太多的時候，會超出一格的大小或者會直接被卡掉，有沒有辦法讓字太多的時候在尾巴顯示...？例如原本名稱叫做：「1234567」，顯示的時候變成：「12345...」？</h4></li>
<p>p {<br>
  white-space: nowrap;      /* no newline */<br>
  overflow: hidden;         /* crop text */<br>
  text-overflow: ellipsis;  /* ... */<br>
}</p>
</ol>
<hr>
<h1>Demo</h1>
<p>https://clingoram.github.io/frontend-intermediate-course/answers/hw1/index.html</p>
