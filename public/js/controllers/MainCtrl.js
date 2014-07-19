angular.module('MainCtrl', []).controller('MainController', function($scope) {

	//POKEMON SCOPE
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