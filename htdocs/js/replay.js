

alert = function(msg) { return; }

var Replay={
	initialize:function() {
		var oConnection = kwwika.Service.connect();
		var oSubscription = oConnection.subscribe("/OPTA/WC2010/REPLAY", {
			topicUpdated:function(oSub, d){
				$$('#home h1')[0].update(d.HomeTeam);
				$$('#away h1')[0].update(d.AwayTeam);
				
				$$('#home h2')[0].update(d.HomeTeamScore);
				$$('#away h2')[0].update(d.AwayTeamScore);
				
				
				Replay.updateCharts(d,'HomeTeamTotalScoringAtt', 'AwayTeamTotalScoringAtt', 'shots', 'shots-chart');
				Replay.updateCharts(d,'HomeTeamOntargetScoringAtt', 'AwayTeamOntargetScoringAtt', 'shotstarget', 'shotstarget-chart');
				Replay.updateCharts(d,'HomeTeamTouches', 'AwayTeamTouches', 'touches', 'touches-chart');
				Replay.updateCharts(d, 'HomeTeamAccuratePass', 'AwayTeamAccuratePass', 'passes', 'passes-chart');
				Replay.updateCharts(d, 'HomeTeamInterception', 'AwayTeamInterception', 'inter', 'inter-chart');
				Replay.updateCharts(d, 'HomeTeamPossessionPercentage', 'AwayTeamPossessionPercentage', 'possesion', 'possesion-chart');
				Replay.updateCharts(d, 'HomeTeamTotalTackle', 'AwayTeamTotalTackle', 'tackles', 'tackles-chart');
				Replay.updateCharts(d, 'HomeTeamTotalLongBalls', 'AwayTeamTotalLongBalls', 'longballs', 'longballs-chart');
				Replay.updateCharts(d, 'HomeTeamAccurateLongBalls', 'AwayTeamAccurateLongBalls', 'accuratelongballs', 'accuratelongballs-chart');
				Replay.updateCharts(d, 'HomeTeamTotalThrows', 'AwayTeamTotalThrows', 'throws', 'throws-chart');
				Replay.updateCharts(d, 'HomeTeamWonCorners', 'AwayTeamWonCorners', 'corners', 'corners-chart');
				Replay.updateCharts(d, 'HomeTeamGoalKicks', 'AwayTeamGoalKicks', 'goalkicks', 'goalkicks-chart');
				Replay.updateCharts(d, 'HomeTeamFkFoulLost', 'AwayTeamFkFoulLost', 'foul', 'foul-chart');
				Replay.updateCharts(d, 'HomeTeamTotalYelCard', 'AwayTeamTotalYelCard', 'yellows', 'yellows-chart');
				Replay.updateCharts(d, 'HomeTeamSubsMade', 'AwayTeamSubsMade', 'subs', 'subs-chart');
			},
			topicError:function(oSub, sError){ return; }
		});
	},
	
	updateCharts:function(d,homeStat,awayStat,id,chartid) {
		d[homeStat] = (d[homeStat] == undefined) ? 0 : d[homeStat];
		d[awayStat] = (d[awayStat] == undefined) ? 0 : d[awayStat];
				
		$$('#'+id+' li')[0].update("<strong>"+d.HomeTeam+"</strong>: "+d[homeStat]);
		$$('#'+id+' li')[1].update("<strong>"+d.AwayTeam+"</strong>: "+d[awayStat]);
		
			var total = parseInt(d[homeStat]) + parseInt(d[awayStat]);
			var HomePerc = (d[homeStat]/total)*100;
			var AwayPerc = (d[awayStat]/total)*100;
					
			var myData = new Array([d.HomeTeam, HomePerc], [d.AwayTeam, AwayPerc]);
			var colors = ['#C40000', '#750303'];
			var myChart = new JSChart(chartid, 'pie');
			myChart.setDataArray(myData);
			myChart.setTitle('');
			myChart.setTitleColor('#8E8E8E');
			myChart.setTitleFontSize(11);
			myChart.setPiePosition(180, 0);
			myChart.colorizePie(colors);
			myChart.setTextPaddingTop(0);
			myChart.setSize(300, 240);
			myChart.setPieRadius(85);
			myChart.setPieUnitsColor('#555');
			myChart.draw();
	}
};

Event.observe(window, "load", function() {
	Replay.initialize();
});