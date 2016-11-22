<a href="https://www.patreon.com/oneezy">
![alt text](http://oneezy.com/www/gtd/logo-new-new.png "GTD Trello")
</a>
# GTD Trello (Version 0.5.0)

This is an opensource Chrome extension for [Trello] that allows you to visualize your Trello boards in unique ways! It follows best practices borrowed from the [Agile], [GTD], and [4 Hour Work Week] methods... and bakes them right into your Trello board! The result?... Turning your Trello board into the ultimate platform for Getting Things Done!
<br>
<br>


##### &nbsp; &nbsp; B E F O R E  &nbsp; &nbsp; &nbsp; &nbsp; --> &nbsp; &nbsp; &nbsp; &nbsp;  A F T E R &nbsp; &nbsp; &nbsp; &nbsp;  --> &nbsp; &nbsp; &nbsp; &nbsp;  V I S I O N
<a href="https://trello.com/b/oRSeLRW0/gtd-trello-demo">
![alt text](http://oneezy.com/www/gtd/gtd-trello.gif "GTD Trello - Before/ After/ Vision")
</a>

<br>

### Features
Some of these features work by default, while some have to be enabled through user input. By typing certain text into the "List Title", "Card Title", or "Card Label", the features will be turned on or off. Below I'll specify which features are default and which ones are manual input along with the "(TEXT)" keyword that enables each feature. Eventually all features will be enabled/disabled from a pretty popup menu..but for now, bare with me.
<br>
<br>

##### &nbsp;&nbsp;&nbsp; DEFAULT
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **Board Tabs:** Turns your Trello board into a "Folder Tab" structure <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **Card Counts:** Displays the number of cards in your list and takes on the color of your "List Color" (deafault is black) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **Card Dates:** This adds visual animations to your cards that have "Due Dates" <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **Card Links:** Adds the ability to have "hyperlinks" inside card titles <br>
<br>


##### &nbsp;&nbsp;&nbsp; LIST TITLE
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **List Separators:** Adds space around lists for better organization <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(SPACE) - Adds space on left and right sides of list``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(SPACE-R) - Adds space on the right sides of list``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(SPACE-L) - Adds space on the left sides of list``` <br>



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **List Colors:** Adds "Trello" colored borders to the top of lists for better organization <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(WHITE)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(BLUE)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(DARK BLUE)``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(YELLOW)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(ORANGE)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(RED)``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PURPLE)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PINK)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(GREEN)``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(DARK GREEN)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(GRAY)```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(DARK GRAY)``` <br>




&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **List Layouts:** This styles your lists in unique ways that helps you visualize your data more efficiently <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PIPE) - Shrinks your list small and only shows the background "cover" image, shows data on hover``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PROJECTS) - This creates a way to see "Epics" or "Projects" more visually, best used with```[cardsync] <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(HEIGHT) - Sets a minimum height on cards so you see more data (hover over cards to see full height)```
<br><br>


##### &nbsp;&nbsp;&nbsp; CARD TITLE
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **Card Separators:** This adds a separator in your lists to allow you to group cards more efficiently <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```---TITLE---```
<br><br>


##### &nbsp;&nbsp;&nbsp; CARD LABEL
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ **Priority Labels:** This adds a "weight" to your cards so you can visually see what's most important and what's not <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PRIORITY: 1) - This adds a "small" border to the left of your cards``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PRIORITY: 2) - This adds a "medium" border to the left of your cards``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PRIORITY: 3) - This adds a "large" border to the left of your cards``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • ```(PRIORITY: 4) - This adds an "extra large" border to the left of your cards``` <br>

---

Please refer to the [GTD Trello Demo] board to see examples of these features in action (after you install the extension).

---

<br>
### Getting Started
For users and beta testers, click "Download ZIP"

For developers,
You should have [Git] installed locally and a [Github] account:

```sh
$ git clone https://github.com/oneezy/gtd-trello.git
$ cd gtd-trello
```
<br>
### Chrome Extension Installation
* In your Chrome browser, navigate to your [Extensions] manager
* Select the "Developer mode" checkbox
* Click "Load unpacked extension..." button
* Navigate to the folder **"gtd-trello"**
* Enable the GTD Trello extension
<br>
<br>

### Demo, Development, Feature Requests

**DEMO:** https://trello.com/b/oRSeLRW0/gtd-trello-demo <br>
**DEVELOPMENT:** https://trello.com/b/TQJod6cX/gtd-trello-development-board <br>
**FEATURE REQUESTS:** https://github.com/oneezy/gtd-trello/issues <br>
**SUPPORT THIS PROJECT:** https://www.patreon.com/oneezy <br>

<em style="color: #999999">Opensource developers are always welcome!</em>

----------
**IMPORTANT!**
----------
You'll have to refresh the Trello Board page when navigating to it from direct link. It's a bug I'm working on fixing ;)
----------
----------

<a href="https://www.patreon.com/oneezy">
![alt text](http://oneezy.com/www/gtd/gtd-trello-support-new.png "Support GTD Trello")
</a>

   [Trello]: <https://trello.com>
   [Agile]: <http://amzn.to/1pss1B7>
   [GTD]: <http://amzn.to/1Z8Lrr3>
   [4 Hour Work Week]: <http://amzn.to/1psuOKG>
   [cardsync]: <https://trello.com/cardsync>
   [GTD Trello Demo]: <https://trello.com/b/oRSeLRW0/gtd-trello-demo>
   [Git]: <http://www.git-scm.com>
   [Github]: <https://github.com>
   [Extensions]: <chrome://extensions>
   [5 minute YouTube tutorial]: <https://www.youtube.com/watch?v=xgj-2etILdk>
   [Reload Extensions]: <https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid?hl=en>
   [Trello List Layouts, Trello Board]: <https://trello.com/b/TQJod6cX/0-trello-list-layouts>
