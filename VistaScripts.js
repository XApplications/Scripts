var username = document.getElementById("lblUserNameTxt").innerHTML;
function GetVpLogoImage() {
  return document.getElementById("imgLogo").src;
}
function SetVpLogoImage(imageUrl) {
  document.getElementById("imgLogo").src = imageUrl;
}
function SetElementDetails(k, u, d, a) {
	for (var i=0; i < a.length; i++) {
		for (var x=0; x < a[i].items.length; x++) {
			if (a[i].items[x].feature === k) {
				if (d === 'url') a[i].items[x].url = u;
				if (d === 'itemdesc') a[i].items[x].itemdesc = u;
				if (d === 'searchtext') a[i].items[x].searchtext = u;
			}
		}
	}
}
function HideElementDetails(k, a) {
  for (var i = 0; i < a.length; i++) {
    for (var x = 0; x < a[i].items.length; x++) {
      if (a[i].items[x].feature === k) {
        var elem = document.getElementById(a[i].items[x].id);
        elem.style.display = 'none';
      }
    }
  }
}

function HideSidebar() {
	const today = new Date();
const month = today.getMonth() + 1; // getMonth() returns 0-indexed month (January is 0), so we add 1 to get the current month
const day = today.getDate();

if (month === 4 && day === 1) {
const sidebar = document.getElementById('sidebar');
  sidebar.style.transition = "all 2s ease-out"; // apply transition
  sidebar.style.transform = "translateX(-100%)"; // move sidebar offscreen
  setTimeout(function() {
    sidebar.style.display = 'none'; // hide sidebar after transition completes
  }, 2000); // delay for 2 seconds
} else {
const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none';
}
}
function GetVpUsername() {
	return document.getElementById("lblUserNameTxt").innerHTML;
}
function GetVpVersion() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://panel.myownfreehost.net/xml-api/version.php');
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      }
      else {
        reject(new Error('Request failed.  Returned status of ' + xhr.status));
      }
    };
    xhr.send();
  });
}
function LoadStylesheet(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}

