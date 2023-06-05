# Web-get-and-display-time
Web前端语言获取并显示当前时间的程序
<p id="current-time"></p>：在HTML中创建一个段落元素，其中的id属性设置为"current-time"。这个元素用于显示当前时间。

<script>：在HTML中插入JavaScript代码。

var currentTime = new Date();：创建一个Date对象并将其赋值给变量currentTime，用于表示当前时间。

var formattedTime = currentTime.toLocaleTimeString();：使用toLocaleTimeString()方法将当前时间格式化为本地时间字符串，并将结果赋值给formattedTime变量。

var currentTimeElement = document.getElementById("current-time");：使用document.getElementById()方法获取具有id为"current-time"的元素，并将其赋值给currentTimeElement变量。

currentTimeElement.textContent = "Current time: " + formattedTime;：将带有当前时间的字符串赋值给currentTimeElement元素的textContent属性，从而将当前时间显示在页面上。
