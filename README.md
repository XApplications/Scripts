# VistaScripts.js: Run VistaPanel Scripts
VistaScripts.js is a new way to customize your VistaPanel.  For example, you can change the logo to a remote URL using VistaScripts.js
<b> How to install: </b> Login to your MyOwnFreeHost account & click "Your Adverts", and then "Control Panel Advert Control" and copy paste the code below: 
<br>
<h2> Initial Code </h2>
<code>&lt;script src="https://cdn.jsdelivr.net/gh/GenerateApps/VistaScripts.js/VistaScripts.js"&gt;&lt;/script&gt;</code>
<h2> Example code for changing logo to remote URL</h2>
<code>&lt;script src="https://cdn.jsdelivr.net/gh/GenerateApps/VistaScripts.js/VistaScripts.js"&gt;&lt;/script&gt;
&lt;script&gt;
SetVpLogoImage("https://github.com/GenerateApps/GenerateArea/raw/dev/assets/default/img/garea_outline.png");
&lt;/script&gt;</code>
<br>
Make sure to replace "https://github.com/GenerateApps/GenerateArea/raw/dev/assets/default/img/garea_outline.png" with a different remote URL if needed.
<br>
<h2> Example code for changing link of element</h2>
<code>&lt;script src="https://cdn.jsdelivr.net/gh/GenerateApps/VistaScripts.js/VistaScripts.js"&gt;&lt;/script&gt;
&lt;script&gt;
SetElementDetails('sitereptile', 'https://app.example.com/u/view_account/'+username, 'url', PAGE.appGroups);
SetElementDetails('sitereptile', 'Advanced Account Settings', 'itemdesc', PAGE.appGroups);
SetElementDetails('sitereptile', 'website', 'searchtext', PAGE.appGroups);
&lt;/script&gt;</code>
<br>
Make sure to replace "https://app.example.com/u/view_account/'+username" with a different remote URL if needed.
<h2> Can I use VistaScripts.js and VistaPanel Customizations at the same time? </h2>
<p> Yes you can. </p>
