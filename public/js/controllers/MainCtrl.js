angular.module('MainCtrl', []).controller('MainController', function($scope) {


    $scope.selectedState = "";
$scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];




	//POKEMON
	$scope.pokemon = [
        {
            id: 1,
            name: 'Bulbasaur',
            types: [
            	'Grass',
            	'Poison'
            ],
            HP: 45,
            Atk: 49,
            Def: 49,
            SpAtk: 65,
            SpDef: 65,
            Spd: 45,
            Total: 318,
            abilities: [
                'Overgrow',
                'Chlorophyll'
            ],
            image: 'http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
        },
        {
            id: 2,
            name: 'Ivysaur',
            types: [
            	'Grass',
            	'Poison'
            ],
            HP: 60,
            Atk: 62,
            Def: 63,
            SpAtk: 80,
            SpDef: 80,
            Spd: 60,
            Total: 405,
            abilities: [
                'Overgrow',
                'Chlorophyll'
            ],
            image: 'http://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png',
        },
        {
            id: 3,
            name: 'Venusaur',
            types: [
            	'Grass',
            	'Poison'
            ],
            HP: 80,
            Atk: 82,
            Def: 83,
            SpAtk: 100,
            SpDef: 100,
            Spd: 80,
            Total: 525,
            abilities: [
                'Overgrow',
                'Chlorophyll'
            ],
            image: 'http://cdn.bulbagarden.net/upload/a/ae/003Venusaur.png',
        },
        {
            id: 4,
            name: 'Charmander',
            types: [
            	'Fire'
            ],
            HP: 39,
            Atk: 52,
            Def: 43,
            SpAtk: 60,
            SpDef: 50,
            Spd: 65,
            Total: 309,
            abilities: [
                'Blaze',
                'Solar Power'
            ],
            image: 'http://cdn.bulbagarden.net/upload/7/73/004Charmander.png',
        },
        {
            id: 5,
            name: 'Charmeleon',
            types: [
            	'Fire'
            ],
            HP: 58,
            Atk: 64,
            Def: 58,
            SpAtk: 80,
            SpDef: 65,
            Spd: 80,
            Total: 405,
            abilities: [
                'Blaze',
                'Solar Power'
            ],
            image: 'http://cdn.bulbagarden.net/upload/4/4a/005Charmeleon.png',
        },
        {
            id: 6,
            name: 'Charizard',
            types: [
            	'Fire',
            	'Flying'
            ],
            HP: 78,
            Atk: 84,
            Def: 78,
            SpAtk: 109,
            SpDef: 85,
            Spd: 100,
            Total: 534,
            abilities: [
                'Blaze',
                'Solar Power'
            ],
            image: 'http://cdn.bulbagarden.net/upload/7/7e/006Charizard.png',
        },
        {
            id: 7,
            name: 'Squirtle',
            types: [
                'Water'
            ],
            HP: 44,
            Atk: 48,
            Def: 65,
            SpAtk: 50,
            SpDef: 64,
            Spd: 43,
            Total: 314,
            abilities: [
                'Torrent',
                'Rain Dish'
            ],
            image: 'http://cdn.bulbagarden.net/upload/3/39/007Squirtle.png',
        },
        {
            id: 8,
            name: 'Wartortle',
            types: [
                'Water'
            ],
            HP: 59,
            Atk: 63,
            Def: 80,
            SpAtk: 65,
            SpDef: 80,
            Spd: 58,
            Total: 405,
            abilities: [
                'Torrent',
                'Rain Dish'
            ],
            image: 'http://cdn.bulbagarden.net/upload/0/0c/008Wartortle.png',
        },
        {
            id: 9,
            name: 'Blastoise',
            types: [
                'Water'
            ],
            HP: 79,
            Atk: 83,
            Def: 100,
            SpAtk: 85,
            SpDef: 105,
            Spd: 78,
            Total: 530,
            abilities: [
                'Torrent',
                'Rain Dish'
            ],
            image: 'http://cdn.bulbagarden.net/upload/0/02/009Blastoise.png',
        },
        {
            id: 10,
            name: 'Caterpie',
            types: [
                'Bug'
            ],
            HP: 45,
            Atk: 30,
            Def: 35,
            SpAtk: 20,
            SpDef: 20,
            Spd: 45,
            Total: 195,
            abilities: [
                'Shield Dust',
                'Run Away'
            ],
            image: 'http://cdn.bulbagarden.net/upload/5/5d/010Caterpie.png',
        },
        {
            id: 11,
            name: 'Metapod',
            types: [
                'Bug'
            ],
            HP: 50,
            Atk: 20,
            Def: 55,
            SpAtk: 25,
            SpDef: 25,
            Spd: 30,
            Total: 205,
            abilities: [
                'Shed Skin'
            ],
            image: 'http://cdn.bulbagarden.net/upload/c/cd/011Metapod.png',
        },
        {
            id: 12,
            name: 'Butterfree',
            types: [
                'Bug',
                'Flying'
            ],
            HP: 60,
            Atk: 45,
            Def: 50,
            SpAtk: 90,
            SpDef: 80,
            Spd: 70,
            Total: 395,
            abilities: [
                'Compound Eyes',
                'Tinted Lens'
            ],
            image: 'http://cdn.bulbagarden.net/upload/d/d1/012Butterfree.png',
        },
        {
            id: 13,
            name: 'Weedle',
            types: [
                'Bug',
                'Poison'
            ],
            HP: 40,
            Atk: 35,
            Def: 30,
            SpAtk: 20,
            SpDef: 20,
            Spd: 50,
            Total: 195,
            abilities: [
                'Shield Dust',
                'Run Away'
            ],
            image: 'http://cdn.bulbagarden.net/upload/d/df/013Weedle.png',
        },
        {
            id: 14,
            name: 'Kakuna',
            types: [
                'Bug',
                'Poison'
            ],
            HP: 45,
            Atk: 25,
            Def: 50,
            SpAtk: 25,
            SpDef: 25,
            Spd: 35,
            Total: 205,
            abilities: [
                'Shed Skin'
            ],
            image: 'http://cdn.bulbagarden.net/upload/f/f0/014Kakuna.png',
        },
        {
            id: 15,
            name: 'Beedrill',
            types: [
                'Bug',
                'Poison'
            ],
            HP: 65,
            Atk: 90,
            Def: 40,
            SpAtk: 45,
            SpDef: 80,
            Spd: 75,
            Total: 395,
            abilities: [
                'Swarm',
                'Sniper'
            ],
            image: 'http://cdn.bulbagarden.net/upload/6/61/015Beedrill.png',
        },
        {
            id: 16,
            name: 'Pidgey',
            types: [
                'Normal',
                'Flying'
            ],
            HP: 40,
            Atk: 45,
            Def: 40,
            SpAtk: 35,
            SpDef: 35,
            Spd: 56,
            Total: 251,
            abilities: [
                'Keen Eye',
                'Tangled Feet',
                'Big Pecks'
            ],
            image: 'http://cdn.bulbagarden.net/upload/5/55/016Pidgey.png',
        },
        {
            id: 17,
            name: 'Pidgeotto',
            types: [
                'Normal',
                'Flying'
            ],
            HP: 63,
            Atk: 60,
            Def: 55,
            SpAtk: 50,
            SpDef: 50,
            Spd: 71,
            Total: 349,
            abilities: [
                'Keen Eye',
                'Tangled Feet',
                'Big Pecks'
            ],
            image: 'http://cdn.bulbagarden.net/upload/7/7a/017Pidgeotto.png',
        },
        {
            id: 18,
            name: 'Pidgeot',
            types: [
                'Normal',
                'Flying'
            ],
            HP: 83,
            Atk: 80,
            Def: 75,
            SpAtk: 70,
            SpDef: 70,
            Spd: 101,
            Total: 479,
            abilities: [
                'Keen Eye',
                'Tangled Feet',
                'Big Pecks'
            ],
            image: 'http://cdn.bulbagarden.net/upload/5/57/018Pidgeot.png',
        },
        {
            id: 19,
            name: 'Rattata',
            types: [
                'Normal'
            ],
            HP: 30,
            Atk: 56,
            Def: 35,
            SpAtk: 25,
            SpDef: 35,
            Spd: 72,
            Total: 253,
            abilities: [
                'Run Away',
                'Guts',
                'Hustle'
            ],
            image: 'http://cdn.bulbagarden.net/upload/4/46/019Rattata.png',
        },
        {
            id: 20,
            name: 'Raticate',
            types: [
                'Normal'
            ],
            HP: 55,
            Atk: 81,
            Def: 60,
            SpAtk: 50,
            SpDef: 70,
            Spd: 97,
            Total: 413,
            abilities: [
                'Run Away',
                'Guts',
                'Hustle'
            ],
            image: 'http://cdn.bulbagarden.net/upload/f/f4/020Raticate.png',
        },
        {
            id: 21,
            name: 'Spearow',
            types: [
                'Normal',
                'Flying'
            ],
            HP: 40,
            Atk: 60,
            Def: 30,
            SpAtk: 31,
            SpDef: 31,
            Spd: 70,
            Total: 262,
            abilities: [
                'Keen Eye',
                'Sniper'
            ],
            image: 'http://cdn.bulbagarden.net/upload/8/8b/021Spearow.png',
        },
        {
            id: 22,
            name: 'Fearow',
            types: [
                'Normal',
                'Flying'
            ],
            HP: 65,
            Atk: 90,
            Def: 65,
            SpAtk: 61,
            SpDef: 61,
            Spd: 100,
            Total: 442,
            abilities: [
                'Keen Eye',
                'Sniper'
            ],
            image: 'http://cdn.bulbagarden.net/upload/a/a0/022Fearow.png',
        },
        {
            id: 23,
            name: 'Ekans',
            types: [
                'Poison'
            ],
            HP: 35,
            Atk: 60,
            Def: 44,
            SpAtk: 40,
            SpDef: 54,
            Spd: 55,
            Total: 288,
            abilities: [
                'Intimidate',
                'Shed Skin',
                'Unnerve'
            ],
            image: 'http://cdn.bulbagarden.net/upload/f/fa/023Ekans.png',
        },
        {
            id: 24,
            name: 'Arbok',
            types: [
                'Poison'
            ],
            HP: 60,
            Atk: 85,
            Def: 69,
            SpAtk: 65,
            SpDef: 79,
            Spd: 80,
            Total: 438,
            abilities: [
                'Intimidate',
                'Shed Skin',
                'Unnerve'
            ],
            image: 'http://cdn.bulbagarden.net/upload/c/cd/024Arbok.png',
        }
    ];	
	// END POKEMON SCOPE
	$scope.alphabetical = 'name';
    $scope.chart = [
        {
            column1: [
                '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'
            ],
            column2: [
                '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'
            ],
            column3: [
                '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'
            ],
            column4: [
                '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'
            ],
            column5: [
                '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'
            ],
            column6: [
                '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'
            ],
            column7: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ],
            column8: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ],
            column9: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ]
        }
    ]
});