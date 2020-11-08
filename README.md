<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="uaifood_0"></a>uaifood</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3"><a href="https://nodesource.com/products/nsolid"><img src="https://github.com/evnts-dev/teste-front-react/blob/master/imgs/documentation/search.jpg?raw=true" alt="N|Solid"></a></p>
<p class="has-line-data" data-line-start="4" data-line-end="5">This project was a challenge. Incredible experience to build apis!</p>
<h1 class="code-line" data-line-start=6 data-line-end=7 ><a id="Features_6"></a>Features</h1>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="9">Allow the registration of a restaurant in the database.</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">Allow the registration and updating of a restaurant item in the database.</li>
<li class="has-line-data" data-line-start="10" data-line-end="12">Allow to search for all restaurants that meet the selected filters.</li>
</ul>

<h3 class="code-line" data-line-start=14 data-line-end=15 ><a id="Tech_14"></a>Tech</h3>
<p class="has-line-data" data-line-start="16" data-line-end="17">In this project the following technologies were used:</p>
<ul>
<li class="has-line-data" data-line-start="18" data-line-end="19"><a href="https://nodejs.org/en/">NodeJs</a> - Environment for executing JavaScript code.</li>
<li class="has-line-data" data-line-start="19" data-line-end="20"><a href="https://code.visualstudio.com/">Visual Studio Code</a> - IDE used for development.</li>
<li class="has-line-data" data-line-start="20" data-line-end="21"><a href="https://expressjs.com/pt-br/">Express</a> - Framework for web applications for Node.js.</li>
<li class="has-line-data" data-line-start="21" data-line-end="22"><a href="https://www.docker.com/">Docker</a> - Set of platform-as-a-service products that use OS-level virtualization.</li>
<li class="has-line-data" data-line-start="22" data-line-end="23"><a href="https://www.mysql.com/">MySql</a> - Database management system.</li>
<li class="has-line-data" data-line-start="23" data-line-end="24"><a href="https://typeorm.io/#/">TypeOrm</a> - Offers features that facilitate persistence with the database.</li>
<li class="has-line-data" data-line-start="24" data-line-end="25"><a href="https://github.com/microsoft/tsyringe">tsyringe</a> - Library used for dependency injection.</li>
<li class="has-line-data" data-line-start="25" data-line-end="26"><a href="https://www.typescriptlang.org/">TypeScript</a> - Superset of JavaScript developed by Microsoft that adds typing and some other features to the language.</li>
<li class="has-line-data" data-line-start="26" data-line-end="27"><a href="https://rockcontent.com/br/blog/rest-api/">REST</a> - Software architecture style that defines a set of restrictions to be used when creating web services.</li>
<li class="has-line-data" data-line-start="27" data-line-end="29"><a href="https://medium.com/thiago-aragao/solid-princ%C3%ADpios-da-programa%C3%A7%C3%A3o-orientada-a-objetos-ba7e31d8fb25">SOLID</a> - Principles or good practices of object-oriented programming, and can be applied to any programming language.</li>
<li class="has-line-data" data-line-start="29" data-line-end="30"><a href="https://insomnia.rest/">Insomnia</a> - Workflows and Tools to make API Development Easier.</li>
</ul>
<h3 class="code-line" data-line-start=29 data-line-end=30 ><a id="Installation_29"></a>Installation</h3>
<p class="has-line-data" data-line-start="31" data-line-end="32">Project requires <a href="https://nodejs.org/">Node.js</a> v8+ and <a href="https://www.docker.com/">Docker</a> to run.</p>
<p class="has-line-data" data-line-start="33" data-line-end="34">Install the dependencies and devDependencies and start the server.</p>
<pre><code class="has-line-data" data-line-start="36" data-line-end="41" class="language-sh">$ git <span class="hljs-built_in">clone</span> https://github.com/ga-almeida/uai-food.git
$ <span class="hljs-built_in">cd</span> uai-food
$ docker-compose up
</code></pre>
<p class="has-line-data" data-line-start="42" data-line-end="43">Api documentation</p>
<pre><code class="has-line-data" data-line-start="45" data-line-end="49" class="language-sh">$ <span class="hljs-built_in">cd</span> uai-food
$ npx serve
use this address <span class="hljs-keyword">in</span> any browser http://localhost:<span class="hljs-number">5000</span>/
</code></pre>
<h3 class="code-line" data-line-start=50 data-line-end=51 ><a id="Comments_50"></a>Comments</h3>
<p class="has-line-data" data-line-start="52" data-line-end="53">The biggest challenge of this project was to make an api that would make a dynamic filter for the restaurants.</p>
<p class="has-line-data" data-line-start="54" data-line-end="55">One of the filters should search for a restaurant according to latitude and longitude and distance.</p>
<p class="has-line-data" data-line-start="56" data-line-end="57">The solution was to do a native sql query using functions like sin, cos and radians.</p>
<p class="has-line-data" data-line-start="58" data-line-end="59">And I couldn’t help saying about the docker. Great learning. It helped a lot in development time. Long live the containers =)</p>
<p class="has-line-data" data-line-start="60" data-line-end="61">Any questions I am available, contact: <a href="mailto:gabrielsantos.almeida@hotmail.com">gabrielsantos.almeida@hotmail.com</a></p>
