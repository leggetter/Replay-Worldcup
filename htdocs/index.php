<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

<meta charset=utf-8>

<title>Replay the World Cup with Kwwika.</title>

<meta name="rating" content="General" />
<meta name="distribution" content="Global" />

<meta name="googlebot" content="index,follow" />
<meta name="robots" content="all,index,follow" />
<meta name="msnbot" content="all,index,follow" />

<meta name="resource-type" content="document" />
<meta name="revisit-after" content="10 Days" />

<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<script type="text/javascript" src="http://use.typekit.com/wrv7tuu.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

<link rel="stylesheet" type="text/css" media="screen" href="/styles/HTML5.css" />
<link rel="stylesheet" type="text/css" media="screen" href="/styles/screen.css" />

</head>
<body>

<header>
	<p>This is an extension to my <a href='http://worldcup.aaronbassett.com'>World Cup competition entry.</a> 
	It lets you replay a match and see how different statistics were reflected in the final outcome.</p>
	<p>Streaming API <a href='http://kwwika.com/'>powered by Kwwika</a>, match data provided by 
	<a href='http://www.optasports.com/'>Opta Sports</a> and sponsored by <a href='http://tellylinks.com/'>Tellylinks.com</a></p>
</header>

<div id='wrapper'>

	<section id='home'>
		<h1>HOME</h1>
		<h2>0</h2>
	</section>
	
	<article id='stats'>
		<figure id='shots'>
			<div id='shots-chart'></div>
			
			<figcaption>
				<h3>Total Shots made</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='shotstarget'>
			<div id='shotstarget-chart'></div>
			
			<figcaption>
				<h3>Shots on target</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='possesion'>
			<div id='possesion-chart'></div>
			
			<figcaption>
				<h3>Possession (%)</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='touches'>
			<div id='touches-chart'></div>
			
			<figcaption>
				<h3>Total touches</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='passes'>
			<div id='passes-chart'></div>
			
			<figcaption>
				<h3>Accurate Passes</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='inter'>
			<div id='inter-chart'></div>
			
			<figcaption>
				<h3>Interceptions</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='longballs'>
			<div id='longballs-chart'></div>
			
			<figcaption>
				<h3>Total long balls</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='accuratelongballs'>
			<div id='accuratelongballs-chart'></div>
			
			<figcaption>
				<h3>Accurate long balls</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='tackles'>
			<div id='tackles-chart'></div>
			
			<figcaption>
				<h3>Tackles Made</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='throws'>
			<div id='throws-chart'></div>
			
			<figcaption>
				<h3>Throw-ins taken</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='corners'>
			<div id='corners-chart'></div>
			
			<figcaption>
				<h3>Corners won</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='goalkicks'>
			<div id='goalkicks-chart'></div>
			
			<figcaption>
				<h3>Goal kicks made</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='foul'>
			<div id='foul-chart'></div>
			
			<figcaption>
				<h3>Total Fouls</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='yellows'>
			<div id='yellows-chart'></div>
			
			<figcaption>
				<h3>Yellow cards</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
		
		<figure id='subs'>
			<div id='subs-chart'></div>
			
			<figcaption>
				<h3>Substitions made</h3>
				<ul>
					<li style='color: #C40000;'><strong>Home</strong>: 0</li>
					<li style='color: #750303;'><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>



	</article>
	
	<section id='away'>
		<h1>AWAY</h1>
		<h2>0</h2>
	</section>
</div>

<script type="text/javascript" src="/js/prototype.s2.min.js"></script>
<script type="text/javascript" src="http://api.kwwika.com/latest/"></script>
<script type="text/javascript" src="/js/jscharts.js"></script>
<script type="text/javascript" src="/js/replay.js"></script>

</body>
</html>