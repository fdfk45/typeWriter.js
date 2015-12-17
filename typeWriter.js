document.addEventListener("DOMContentLoad", typeWriter, false);

var typeWriter = function (selector, type, interval) {

    "use strict";

    var el = document.querySelectorAll(selector), // Getting elements in the DOM
        i = 0,
        len = el.length, // Length of element on the page
        list = [], // List of elements on the page in the DOM
        a,
        all,
        text,
        start,
        end,
        nextText,
        style,
        clear;


    for (; i < len; i++) {

        list.push(el[i]); // Pushing the element in the list array
    }

    for (a in list) {

        all = list[a]; // List of all element
        text = all.innerHTML += " <span id='cursor'>|</span>"; // InnerHTML of the elements 
        start = 0; // Start index of the text in the elements 
        end = 0; // End index of the text in the elements
        style = document.createElement("style");
        document.head.appendChild(style);


        //Setting the default interval to 100 when interval is not set by the user
        if (typeof interval === "undefined") {

            interval = 100;

        }

        if (arguments[1] === "true") {

            clear = setInterval(function () { // Animation start

                var newText = text.substr(start, end);

                all.innerHTML = newText += " <span id='cursor'>|</span>";

                end = end + 1; //loops through the text in the element

                // Insert stylesheet to the document to animate cursor 
                style.sheet.insertRule("@-webkit-keyframes cursor {0% { opacity : 1;}100% { opacity : 0;}}", 0);

                style.sheet.insertRule("@keyframes cursor {0% { opacity : 1;}100% { opacity : 0;}}", 0);

                cursor.style.fontSize = "30px";

                cursor.style.fontWeight = "bold";

                cursor.style.webkitAnimation = "cursor 0.5s infinite";

                cursor.style.animation = "cursor 0.5s infinite";

                if (newText === text) {

                    clearInterval(clear); // Animation end

                }

            }, interval);

        }

        return all;

    }

}
