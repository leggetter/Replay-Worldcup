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
	
	<section id='away'>
		<h1>AWAY</h1>
		<h2>0</h2>
	</section>
	
	<article id='stats'>
		<figure id='passes'>
			<div id='passes-chart'></div>
			
			<figcaption>
				<h3>Accurate Passes</h3>
				<ul>
					<li><strong>Home</strong>: 0</li>
					<li><strong>Away</strong>: 0</li>
				</ul>
			</figcaption>
		</figure>
	</article>

</div>

<script type="text/javascript" src="/js/ProtoChart.js"></script>
<!--[if IE]>
<script language="javascript" type="text/javascript" src="/js/excanvas.js">
</script>
<![endif]--> 

<script type="text/javascript" src="http://api.kwwika.com/latest/"></script>
<script type="text/javascript" src="/js/prototype.s2.min.js"></script>
<script type="text/javascript" src="/js/replay.js"></script>

</body>
</html>