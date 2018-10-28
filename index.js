Vue.component('episode-list', {
	props: ['game'],
	template:
	`
    <div class="container">
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
    games: [     
      {
        title : "DEMO .EXE (Obscure MS-DOS Game)",
        link: "https://archive.org/details/demoexe",
        winner: false,
        episode: 9,
        ranking: null,
      },
      {
        title: "Tag Team Wrestling",
        link: "https://archive.org/details/msdos_Tag_Team_Wrestling_1986",
        winner: false,
        episode: 9,
        ranking: null,
      },
      {
        title: "Druglord",
        link: "https://archive.org/details/msdos_Druglord_1991",
        winner: false,
        episode: 9,
        ranking: null,
      },
      {
      	title: "Troll's Tale",
      	link: "https://archive.org/details/msdos_Trolls_Tale_1984",
      	winner: true,
        episode: 8,
      	ranking: 6,
      },
      {
      	title: "Ballie D. Plumber Episode 1: Ballie in D. Pipes",
      	link: "https://archive.org/details/game-maker_ballie-in-d-pipes",
      	winner: false,
        episode: 8,
      	ranking: null,
      },
      {
      	title: "C.I.A. Adventure",
      	link: "https://archive.org/details/cia-adventure",
      	winner: false,
        episode: 8,
      	ranking: null,
      },
      {
      	title: "Sopwith 2",
      	link: "https://archive.org/details/msdos_Sopwith_2_1985",
      	winner: true,
        episode: 7,
      	ranking: 4,
      },
      {
      	title: "Thief's Adventure",
      	link: "https://archive.org/details/msdos_Thiefs_Adventure_1986",
      	winner: false,
        episode: 7,
      	ranking: null,
      },
      {
      	title: "Fallen Angel",
      	link: "https://archive.org/details/msdos_Fallen_Angel_1989",
      	winner: false,
        episode: 7,
      	ranking: null,
      },
      {
      	title: 'Adventures in Melgratta',
      	link: 'https://archive.org/details/msdos_4th_and_Inches_1988',
      	winner: false,
        episode: 6,
      	ranking: null,
      },
      {
      	title: 'Kret' ,
      	link: 'https://archive.org/details/msdos_Kret_1991',
      	winner: true,
      	episode: 6,
      	ranking: 5,
      },
      {
      	title: '4th & Inches',
      	link: 'https://archive.org/details/game-maker_adventures-in-melgratta',
      	winner: false,
        episode: 6,
      	ranking: null,
      },
      {
      	title: 'Timothy Leary\'s Mind Mirror' ,
      	link: 'https://archive.org/details/msdos_Timothy_Learys_Mind_Mirror_1986',
      	winner: false,
      	episode: 5,
      	ranking: null,
      },
      {
      	title: 'Oxyd',
      	link: 'https://archive.org/details/msdos_Oxyd_1992',
      	winner: false,
        episode: 5,
      	ranking: null,
      },
      {
      	title: 'Lords of Doom',
      	link: 'https://archive.org/details/msdos_Lords_of_Doom_1990',
      	winner: true,
        episode: 5,
      	ranking: 7,
      },
      {
      	title: 'Jordan vs Bird, One-on-One',
      	link: 'https://archive.org/details/msdos_Jordan_vs_Bird_-_One_on_One_1988',
      	winner: true,
      	episode: 4,
      	ranking: 3,
      },
      {
      	title: 'Silicon Dreams',
      	link: 'https://archive.org/details/msdos_Silicon_Dreams_1986',
      	winner: false,
        episode: 4,
      	ranking: null,

      },
      {
      	title: 'Spy Master',
      	link: 'https://archive.org/details/msdos_Spy_Master_1994',
      	winner: false,
        episode: 4,
      	ranking: null,
      },
      {
      	title: 'Graeme Souness Soccer Manager' ,
      	link: 'https://archive.org/details/msdos_Graeme_Souness_Soccer_Manager_1992',
      	winner: false,
      	episode: 3,
      	ranking: null,
      },
      {
      	title: 'Webster - The Word Game',
      	link: 'https://archive.org/details/msdos_Webster_-_The_Word_Game_1984',
      	winner: false,
        episode: 3,
      	ranking: null,
      },
      {
      	title: 'URI Quest, Chapter One: The Freshman Encounter',
      	link: 'https://archive.org/details/agi_uri-quest-v0.173',
      	winner: true,
        episode: 3,
      	ranking: 8,
      },
      {
      	title: 'Project Neptune' ,
      	link: 'https://archive.org/details/msdos_Project_Neptune_1989',
      	winner: true,
      	episode: 2,
      	ranking: 2,
      },
      {
      	title: 'Lettrix',
      	link: 'https://archive.org/details/msdos_Lettrix_1990',
      	winner: false,
        episode: 2,
      	ranking: null,
      },
      {
      	title: 'Willy The Worm',
      	link: 'https://archive.org/details/msdos_Willy_The_Worm_1985',
      	winner: false,
        episode: 2,
      	ranking: null,
      },
      {
      	title: 'Pyramid Power' ,
      	link: 'https://archive.org/details/msdos_Pyramid_Power_1986',
      	winner: false,
      	episode: 1,
      	ranking: null,
      },
      {
      	title: 'Miner 2049er',
      	link: 'https://archive.org/details/msdos_Miner_2049er_1983',
      	winner: false,
        episode: 1,
      	ranking: null,
      },
      {
      	title: 'Metaltech Battledrome',
      	link: 'https://archive.org/details/msdos_Metaltech_Battledrome_1994',
      	winner: true,
        episode: 1,
      	ranking: 1,
      },
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
