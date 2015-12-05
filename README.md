#typeWriter.js

<p>typeWriter.js is easy and free to use lightweight library written and based on javascript. It get the content of element on a webpage and re-display it by typing it on the page</p>

<h3>To initialize it on your webpage</h3>

<ol>
  <li>Download the zip file <a href="https://github.com/ckm100/typeWriter.js/archive/master.zip">here</a> and extract it to get the minified version and unminified version.</li>
  <li>Include either the minified version or the unminifed version onto your webpage(minified version required for performance).</li>
  <li>Write this code into your custom javascript file <code>typeWriter("selector","true",interval)</code>
</li>
</ol>
 
 <p><strong>NB:</strong> Since your custom javascript file will be a dependecy on the typeWriter.js file, when including the files onto the page typeWriter.js file must come first before your custom javascript file.</p>

The first argument which is the <code>selector</code> takes in the id of the element you want it content to be re-display on the page

<p><strong>Example:</strong> If you have a paragraph element on the page <code>&lt;p id="para"&gt;Hello world&lt;p&gt;</code>. You reference it with the id name this way <code>typeWriter("#para","true",interval)</code>

<p>The second argument <code>"true"</code> is required for the code to work.</p> 

<p>The third argument is optional,It specifies how fast the typing should go. So writting the code this way will still work <code>typeWriter("#para","true")</code> the default is set to <strong>100</strong>. You can choose any value from <strong>10-100</strong> which is preferable, this code <code>typeWriter("#para","true",20)</code> will run the content faster. The less the value the faster the typing runs</p>

#DEMO - <a href="http://codepen.io/ckm100/full/Mwvxmd/" target="_blank">View Demo</a>


