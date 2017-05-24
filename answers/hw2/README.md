<h1>HW2-讓畫面變得更動態：神奇的 CSS transition</h1><br>
<h3>作業說明</h3>
<p>使用css(或者Sass, Less, Stylus)讓該作業的方格在滑鼠移上去時有浮出來的效果（box shadow）並且變亮。
<h3>自我練習</h3>
<ol>
<li><h4>你能不能試著做出另外一種 hover 的形式？例如說 hover 的時候背景顏色改變之類的。</h4></li>
<p>在滑鼠移到item時，產生shadow，並變亮。<br>
<br>
.item:hover{ <br>
	box-shadow: 1px 3px 3px 3px #000;<br>
	filter: contrast(100%) brightness(140%);<br>
	transition: 1s;<br>
}
</p>
<li><h4>我希望我滑鼠移上去之後過一秒才發生 hover 的效果，應該怎麼辦？</h4></li>
<p>在:hover加上transition-delay: 1s。</p>
<li><h4>為什麼我們應該在使用 transition 的時候避免 transition: all？</h4></li>
<p>
  <ul>
    <li>performance不佳。</li>
    <li>使用transition: all意思是「'所有'的transition效果共用同樣的延續時間及速率變換方式」，有時會因載入速度不一致而造成UX不佳。</li>
  </ul>
</p>
</ol>
<h1>Demo</h1>
<p>https://clingoram.github.io/frontend-intermediate-course/answers/hw2/index.html</p>
