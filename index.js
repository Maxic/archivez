

Vue.component('episode-list', {
	props: ['episode'],
	template:
	`
	<div v-if="episode.id % 2 == 0" class="e_episode">
	<div class="row">
	<div class="three columns">
	<center>
	<span class="epheader">Episode_{{ episode.id }}</span>
	</center>
	</div>
	</div>
	<div class="row">
	 <div class="three columns">&nbsp;</div>
	 <div class="six columns">
		 <game-list v-for="game in episode.games" v-bind:game="game">
		 </game-list>
    </div>
		<div class="three columns">&nbsp;</div>
	</div>
	<div class="row">
	<div class="one column">&nbsp;</div>
	</div>
	</div>
	<div v-else class="u_episode">
	<div class="row">
	<div class="three columns">
	<center>
	<span class="epheader">Episode_{{ episode.id }}</span>
	</center>
	</div>
	</div>
	<div class="row">
	 <div class="three columns">&nbsp;</div>
	 <div class="six columns">
		 <game-list v-for="game in episode.games" v-bind:game="game">
		 </game-list>
		</div>
		<div class="three columns">&nbsp;</div>
	</div>
	<div class="row">
	<div class="one column">&nbsp;</div>
	</div>
	</div>
	`,
})

Vue.component('game-list', {
	props: ['game'],
	template:
	`
	<div class="row">
		<div class ="three columns">
		<center>
		 <img v-if="game.winner" src="assets/MS-DOS_icon_gold.png" height=34>
		 <img v-else src="assets/MS-DOS_icon.png" height=34>
		</center>
		</div>
		<div class="nine columns">
			<div class="gamelink"><center><a :href="game.link">{{ game.title }}</a></center></div>
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
		episodes: [
								{ id: 9,
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
								{ id: 10,
									games: [
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
												]
								}
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
