Vue.component('episode-list', {
	props: ['game'],
	template: 
	`
    <div class="container">
      <div class="left">
        <div class="three columns">
         <div v-if="game.episode % 2 == 0">
          <img v-if="game.winner" src="assets/FloppyCrown.png" height=128>
          <img v-else src="assets/FloppyClean.png" height=128>
         </div>
         <div v-else>
         &nbsp;
         </div>
        </div>
        <div class="six columns">
          <br>
          <br>
          <a :href="game.link">{{ game.title }}</a>
        </div>
        <div class="three columns"/>
          <div v-if="!(game.episode % 2 == 0)">
          <img v-if="game.winner" src="assets/FloppyCrown.png" height=128>
          <img v-else src="assets/FloppyClean.png" height=128>
          </div>
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
	     <img src="assets/FloppyCrown.png" height=128>
       </div>
       <div class="nine columns">
         <br>
         <br>
         {{ game.ranking }} {{ game.title }}
       </div>
	 </div>
	</div> 
	`,
})

var app = new Vue({
  el: '#app',
  data: {
  	toggleEpisode : true,
    games: [
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
      	winner: true,
        episode: 5,
      	ranking: 5,
      },
      { 
      	title: 'Lords of Doom',
      	link: 'https://archive.org/details/msdos_Lords_of_Doom_1990',
      	winner: false,
        episode: 5,
      	ranking: null,
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
      	ranking: 4,
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
