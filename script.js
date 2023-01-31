//your code here
function clearData() {
	document.getElementById("input").value = "";
}
function dis(val) {
	document.getElementById("input").value += val;
}
function answer() {
	let p=document.getElementById("input").value;
	let q=eval(p);
	document.getElementById("input").value=q;
}