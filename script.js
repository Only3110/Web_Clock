let section = document.querySelector("section"),
icon = document.querySelector(".icon");

icon.onclick = ()=>{
	section.classList.toggle("dark");
}

setInterval(()=>{
	let date = new Date(),
	hour = date.getHours(),
	min = date.getMinutes(),
	sec = date.getSeconds();
	console.log(hour);

	let d;
	d = hour < 12 ? "AM" : "PM";
	hour = hour > 12 ? hour - 12 : hour;
	hour = hour == 0 ? hour = 12 : hour;

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	document.querySelector(".h_num").innerText = hour;
	document.querySelector(".m_num").innerText = min;
	document.querySelector(".s_num").innerText = sec;
	document.querySelector(".am_pm").innerText = d;
}, 1000);