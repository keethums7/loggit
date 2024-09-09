"use strict";

// select "donate" button by Id - top right corner of nav bar
let btn = document.getElementById('yui_3_17_2_1_1725568663266_352');
btn.onclick = () => donatePopup();

function donatePopup() {
let nodeList = document.querySelectorAll(".givelively-popup");
console.log(nodeList);
// popup already spawned on page
if(nodeList.length === 1) {
let popup = nodeList[0];
popup.style.display = popup.style.style.display === 'none' ? 'block' : 'none';

// spawn popup on page if none found
} else if(nodeList.length === 0) {
let popup = document.createElement('div');
popup.className = "givelively-popup";
popup.innerHTML = "hello";
popup.style.display = "block";
console.log()

document.body.append(popup);
} else {
console.error(`unexpected length for nodeList: ${nodeList.length}`);
}
}
