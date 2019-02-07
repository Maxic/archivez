Vue.component('episode-list', {
	props: ['game'],
	template:
	`
		<div class="row">
     <div class="three columns">
      <div v-if="game.episode % 2 == 0">
       <center>
        <img v-if="game.winner" src="assets/MS-DOS_icon_gold.png" height=68>
        <img v-else src="assets/MS-DOS_icon.png" height=68>
        <br><br>
       </center>
      </div>
      <div v-else>
       &nbsp;
      </div>
     </div>
     <div class="six columns">
     <br>
	 <center><a :href="game.link">{{ game.title }}</a></center>
     </div>
     <div class="three columns"/>
      <div v-if="!(game.episode % 2 == 0)">
       <center>
      	<img v-if="game.winner" src="assets/MS-DOS_icon_gold.png" height=68>
      	<img v-else src="assets/MS-DOS_icon.png" height=68>
      	<br><br>
       </center>
      </div>
     </div>
    </div>
	`,
})


Vue.component('ranking-list', {
	props: ['game'],
	template:
	`
	<div class="container">
	 <div v-if="game.winner" class="row">
	  <div class="three columns">
	   <img v-if="game.ranking == 1" src="assets/MS-DOS_icon_gold.gif" height=68>
       <img v-else src="assets/MS-DOS_icon_gold.png" height=68>
      </div>
      <div class="nine columns">
       <br>
       <a :href="game.link">{{ game.ranking }}. {{ game.title }}</a>
      </div>
	 </div>
	 <br>
	</div>
	`,
})

var app = new Vue({
  el: '#app',
  data: {
  	toggleEpisode : true,
		episodes: [{
			epnr: 9,
			games: [
					  {
							title: "DEMO .EXE (Obscure MS-DOS Game)",
							link: "https://archive.org/details/demoexe",
							winner: true,
							episode: 9,
							ranking: 9,
						}, {
							title: "Tag Team Wrestling",
							link: "https://archive.org/details/msdos_Tag_Team_Wrestling_1986",
							winner: false,
							episode: 9,
							ranking: null,
						}, {
							title: "Druglord",
							link: "https://archive.org/details/msdos_Druglord_1991",
							winner: false,
							episode: 9,
							ranking: null,
						}
				]
			},
			{games: [
						{
							title: "NARCS",
							link: "https://archive.org/details/demoexe",
							winner: true,
							episode: 10,
							ranking: 9,
						}, {
							title: "Burt Beach Boys 2",
							link: "https://archive.org/details/msdos_Tag_Team_Wrestling_1986",
							winner: false,
							episode: 10,
							ranking: null,
						}, {
							title: "Goodlord XI",
							link: "https://archive.org/details/msdos_Druglord_1991",
							winner: false,
							episode: 10,
							ranking: null,
						}
			]}
		]

},
  computed: {
  	orderedGames : function(){
  		return this.games.filter(function(a){ return a.ranking != null
  		}).sort(function(a,b){return a.ranking - b.ranking})
  	}
  },
  methods : {
  	switchView: function () {
      this.toggleEpisode = !this.toggleEpisode
    }
  }
})
