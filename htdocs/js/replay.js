

alert = function(msg) { return; }

var Replay={
	initialize:function() {
		this.charts = {};
		this.cachedValues = {};
		this.initialized = true;
		if(this.chartsLoaded) this.subscribe();
	},
	chartsLoaded:function()
	{
		this.chartsLoaded = true;
		if(this.initialized) this.subscribe();
	},
	subscribe:function()
	{
		var oConnection = kwwika.Service.connect();
		var oSubscription = oConnection.subscribe("/OPTA/WC2010/REPLAY", {
			topicUpdated:function(oSub, d){
				this.homeTeam = d.HomeTeam;
				this.awayTeam = d.AwayTeam;
				
				$$('#home h1')[0].update(d.HomeTeam);
				$$('#away h1')[0].update(d.AwayTeam);
				
				$$('#home h2')[0].update(d.HomeTeamScore);
				$$('#away h2')[0].update(d.AwayTeamScore);
				
				$$('#timeplayed h2')[0].update(d.MatchTime);
				
				
				Replay.updateCharts(d,'HomeTeamTotalScoringAtt', 'AwayTeamTotalScoringAtt', 'shots', 'shots-chart', "Total shots");
				Replay.updateCharts(d,'HomeTeamOntargetScoringAtt', 'AwayTeamOntargetScoringAtt', 'shotstarget', 'shotstarget-chart', "Shots on target");
				Replay.updateCharts(d,'HomeTeamTouches', 'AwayTeamTouches', 'touches', 'touches-chart', "Touches");
				Replay.updateCharts(d, 'HomeTeamAccuratePass', 'AwayTeamAccuratePass', 'passes', 'passes-chart', "Passing accuracy");
				Replay.updateCharts(d, 'HomeTeamInterception', 'AwayTeamInterception', 'inter', 'inter-chart', "Interceptions");
				Replay.updateCharts(d, 'HomeTeamPossessionPercentage', 'AwayTeamPossessionPercentage', 'possesion', 'possesion-chart', "Ppossession");
				Replay.updateCharts(d, 'HomeTeamTotalTackle', 'AwayTeamTotalTackle', 'tackles', 'tackles-chart', "Total tackles");
				Replay.updateCharts(d, 'HomeTeamTotalLongBalls', 'AwayTeamTotalLongBalls', 'longballs', 'longballs-chart', "Long balls");
				Replay.updateCharts(d, 'HomeTeamAccurateLongBalls', 'AwayTeamAccurateLongBalls', 'accuratelongballs', 'accuratelongballs-chart', "Long ball accuracy");
				Replay.updateCharts(d, 'HomeTeamTotalThrows', 'AwayTeamTotalThrows', 'throws', 'throws-chart', "Throw-ins");
				Replay.updateCharts(d, 'HomeTeamWonCorners', 'AwayTeamWonCorners', 'corners', 'corners-chart', "Corners won");
				Replay.updateCharts(d, 'HomeTeamGoalKicks', 'AwayTeamGoalKicks', 'goalkicks', 'goalkicks-chart', "Goal kicks");
				Replay.updateCharts(d, 'HomeTeamFkFoulLost', 'AwayTeamFkFoulLost', 'foul', 'foul-chart', "Fouls");
				Replay.updateCharts(d, 'HomeTeamTotalYelCard', 'AwayTeamTotalYelCard', 'yellows', 'yellows-chart', "Yellow cards");
				Replay.updateCharts(d, 'HomeTeamSubsMade', 'AwayTeamSubsMade', 'subs', 'subs-chart', "Substitutions");
			},
			topicError:function(oSub, sError){ return; }
		});
	},
	
	updateCharts:function(d,homeStat,awayStat,id,chartid,desc) {
		if(this.cachedValues[homeStat] == d[homeStat] && this.cachedValues[awayStat] == d[awayStat]) return;
		
		d[homeStat] = (d[homeStat] == undefined) ? 0 : d[homeStat];
		d[awayStat] = (d[awayStat] == undefined) ? 0 : d[awayStat];
				
		$$('#'+id+' li')[0].update("<strong>"+d.HomeTeam+"</strong> "+d[homeStat]);
		$$('#'+id+' li')[1].update(d[awayStat] + " <strong>"+d.AwayTeam+"</strong>");
		
			var total = parseInt(d[homeStat]) + parseInt(d[awayStat]);
			var HomePerc = Math.floor((d[homeStat]/total)*100);
			var AwayPerc = Math.floor((d[awayStat]/total)*100);
			
  			// Create and populate the data table.
  			var data = new google.visualization.DataTable();
  			var raw_data = [[this.homeTeam, HomePerc],
                  			[this.awayTeam, AwayPerc]];
  
  			var years = [desc];
                  
  			data.addColumn('string', '');
  			for (var i = 0; i  < raw_data.length; ++i) {
    			data.addColumn('number', raw_data[i][0]);    
  			}
  
  			data.addRows(years.length);

		  	for (var j = 0; j < years.length; ++j) {    
		    	data.setValue(j, 0, years[j].toString());    
		  	}
		  	for (var i = 0; i  < raw_data.length; ++i) {
		    	for (var j = 1; j  < raw_data[i].length; ++j) {
		      		data.setValue(j-1, i+1, raw_data[i][j]);    
		    	}
		  	}

		  	// Create and draw the visualization.
		  	var chart = this.charts[chartid];
		  	if(!chart)
		  	{
			  	chart = this.charts[chartid] = new google.visualization.BarChart(document.getElementById(chartid));
		  	}
		  	chart.draw(data,
			           {width:300, height:50,
			            isStacked:true,
			            legend: 'none',
			            hAxis:{maxValue:100}}
      				);
	}
};

Event.observe(window, "load", function() {
	Replay.initialize();
});

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function(){Replay.chartsLoaded();});