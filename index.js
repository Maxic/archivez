

Vue.component('episode-list', {
	props: ['episode'],
	template:
	`
	<div v-if="episode.id % 2 == 0" class="e_episode">
	<div class="row">
		<div class="three columns">
			<center>
				<span class="eplabel">Episode_{{ episode.id }}</span>
			</center>
		</div>
		<div class="nine columns">&nbsp;</div>
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
	  <div class="three columns" style="align-content: center">
	   <center>
	    <span class="eplabel">Episode_{{ episode.id }}</span>
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

Vue.component('game-ranked-list', {
	props: ['game'],
	template:
	`
		<span class="gamelink"><a :href="game.link">{{ game.title }}</a></span>
	`,
})

Vue.component('ranking-list', {
	props: ['episode'],
	template:
	`
	<div class="row">
	 <div class="three columns">&nbsp;</div>
	 <div class="one column"><span class="rankings">{{ episode.ranking }}</span></div>
		 <div class="five columns">
		  <game-ranked-list v-for="game in episode.games" v-bind:game="game" v-if="game.winner">
		 </game-ranked-list>
		</div>
	  <div class="three columns">&nbsp;</div>
	</div>
	`,
})

var app = new Vue({
  el: '#app',
  data: {
  	toggleEpisode : true,
		episodes: [
								{ id: 9,
									ranking: 9,
								  games: [
												  {
														title: "DEMO .EXE (Obscure MS-DOS Game)",
														link: "https://archive.org/details/demoexe",
														winner: true,
													}, {
														title: "Tag Team Wrestling",
														link: "https://archive.org/details/msdos_Tag_Team_Wrestling_1986",
														winner: false,
													}, {
														title: "Druglord",
														link: "https://archive.org/details/msdos_Druglord_1991",
														winner: false,
													}
												]
								},
								{ id: 8,
									ranking: 6,
									games: [
										      {
										       	title: "Troll's Tale",
										      	link: "https://archive.org/details/msdos_Trolls_Tale_1984",
										      	winner: true,
										      },
										      {
										      	title: "Ballie D. Plumber Episode 1: Ballie in D. Pipes",
										      	link: "https://archive.org/details/game-maker_ballie-in-d-pipes",
										      	winner: false,
										      },
										      {
										      	title: "C.I.A. Adventure",
										      	link: "https://archive.org/details/cia-adventure",
										      	winner: false,
										      }
								  			]
									},
						      {
										id: 7,
										ranking: 4,
										games: [
														{
											      	title: "Sopwith 2",
											      	link: "https://archive.org/details/msdos_Sopwith_2_1985",
											      	winner: true,
											      },
											      {
											      	title: "Thief's Adventure",
											      	link: "https://archive.org/details/msdos_Thiefs_Adventure_1986",
											      	winner: false,
											      },
											      {
											      	title: "Fallen Angel",
											      	link: "https://archive.org/details/msdos_Fallen_Angel_1989",
											      	winner: false,
											      }
													]
									},
									{
									 id: 6,
									 ranking: 5,
									 games: [
											      {
											        title: 'Kret' ,
											        link: 'https://archive.org/details/msdos_Kret_1991',
											        winner: true,
											      },
											      {
											      	title: 'Adventures in Melgratta',
											      	link: 'https://archive.org/details/msdos_4th_and_Inches_1988',
											      	winner: false,
											      },
											      {
											      	title: '4th & Inches',
											      	link: 'https://archive.org/details/game-maker_adventures-in-melgratta',
											      	winner: false,
											      }
													]
									},
									{
									 id: 5,
									 ranking: 7,
									 games: [
											      {
											        title: 'Lords of Doom',
											        link: 'https://archive.org/details/msdos_Lords_of_Doom_1990',
											        winner: true,
											      },
											      {
											      	title: 'Timothy Leary\'s Mind Mirror' ,
											      	link: 'https://archive.org/details/msdos_Timothy_Learys_Mind_Mirror_1986',
											      	winner: false,
											      },
											      {
											      	title: 'Oxyd',
											      	link: 'https://archive.org/details/msdos_Oxyd_1992',
											      	winner: false,
											      }
													]
									},
									{
									 id: 4,
									 ranking: 3,
									 games: [
											      {
											      	title: 'Jordan vs Bird, One-on-One',
											      	link: 'https://archive.org/details/msdos_Jordan_vs_Bird_-_One_on_One_1988',
											      	winner: true,
											      },
											      {
											      	title: 'Silicon Dreams',
											      	link: 'https://archive.org/details/msdos_Silicon_Dreams_1986',
											      	winner: false,
											      },
											      {
											      	title: 'Spy Master',
											      	link: 'https://archive.org/details/msdos_Spy_Master_1994',
											      	winner: false,
											      }
													]
									},
									{
									 id: 3,
									 ranking: 8,
									 games: [
											      {
											        title: 'URI Quest, Chapter One: The Freshman Encounter',
											        link: 'https://archive.org/details/agi_uri-quest-v0.173',
											        winner: true,
											      },
											      {
											      	title: 'Graeme Souness Soccer Manager' ,
											      	link: 'https://archive.org/details/msdos_Graeme_Souness_Soccer_Manager_1992',
											      	winner: false,
											      },
											      {
											      	title: 'Webster - The Word Game',
											      	link: 'https://archive.org/details/msdos_Webster_-_The_Word_Game_1984',
											      	winner: false,
											      }
													]
									},
						     	{
									 id: 2,
									 ranking: 2,
									 games: [
														{
											      	title: 'Project Neptune' ,
											      	link: 'https://archive.org/details/msdos_Project_Neptune_1989',
											      	winner: true,
											      },
											      {
											      	title: 'Lettrix',
											      	link: 'https://archive.org/details/msdos_Lettrix_1990',
											      	winner: false,
											      },
											      {
											      	title: 'Willy The Worm',
											      	link: 'https://archive.org/details/msdos_Willy_The_Worm_1985',
											      	winner: false,
											      }
													]
									},
									{
									 id: 1,
									 ranking: 1,
									 games: [
											      {
											        title: 'Metaltech Battledrome',
											        link: 'https://archive.org/details/msdos_Metaltech_Battledrome_1994',
											        winner: true,
											      },
											      {
											      	title: 'Pyramid Power' ,
											      	link: 'https://archive.org/details/msdos_Pyramid_Power_1986',
											      	winner: false,
											      },
											      {
											      	title: 'Miner 2049er',
											      	link: 'https://archive.org/details/msdos_Miner_2049er_1983',
											      	winner: false,
											      }
													]
										}
					]

},
  computed: {
  	orderedEpisodes : function(){
  		return this.episodes.filter(function(a){ return a.ranking != null
  		}).sort(function(a,b){return a.ranking - b.ranking})
  	}
  },
  methods : {
  	switchView: function () {
      this.toggleEpisode = !this.toggleEpisode
    }
  }
})
