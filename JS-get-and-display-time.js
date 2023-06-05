// 获取当前时间
var currentTime = new Date();

// 格式化当前时间
var formattedTime = currentTime.toLocaleTimeString();

// 将时间显示在页面上
var currentTimeElement = document.getElementById("current-time");
currentTimeElement.textContent = "Current time: " + formattedTime;
