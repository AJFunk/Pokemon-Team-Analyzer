function fix(){
    var divWidth = $('#topRow .pokemonImg').width();
    $('#topRow .col-xs-1').css('height', divWidth);
    $('#topRow .col-xs-2').css('height', divWidth);
}

function update(){
    update1();
    update2();
    update3();
    update4();
    update5();
    update6();
    updateTotals();
    cleanUp();
    var scope = angular.element($('#pokemon1type1')).scope();
    scope.$apply();
    getInfo();
}

function update1(){
	var scope = angular.element($('#pokemon1type1')).scope();
    var id1 = $( '#id1' ).html();
    if(!id1){
        return;
    }

    var i = id1 - 1;
    var type1 = scope.pokemon[i].types[0];
    if(scope.pokemon[i].types[1]){
    	var type2 = scope.pokemon[i].types[1];
    } else{
    	type2 = null;
    }

    // Reset Column
    for(var n = 0; n <= 17; n++){
    	scope.chart[0].column1[n] = 1;
    }
    //Check Type, Modify Column
    if(type1 == 'Normal'){
    	scope.chart[0].column1[1] *= 2; 	
    	scope.chart[0].column1[7] = 0; 
    } else if(type1 == 'Fighting'){
    	scope.chart[0].column1[2] *= 2;
    	scope.chart[0].column1[5] /= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[13] *= 2;
    	scope.chart[0].column1[16] /= 2;
    	scope.chart[0].column1[17] *= 2;
    } else if(type1 == 'Flying'){
    	scope.chart[0].column1[1] /= 2;
	    scope.chart[0].column1[4] = 0;
    	scope.chart[0].column1[5] *= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[11] /= 2;
    	scope.chart[0].column1[12] *= 2;
    	scope.chart[0].column1[14] *= 2;
    } else if(type1 == 'Poison'){
    	scope.chart[0].column1[1] /= 2;
    	scope.chart[0].column1[3] /= 2;
    	scope.chart[0].column1[4] *= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[11] /= 2;
    	scope.chart[0].column1[13] *= 2;
    	scope.chart[0].column1[17] /= 2;
    } else if(type1 == 'Ground'){
    	scope.chart[0].column1[3] /= 2;
    	scope.chart[0].column1[5] /= 2;
    	scope.chart[0].column1[10] *= 2;
    	scope.chart[0].column1[11] *= 2;
    	scope.chart[0].column1[12] = 0;
    	scope.chart[0].column1[14] *= 2;
    } else if(type1 == 'Rock'){
    	scope.chart[0].column1[0] /= 2;
    	scope.chart[0].column1[1] *= 2;
    	scope.chart[0].column1[2] /= 2;
    	scope.chart[0].column1[3] /= 2;
    	scope.chart[0].column1[4] *= 2;
    	scope.chart[0].column1[8] *= 2;
    	scope.chart[0].column1[9] /= 2;
    	scope.chart[0].column1[10] *= 2;
    	scope.chart[0].column1[11] *= 2;
    } else if(type1 == 'Bug'){
    	scope.chart[0].column1[1] /= 2;
    	scope.chart[0].column1[2] *= 2;
    	scope.chart[0].column1[4] /= 2;
    	scope.chart[0].column1[5] *= 2;
    	scope.chart[0].column1[9] *= 2;
    	scope.chart[0].column1[11] /= 2;
    } else if(type1 == 'Ghost'){
    	scope.chart[0].column1[0] = 0;
    	scope.chart[0].column1[1] = 0;
    	scope.chart[0].column1[3] /= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[7] *= 2;
    	scope.chart[0].column1[16] *= 2;
    } else if(type1 == 'Steel'){
    	scope.chart[0].column1[0] /= 2;
    	scope.chart[0].column1[1] *= 2;
    	scope.chart[0].column1[2] /= 2;
    	scope.chart[0].column1[3] = 0;
    	scope.chart[0].column1[4] *= 2;
    	scope.chart[0].column1[5] /= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[8] /= 2;
    	scope.chart[0].column1[9] *= 2;
    	scope.chart[0].column1[11] /= 2;
    	scope.chart[0].column1[13] /= 2;
    	scope.chart[0].column1[14] /= 2;
    	scope.chart[0].column1[15] /= 2;
    	scope.chart[0].column1[17] /= 2;
    } else if(type1 == 'Fire'){
    	scope.chart[0].column1[4] *= 2;
    	scope.chart[0].column1[5] *= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[8] /= 2;
    	scope.chart[0].column1[9] /= 2;
    	scope.chart[0].column1[10] *= 2;
    	scope.chart[0].column1[11] /= 2;
    	scope.chart[0].column1[14] /= 2;
    	scope.chart[0].column1[17] /= 2;
    } else if(type1 == 'Water'){
    	scope.chart[0].column1[8] /= 2;
    	scope.chart[0].column1[9] /= 2;
    	scope.chart[0].column1[10] /= 2;
    	scope.chart[0].column1[11] *= 2;
    	scope.chart[0].column1[12] *= 2;
    	scope.chart[0].column1[14] /= 2;
    } else if(type1 == 'Grass'){
    	scope.chart[0].column1[2] *= 2;
    	scope.chart[0].column1[3] *= 2;
    	scope.chart[0].column1[4] /= 2;
    	scope.chart[0].column1[6] *= 2;
    	scope.chart[0].column1[9] *= 2;
    	scope.chart[0].column1[10] /= 2;
    	scope.chart[0].column1[11] /= 2;
    	scope.chart[0].column1[12] /= 2;
    	scope.chart[0].column1[14] *= 2;
    } else if(type1 == 'Electric'){
    	scope.chart[0].column1[2] /= 2;
    	scope.chart[0].column1[4] *= 2;
    	scope.chart[0].column1[8] /= 2;
    	scope.chart[0].column1[12] /= 2;
    } else if(type1 == 'Psychic'){
    	scope.chart[0].column1[1] /= 2;
    	scope.chart[0].column1[6] *= 2;
    	scope.chart[0].column1[7] *= 2;
    	scope.chart[0].column1[13] /= 2;
    	scope.chart[0].column1[16] *= 2;
    } else if(type1 == 'Ice'){
    	scope.chart[0].column1[1] *= 2;
    	scope.chart[0].column1[5] *= 2;
    	scope.chart[0].column1[8] *= 2;
    	scope.chart[0].column1[9] *= 2;
    	scope.chart[0].column1[14] /= 2;
    } else if(type1 == 'Dragon'){
    	scope.chart[0].column1[9] /= 2;
    	scope.chart[0].column1[10] /= 2;
    	scope.chart[0].column1[11] /= 2;
    	scope.chart[0].column1[12] /= 2;
    	scope.chart[0].column1[14] *= 2;
    	scope.chart[0].column1[15] *= 2;
    	scope.chart[0].column1[17] *= 2;
    } else if(type1 == 'Dark'){
    	scope.chart[0].column1[1] *= 2;
    	scope.chart[0].column1[6] *= 2;
    	scope.chart[0].column1[7] /= 2;
    	scope.chart[0].column1[13] = 0;
    	scope.chart[0].column1[16] /= 2;
    	scope.chart[0].column1[17] *= 2;
    } else if(type1 == 'Fairy'){
    	scope.chart[0].column1[1] /= 2;
    	scope.chart[0].column1[3] *= 2;
    	scope.chart[0].column1[6] /= 2;
    	scope.chart[0].column1[8] *= 2;
    	scope.chart[0].column1[15] = 0;
    	scope.chart[0].column1[16] /= 2;
    }

    if(type2 != null){
    	if(type2 == 'Normal'){
	    	scope.chart[0].column1[1] *= 2; 	
	    	scope.chart[0].column1[7] = 0; 
	    } else if(type2 == 'Fighting'){
	    	scope.chart[0].column1[2] *= 2;
	    	scope.chart[0].column1[5] /= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[13] *= 2;
	    	scope.chart[0].column1[16] /= 2;
	    	scope.chart[0].column1[17] *= 2;
	    } else if(type2 == 'Flying'){
	    	scope.chart[0].column1[1] /= 2;
		    scope.chart[0].column1[4] = 0;
	    	scope.chart[0].column1[5] *= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[11] /= 2;
	    	scope.chart[0].column1[12] *= 2;
	    	scope.chart[0].column1[14] *= 2;
	    } else if(type2 == 'Poison'){
	    	scope.chart[0].column1[1] /= 2;
	    	scope.chart[0].column1[3] /= 2;
	    	scope.chart[0].column1[4] *= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[11] /= 2;
	    	scope.chart[0].column1[13] *= 2;
	    	scope.chart[0].column1[17] /= 2;
	    } else if(type2 == 'Ground'){
	    	scope.chart[0].column1[3] /= 2;
	    	scope.chart[0].column1[5] /= 2;
	    	scope.chart[0].column1[10] *= 2;
	    	scope.chart[0].column1[11] *= 2;
	    	scope.chart[0].column1[12] = 0;
	    	scope.chart[0].column1[14] *= 2;
	    } else if(type2 == 'Rock'){
	    	scope.chart[0].column1[0] /= 2;
	    	scope.chart[0].column1[1] *= 2;
	    	scope.chart[0].column1[2] /= 2;
	    	scope.chart[0].column1[3] /= 2;
	    	scope.chart[0].column1[4] *= 2;
	    	scope.chart[0].column1[8] *= 2;
	    	scope.chart[0].column1[9] /= 2;
	    	scope.chart[0].column1[10] *= 2;
	    	scope.chart[0].column1[11] *= 2;
	    } else if(type2 == 'Bug'){
	    	scope.chart[0].column1[1] /= 2;
	    	scope.chart[0].column1[2] *= 2;
	    	scope.chart[0].column1[4] /= 2;
	    	scope.chart[0].column1[5] *= 2;
	    	scope.chart[0].column1[9] *= 2;
	    	scope.chart[0].column1[11] /= 2;
	    } else if(type2 == 'Ghost'){
	    	scope.chart[0].column1[0] = 0;
	    	scope.chart[0].column1[1] = 0;
	    	scope.chart[0].column1[3] /= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[7] *= 2;
	    	scope.chart[0].column1[16] *= 2;
	    } else if(type2 == 'Steel'){
	    	scope.chart[0].column1[0] /= 2;
	    	scope.chart[0].column1[1] *= 2;
	    	scope.chart[0].column1[2] /= 2;
	    	scope.chart[0].column1[3] = 0;
	    	scope.chart[0].column1[4] *= 2;
	    	scope.chart[0].column1[5] /= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[8] /= 2;
	    	scope.chart[0].column1[9] *= 2;
	    	scope.chart[0].column1[11] /= 2;
	    	scope.chart[0].column1[13] /= 2;
	    	scope.chart[0].column1[14] /= 2;
	    	scope.chart[0].column1[15] /= 2;
	    	scope.chart[0].column1[17] /= 2;
	    } else if(type2 == 'Fire'){
	    	scope.chart[0].column1[4] *= 2;
	    	scope.chart[0].column1[5] *= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[8] /= 2;
	    	scope.chart[0].column1[9] /= 2;
	    	scope.chart[0].column1[10] *= 2;
	    	scope.chart[0].column1[11] /= 2;
	    	scope.chart[0].column1[14] /= 2;
	    	scope.chart[0].column1[17] /= 2;
	    } else if(type2 == 'Water'){
	    	scope.chart[0].column1[8] /= 2;
	    	scope.chart[0].column1[9] /= 2;
	    	scope.chart[0].column1[10] /= 2;
	    	scope.chart[0].column1[11] *= 2;
	    	scope.chart[0].column1[12] *= 2;
	    	scope.chart[0].column1[14] /= 2;
	    } else if(type2 == 'Grass'){
	    	scope.chart[0].column1[2] *= 2;
	    	scope.chart[0].column1[3] *= 2;
	    	scope.chart[0].column1[4] /= 2;
	    	scope.chart[0].column1[6] *= 2;
	    	scope.chart[0].column1[9] *= 2;
	    	scope.chart[0].column1[10] /= 2;
	    	scope.chart[0].column1[11] /= 2;
	    	scope.chart[0].column1[12] /= 2;
	    	scope.chart[0].column1[14] *= 2;
	    } else if(type2 == 'Electric'){
	    	scope.chart[0].column1[2] /= 2;
	    	scope.chart[0].column1[4] *= 2;
	    	scope.chart[0].column1[8] /= 2;
	    	scope.chart[0].column1[12] /= 2;
	    } else if(type2 == 'Psychic'){
	    	scope.chart[0].column1[1] /= 2;
	    	scope.chart[0].column1[6] *= 2;
	    	scope.chart[0].column1[7] *= 2;
	    	scope.chart[0].column1[13] /= 2;
	    	scope.chart[0].column1[16] *= 2;
	    } else if(type2 == 'Ice'){
	    	scope.chart[0].column1[1] *= 2;
	    	scope.chart[0].column1[5] *= 2;
	    	scope.chart[0].column1[8] *= 2;
	    	scope.chart[0].column1[9] *= 2;
	    	scope.chart[0].column1[14] /= 2;
	    } else if(type2 == 'Dragon'){
	    	scope.chart[0].column1[9] /= 2;
	    	scope.chart[0].column1[10] /= 2;
	    	scope.chart[0].column1[11] /= 2;
	    	scope.chart[0].column1[12] /= 2;
	    	scope.chart[0].column1[14] *= 2;
	    	scope.chart[0].column1[15] *= 2;
	    	scope.chart[0].column1[17] *= 2;
	    } else if(type2 == 'Dark'){
	    	scope.chart[0].column1[1] *= 2;
	    	scope.chart[0].column1[6] *= 2;
	    	scope.chart[0].column1[7] /= 2;
	    	scope.chart[0].column1[13] = 0;
	    	scope.chart[0].column1[16] /= 2;
	    	scope.chart[0].column1[17] *= 2;
	    } else if(type2 == 'Fairy'){
	    	scope.chart[0].column1[1] /= 2;
	    	scope.chart[0].column1[3] *= 2;
	    	scope.chart[0].column1[6] /= 2;
	    	scope.chart[0].column1[8] *= 2;
	    	scope.chart[0].column1[15] = 0;
	    	scope.chart[0].column1[16] /= 2;
	    }
    }
}

function update2(){
    var scope = angular.element($('#pokemon1type1')).scope();
    var id2 = $( '#id2' ).html();
    if(!id2){
        return;
    }

    var i = id2 - 1;
    var type1 = scope.pokemon[i].types[0];
    if(scope.pokemon[i].types[1]){
        var type2 = scope.pokemon[i].types[1];
    } else{
        type2 = null;
    }

    // Reset Column
    for(var n = 0; n <= 17; n++){
        scope.chart[0].column2[n] = 1;
    }
    //Check Type, Modify Column
    if(type1 == 'Normal'){
        scope.chart[0].column2[1] *= 2;     
        scope.chart[0].column2[7] = 0; 
    } else if(type1 == 'Fighting'){
        scope.chart[0].column2[2] *= 2;
        scope.chart[0].column2[5] /= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[13] *= 2;
        scope.chart[0].column2[16] /= 2;
        scope.chart[0].column2[17] *= 2;
    } else if(type1 == 'Flying'){
        scope.chart[0].column2[1] /= 2;
        scope.chart[0].column2[4] = 0;
        scope.chart[0].column2[5] *= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[11] /= 2;
        scope.chart[0].column2[12] *= 2;
        scope.chart[0].column2[14] *= 2;
    } else if(type1 == 'Poison'){
        scope.chart[0].column2[1] /= 2;
        scope.chart[0].column2[3] /= 2;
        scope.chart[0].column2[4] *= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[11] /= 2;
        scope.chart[0].column2[13] *= 2;
        scope.chart[0].column2[17] /= 2;
    } else if(type1 == 'Ground'){
        scope.chart[0].column2[3] /= 2;
        scope.chart[0].column2[5] /= 2;
        scope.chart[0].column2[10] *= 2;
        scope.chart[0].column2[11] *= 2;
        scope.chart[0].column2[12] = 0;
        scope.chart[0].column2[14] *= 2;
    } else if(type1 == 'Rock'){
        scope.chart[0].column2[0] /= 2;
        scope.chart[0].column2[1] *= 2;
        scope.chart[0].column2[2] /= 2;
        scope.chart[0].column2[3] /= 2;
        scope.chart[0].column2[4] *= 2;
        scope.chart[0].column2[8] *= 2;
        scope.chart[0].column2[9] /= 2;
        scope.chart[0].column2[10] *= 2;
        scope.chart[0].column2[11] *= 2;
    } else if(type1 == 'Bug'){
        scope.chart[0].column2[1] /= 2;
        scope.chart[0].column2[2] *= 2;
        scope.chart[0].column2[4] /= 2;
        scope.chart[0].column2[5] *= 2;
        scope.chart[0].column2[9] *= 2;
        scope.chart[0].column2[11] /= 2;
    } else if(type1 == 'Ghost'){
        scope.chart[0].column2[0] = 0;
        scope.chart[0].column2[1] = 0;
        scope.chart[0].column2[3] /= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[7] *= 2;
        scope.chart[0].column2[16] *= 2;
    } else if(type1 == 'Steel'){
        scope.chart[0].column2[0] /= 2;
        scope.chart[0].column2[1] *= 2;
        scope.chart[0].column2[2] /= 2;
        scope.chart[0].column2[3] = 0;
        scope.chart[0].column2[4] *= 2;
        scope.chart[0].column2[5] /= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[8] /= 2;
        scope.chart[0].column2[9] *= 2;
        scope.chart[0].column2[11] /= 2;
        scope.chart[0].column2[13] /= 2;
        scope.chart[0].column2[14] /= 2;
        scope.chart[0].column2[15] /= 2;
        scope.chart[0].column2[17] /= 2;
    } else if(type1 == 'Fire'){
        scope.chart[0].column2[4] *= 2;
        scope.chart[0].column2[5] *= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[8] /= 2;
        scope.chart[0].column2[9] /= 2;
        scope.chart[0].column2[10] *= 2;
        scope.chart[0].column2[11] /= 2;
        scope.chart[0].column2[14] /= 2;
        scope.chart[0].column2[17] /= 2;
    } else if(type1 == 'Water'){
        scope.chart[0].column2[8] /= 2;
        scope.chart[0].column2[9] /= 2;
        scope.chart[0].column2[10] /= 2;
        scope.chart[0].column2[11] *= 2;
        scope.chart[0].column2[12] *= 2;
        scope.chart[0].column2[14] /= 2;
    } else if(type1 == 'Grass'){
        scope.chart[0].column2[2] *= 2;
        scope.chart[0].column2[3] *= 2;
        scope.chart[0].column2[4] /= 2;
        scope.chart[0].column2[6] *= 2;
        scope.chart[0].column2[9] *= 2;
        scope.chart[0].column2[10] /= 2;
        scope.chart[0].column2[11] /= 2;
        scope.chart[0].column2[12] /= 2;
        scope.chart[0].column2[14] *= 2;
    } else if(type1 == 'Electric'){
        scope.chart[0].column2[2] /= 2;
        scope.chart[0].column2[4] *= 2;
        scope.chart[0].column2[8] /= 2;
        scope.chart[0].column2[12] /= 2;
    } else if(type1 == 'Psychic'){
        scope.chart[0].column2[1] /= 2;
        scope.chart[0].column2[6] *= 2;
        scope.chart[0].column2[7] *= 2;
        scope.chart[0].column2[13] /= 2;
        scope.chart[0].column2[16] *= 2;
    } else if(type1 == 'Ice'){
        scope.chart[0].column2[1] *= 2;
        scope.chart[0].column2[5] *= 2;
        scope.chart[0].column2[8] *= 2;
        scope.chart[0].column2[9] *= 2;
        scope.chart[0].column2[14] /= 2;
    } else if(type1 == 'Dragon'){
        scope.chart[0].column2[9] /= 2;
        scope.chart[0].column2[10] /= 2;
        scope.chart[0].column2[11] /= 2;
        scope.chart[0].column2[12] /= 2;
        scope.chart[0].column2[14] *= 2;
        scope.chart[0].column2[15] *= 2;
        scope.chart[0].column2[17] *= 2;
    } else if(type1 == 'Dark'){
        scope.chart[0].column2[1] *= 2;
        scope.chart[0].column2[6] *= 2;
        scope.chart[0].column2[7] /= 2;
        scope.chart[0].column2[13] = 0;
        scope.chart[0].column2[16] /= 2;
        scope.chart[0].column2[17] *= 2;
    } else if(type1 == 'Fairy'){
        scope.chart[0].column2[1] /= 2;
        scope.chart[0].column2[3] *= 2;
        scope.chart[0].column2[6] /= 2;
        scope.chart[0].column2[8] *= 2;
        scope.chart[0].column2[15] = 0;
        scope.chart[0].column2[16] /= 2;
    }

    if(type2 != null){
        if(type2 == 'Normal'){
            scope.chart[0].column2[1] *= 2;     
            scope.chart[0].column2[7] = 0; 
        } else if(type2 == 'Fighting'){
            scope.chart[0].column2[2] *= 2;
            scope.chart[0].column2[5] /= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[13] *= 2;
            scope.chart[0].column2[16] /= 2;
            scope.chart[0].column2[17] *= 2;
        } else if(type2 == 'Flying'){
            scope.chart[0].column2[1] /= 2;
            scope.chart[0].column2[4] = 0;
            scope.chart[0].column2[5] *= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[11] /= 2;
            scope.chart[0].column2[12] *= 2;
            scope.chart[0].column2[14] *= 2;
        } else if(type2 == 'Poison'){
            scope.chart[0].column2[1] /= 2;
            scope.chart[0].column2[3] /= 2;
            scope.chart[0].column2[4] *= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[11] /= 2;
            scope.chart[0].column2[13] *= 2;
            scope.chart[0].column2[17] /= 2;
        } else if(type2 == 'Ground'){
            scope.chart[0].column2[3] /= 2;
            scope.chart[0].column2[5] /= 2;
            scope.chart[0].column2[10] *= 2;
            scope.chart[0].column2[11] *= 2;
            scope.chart[0].column2[12] = 0;
            scope.chart[0].column2[14] *= 2;
        } else if(type2 == 'Rock'){
            scope.chart[0].column2[0] /= 2;
            scope.chart[0].column2[1] *= 2;
            scope.chart[0].column2[2] /= 2;
            scope.chart[0].column2[3] /= 2;
            scope.chart[0].column2[4] *= 2;
            scope.chart[0].column2[8] *= 2;
            scope.chart[0].column2[9] /= 2;
            scope.chart[0].column2[10] *= 2;
            scope.chart[0].column2[11] *= 2;
        } else if(type2 == 'Bug'){
            scope.chart[0].column2[1] /= 2;
            scope.chart[0].column2[2] *= 2;
            scope.chart[0].column2[4] /= 2;
            scope.chart[0].column2[5] *= 2;
            scope.chart[0].column2[9] *= 2;
            scope.chart[0].column2[11] /= 2;
        } else if(type2 == 'Ghost'){
            scope.chart[0].column2[0] = 0;
            scope.chart[0].column2[1] = 0;
            scope.chart[0].column2[3] /= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[7] *= 2;
            scope.chart[0].column2[16] *= 2;
        } else if(type2 == 'Steel'){
            scope.chart[0].column2[0] /= 2;
            scope.chart[0].column2[1] *= 2;
            scope.chart[0].column2[2] /= 2;
            scope.chart[0].column2[3] = 0;
            scope.chart[0].column2[4] *= 2;
            scope.chart[0].column2[5] /= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[8] /= 2;
            scope.chart[0].column2[9] *= 2;
            scope.chart[0].column2[11] /= 2;
            scope.chart[0].column2[13] /= 2;
            scope.chart[0].column2[14] /= 2;
            scope.chart[0].column2[15] /= 2;
            scope.chart[0].column2[17] /= 2;
        } else if(type2 == 'Fire'){
            scope.chart[0].column2[4] *= 2;
            scope.chart[0].column2[5] *= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[8] /= 2;
            scope.chart[0].column2[9] /= 2;
            scope.chart[0].column2[10] *= 2;
            scope.chart[0].column2[11] /= 2;
            scope.chart[0].column2[14] /= 2;
            scope.chart[0].column2[17] /= 2;
        } else if(type2 == 'Water'){
            scope.chart[0].column2[8] /= 2;
            scope.chart[0].column2[9] /= 2;
            scope.chart[0].column2[10] /= 2;
            scope.chart[0].column2[11] *= 2;
            scope.chart[0].column2[12] *= 2;
            scope.chart[0].column2[14] /= 2;
        } else if(type2 == 'Grass'){
            scope.chart[0].column2[2] *= 2;
            scope.chart[0].column2[3] *= 2;
            scope.chart[0].column2[4] /= 2;
            scope.chart[0].column2[6] *= 2;
            scope.chart[0].column2[9] *= 2;
            scope.chart[0].column2[10] /= 2;
            scope.chart[0].column2[11] /= 2;
            scope.chart[0].column2[12] /= 2;
            scope.chart[0].column2[14] *= 2;
        } else if(type2 == 'Electric'){
            scope.chart[0].column2[2] /= 2;
            scope.chart[0].column2[4] *= 2;
            scope.chart[0].column2[8] /= 2;
            scope.chart[0].column2[12] /= 2;
        } else if(type2 == 'Psychic'){
            scope.chart[0].column2[1] /= 2;
            scope.chart[0].column2[6] *= 2;
            scope.chart[0].column2[7] *= 2;
            scope.chart[0].column2[13] /= 2;
            scope.chart[0].column2[16] *= 2;
        } else if(type2 == 'Ice'){
            scope.chart[0].column2[1] *= 2;
            scope.chart[0].column2[5] *= 2;
            scope.chart[0].column2[8] *= 2;
            scope.chart[0].column2[9] *= 2;
            scope.chart[0].column2[14] /= 2;
        } else if(type2 == 'Dragon'){
            scope.chart[0].column2[9] /= 2;
            scope.chart[0].column2[10] /= 2;
            scope.chart[0].column2[11] /= 2;
            scope.chart[0].column2[12] /= 2;
            scope.chart[0].column2[14] *= 2;
            scope.chart[0].column2[15] *= 2;
            scope.chart[0].column2[17] *= 2;
        } else if(type2 == 'Dark'){
            scope.chart[0].column2[1] *= 2;
            scope.chart[0].column2[6] *= 2;
            scope.chart[0].column2[7] /= 2;
            scope.chart[0].column2[13] = 0;
            scope.chart[0].column2[16] /= 2;
            scope.chart[0].column2[17] *= 2;
        } else if(type2 == 'Fairy'){
            scope.chart[0].column2[1] /= 2;
            scope.chart[0].column2[3] *= 2;
            scope.chart[0].column2[6] /= 2;
            scope.chart[0].column2[8] *= 2;
            scope.chart[0].column2[15] = 0;
            scope.chart[0].column2[16] /= 2;
        }
    }
}

function update3(){
    var scope = angular.element($('#pokemon1type1')).scope();
    var id3 = $( '#id3' ).html();
    if(!id3){
        return;
    }

    var i = id3 - 1;
    var type1 = scope.pokemon[i].types[0];
    if(scope.pokemon[i].types[1]){
        var type2 = scope.pokemon[i].types[1];
    } else{
        type2 = null;
    }

    // Reset Column
    for(var n = 0; n <= 17; n++){
        scope.chart[0].column3[n] = 1;
    }
    //Check Type, Modify Column
    if(type1 == 'Normal'){
        scope.chart[0].column3[1] *= 2;     
        scope.chart[0].column3[7] = 0; 
    } else if(type1 == 'Fighting'){
        scope.chart[0].column3[2] *= 2;
        scope.chart[0].column3[5] /= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[13] *= 2;
        scope.chart[0].column3[16] /= 2;
        scope.chart[0].column3[17] *= 2;
    } else if(type1 == 'Flying'){
        scope.chart[0].column3[1] /= 2;
        scope.chart[0].column3[4] = 0;
        scope.chart[0].column3[5] *= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[11] /= 2;
        scope.chart[0].column3[12] *= 2;
        scope.chart[0].column3[14] *= 2;
    } else if(type1 == 'Poison'){
        scope.chart[0].column3[1] /= 2;
        scope.chart[0].column3[3] /= 2;
        scope.chart[0].column3[4] *= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[11] /= 2;
        scope.chart[0].column3[13] *= 2;
        scope.chart[0].column3[17] /= 2;
    } else if(type1 == 'Ground'){
        scope.chart[0].column3[3] /= 2;
        scope.chart[0].column3[5] /= 2;
        scope.chart[0].column3[10] *= 2;
        scope.chart[0].column3[11] *= 2;
        scope.chart[0].column3[12] = 0;
        scope.chart[0].column3[14] *= 2;
    } else if(type1 == 'Rock'){
        scope.chart[0].column3[0] /= 2;
        scope.chart[0].column3[1] *= 2;
        scope.chart[0].column3[2] /= 2;
        scope.chart[0].column3[3] /= 2;
        scope.chart[0].column3[4] *= 2;
        scope.chart[0].column3[8] *= 2;
        scope.chart[0].column3[9] /= 2;
        scope.chart[0].column3[10] *= 2;
        scope.chart[0].column3[11] *= 2;
    } else if(type1 == 'Bug'){
        scope.chart[0].column3[1] /= 2;
        scope.chart[0].column3[2] *= 2;
        scope.chart[0].column3[4] /= 2;
        scope.chart[0].column3[5] *= 2;
        scope.chart[0].column3[9] *= 2;
        scope.chart[0].column3[11] /= 2;
    } else if(type1 == 'Ghost'){
        scope.chart[0].column3[0] = 0;
        scope.chart[0].column3[1] = 0;
        scope.chart[0].column3[3] /= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[7] *= 2;
        scope.chart[0].column3[16] *= 2;
    } else if(type1 == 'Steel'){
        scope.chart[0].column3[0] /= 2;
        scope.chart[0].column3[1] *= 2;
        scope.chart[0].column3[2] /= 2;
        scope.chart[0].column3[3] = 0;
        scope.chart[0].column3[4] *= 2;
        scope.chart[0].column3[5] /= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[8] /= 2;
        scope.chart[0].column3[9] *= 2;
        scope.chart[0].column3[11] /= 2;
        scope.chart[0].column3[13] /= 2;
        scope.chart[0].column3[14] /= 2;
        scope.chart[0].column3[15] /= 2;
        scope.chart[0].column3[17] /= 2;
    } else if(type1 == 'Fire'){
        scope.chart[0].column3[4] *= 2;
        scope.chart[0].column3[5] *= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[8] /= 2;
        scope.chart[0].column3[9] /= 2;
        scope.chart[0].column3[10] *= 2;
        scope.chart[0].column3[11] /= 2;
        scope.chart[0].column3[14] /= 2;
        scope.chart[0].column3[17] /= 2;
    } else if(type1 == 'Water'){
        scope.chart[0].column3[8] /= 2;
        scope.chart[0].column3[9] /= 2;
        scope.chart[0].column3[10] /= 2;
        scope.chart[0].column3[11] *= 2;
        scope.chart[0].column3[12] *= 2;
        scope.chart[0].column3[14] /= 2;
    } else if(type1 == 'Grass'){
        scope.chart[0].column3[2] *= 2;
        scope.chart[0].column3[3] *= 2;
        scope.chart[0].column3[4] /= 2;
        scope.chart[0].column3[6] *= 2;
        scope.chart[0].column3[9] *= 2;
        scope.chart[0].column3[10] /= 2;
        scope.chart[0].column3[11] /= 2;
        scope.chart[0].column3[12] /= 2;
        scope.chart[0].column3[14] *= 2;
    } else if(type1 == 'Electric'){
        scope.chart[0].column3[2] /= 2;
        scope.chart[0].column3[4] *= 2;
        scope.chart[0].column3[8] /= 2;
        scope.chart[0].column3[12] /= 2;
    } else if(type1 == 'Psychic'){
        scope.chart[0].column3[1] /= 2;
        scope.chart[0].column3[6] *= 2;
        scope.chart[0].column3[7] *= 2;
        scope.chart[0].column3[13] /= 2;
        scope.chart[0].column3[16] *= 2;
    } else if(type1 == 'Ice'){
        scope.chart[0].column3[1] *= 2;
        scope.chart[0].column3[5] *= 2;
        scope.chart[0].column3[8] *= 2;
        scope.chart[0].column3[9] *= 2;
        scope.chart[0].column3[14] /= 2;
    } else if(type1 == 'Dragon'){
        scope.chart[0].column3[9] /= 2;
        scope.chart[0].column3[10] /= 2;
        scope.chart[0].column3[11] /= 2;
        scope.chart[0].column3[12] /= 2;
        scope.chart[0].column3[14] *= 2;
        scope.chart[0].column3[15] *= 2;
        scope.chart[0].column3[17] *= 2;
    } else if(type1 == 'Dark'){
        scope.chart[0].column3[1] *= 2;
        scope.chart[0].column3[6] *= 2;
        scope.chart[0].column3[7] /= 2;
        scope.chart[0].column3[13] = 0;
        scope.chart[0].column3[16] /= 2;
        scope.chart[0].column3[17] *= 2;
    } else if(type1 == 'Fairy'){
        scope.chart[0].column3[1] /= 2;
        scope.chart[0].column3[3] *= 2;
        scope.chart[0].column3[6] /= 2;
        scope.chart[0].column3[8] *= 2;
        scope.chart[0].column3[15] = 0;
        scope.chart[0].column3[16] /= 2;
    }

    if(type2 != null){
        if(type2 == 'Normal'){
            scope.chart[0].column3[1] *= 2;     
            scope.chart[0].column3[7] = 0; 
        } else if(type2 == 'Fighting'){
            scope.chart[0].column3[2] *= 2;
            scope.chart[0].column3[5] /= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[13] *= 2;
            scope.chart[0].column3[16] /= 2;
            scope.chart[0].column3[17] *= 2;
        } else if(type2 == 'Flying'){
            scope.chart[0].column3[1] /= 2;
            scope.chart[0].column3[4] = 0;
            scope.chart[0].column3[5] *= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[11] /= 2;
            scope.chart[0].column3[12] *= 2;
            scope.chart[0].column3[14] *= 2;
        } else if(type2 == 'Poison'){
            scope.chart[0].column3[1] /= 2;
            scope.chart[0].column3[3] /= 2;
            scope.chart[0].column3[4] *= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[11] /= 2;
            scope.chart[0].column3[13] *= 2;
            scope.chart[0].column3[17] /= 2;
        } else if(type2 == 'Ground'){
            scope.chart[0].column3[3] /= 2;
            scope.chart[0].column3[5] /= 2;
            scope.chart[0].column3[10] *= 2;
            scope.chart[0].column3[11] *= 2;
            scope.chart[0].column3[12] = 0;
            scope.chart[0].column3[14] *= 2;
        } else if(type2 == 'Rock'){
            scope.chart[0].column3[0] /= 2;
            scope.chart[0].column3[1] *= 2;
            scope.chart[0].column3[2] /= 2;
            scope.chart[0].column3[3] /= 2;
            scope.chart[0].column3[4] *= 2;
            scope.chart[0].column3[8] *= 2;
            scope.chart[0].column3[9] /= 2;
            scope.chart[0].column3[10] *= 2;
            scope.chart[0].column3[11] *= 2;
        } else if(type2 == 'Bug'){
            scope.chart[0].column3[1] /= 2;
            scope.chart[0].column3[2] *= 2;
            scope.chart[0].column3[4] /= 2;
            scope.chart[0].column3[5] *= 2;
            scope.chart[0].column3[9] *= 2;
            scope.chart[0].column3[11] /= 2;
        } else if(type2 == 'Ghost'){
            scope.chart[0].column3[0] = 0;
            scope.chart[0].column3[1] = 0;
            scope.chart[0].column3[3] /= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[7] *= 2;
            scope.chart[0].column3[16] *= 2;
        } else if(type2 == 'Steel'){
            scope.chart[0].column3[0] /= 2;
            scope.chart[0].column3[1] *= 2;
            scope.chart[0].column3[2] /= 2;
            scope.chart[0].column3[3] = 0;
            scope.chart[0].column3[4] *= 2;
            scope.chart[0].column3[5] /= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[8] /= 2;
            scope.chart[0].column3[9] *= 2;
            scope.chart[0].column3[11] /= 2;
            scope.chart[0].column3[13] /= 2;
            scope.chart[0].column3[14] /= 2;
            scope.chart[0].column3[15] /= 2;
            scope.chart[0].column3[17] /= 2;
        } else if(type2 == 'Fire'){
            scope.chart[0].column3[4] *= 2;
            scope.chart[0].column3[5] *= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[8] /= 2;
            scope.chart[0].column3[9] /= 2;
            scope.chart[0].column3[10] *= 2;
            scope.chart[0].column3[11] /= 2;
            scope.chart[0].column3[14] /= 2;
            scope.chart[0].column3[17] /= 2;
        } else if(type2 == 'Water'){
            scope.chart[0].column3[8] /= 2;
            scope.chart[0].column3[9] /= 2;
            scope.chart[0].column3[10] /= 2;
            scope.chart[0].column3[11] *= 2;
            scope.chart[0].column3[12] *= 2;
            scope.chart[0].column3[14] /= 2;
        } else if(type2 == 'Grass'){
            scope.chart[0].column3[2] *= 2;
            scope.chart[0].column3[3] *= 2;
            scope.chart[0].column3[4] /= 2;
            scope.chart[0].column3[6] *= 2;
            scope.chart[0].column3[9] *= 2;
            scope.chart[0].column3[10] /= 2;
            scope.chart[0].column3[11] /= 2;
            scope.chart[0].column3[12] /= 2;
            scope.chart[0].column3[14] *= 2;
        } else if(type2 == 'Electric'){
            scope.chart[0].column3[2] /= 2;
            scope.chart[0].column3[4] *= 2;
            scope.chart[0].column3[8] /= 2;
            scope.chart[0].column3[12] /= 2;
        } else if(type2 == 'Psychic'){
            scope.chart[0].column3[1] /= 2;
            scope.chart[0].column3[6] *= 2;
            scope.chart[0].column3[7] *= 2;
            scope.chart[0].column3[13] /= 2;
            scope.chart[0].column3[16] *= 2;
        } else if(type2 == 'Ice'){
            scope.chart[0].column3[1] *= 2;
            scope.chart[0].column3[5] *= 2;
            scope.chart[0].column3[8] *= 2;
            scope.chart[0].column3[9] *= 2;
            scope.chart[0].column3[14] /= 2;
        } else if(type2 == 'Dragon'){
            scope.chart[0].column3[9] /= 2;
            scope.chart[0].column3[10] /= 2;
            scope.chart[0].column3[11] /= 2;
            scope.chart[0].column3[12] /= 2;
            scope.chart[0].column3[14] *= 2;
            scope.chart[0].column3[15] *= 2;
            scope.chart[0].column3[17] *= 2;
        } else if(type2 == 'Dark'){
            scope.chart[0].column3[1] *= 2;
            scope.chart[0].column3[6] *= 2;
            scope.chart[0].column3[7] /= 2;
            scope.chart[0].column3[13] = 0;
            scope.chart[0].column3[16] /= 2;
            scope.chart[0].column3[17] *= 2;
        } else if(type2 == 'Fairy'){
            scope.chart[0].column3[1] /= 2;
            scope.chart[0].column3[3] *= 2;
            scope.chart[0].column3[6] /= 2;
            scope.chart[0].column3[8] *= 2;
            scope.chart[0].column3[15] = 0;
            scope.chart[0].column3[16] /= 2;
        }
    }
}

function update4(){
    var scope = angular.element($('#pokemon1type1')).scope();
    var id4 = $( '#id4' ).html();
    if(!id4){
        return;
    }

    var i = id4 - 1;
    var type1 = scope.pokemon[i].types[0];
    if(scope.pokemon[i].types[1]){
        var type2 = scope.pokemon[i].types[1];
    } else{
        type2 = null;
    }

    // Reset Column
    for(var n = 0; n <= 17; n++){
        scope.chart[0].column4[n] = 1;
    }
    //Check Type, Modify Column
    if(type1 == 'Normal'){
        scope.chart[0].column4[1] *= 2;     
        scope.chart[0].column4[7] = 0; 
    } else if(type1 == 'Fighting'){
        scope.chart[0].column4[2] *= 2;
        scope.chart[0].column4[5] /= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[13] *= 2;
        scope.chart[0].column4[16] /= 2;
        scope.chart[0].column4[17] *= 2;
    } else if(type1 == 'Flying'){
        scope.chart[0].column4[1] /= 2;
        scope.chart[0].column4[4] = 0;
        scope.chart[0].column4[5] *= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[11] /= 2;
        scope.chart[0].column4[12] *= 2;
        scope.chart[0].column4[14] *= 2;
    } else if(type1 == 'Poison'){
        scope.chart[0].column4[1] /= 2;
        scope.chart[0].column4[3] /= 2;
        scope.chart[0].column4[4] *= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[11] /= 2;
        scope.chart[0].column4[13] *= 2;
        scope.chart[0].column4[17] /= 2;
    } else if(type1 == 'Ground'){
        scope.chart[0].column4[3] /= 2;
        scope.chart[0].column4[5] /= 2;
        scope.chart[0].column4[10] *= 2;
        scope.chart[0].column4[11] *= 2;
        scope.chart[0].column4[12] = 0;
        scope.chart[0].column4[14] *= 2;
    } else if(type1 == 'Rock'){
        scope.chart[0].column4[0] /= 2;
        scope.chart[0].column4[1] *= 2;
        scope.chart[0].column4[2] /= 2;
        scope.chart[0].column4[3] /= 2;
        scope.chart[0].column4[4] *= 2;
        scope.chart[0].column4[8] *= 2;
        scope.chart[0].column4[9] /= 2;
        scope.chart[0].column4[10] *= 2;
        scope.chart[0].column4[11] *= 2;
    } else if(type1 == 'Bug'){
        scope.chart[0].column4[1] /= 2;
        scope.chart[0].column4[2] *= 2;
        scope.chart[0].column4[4] /= 2;
        scope.chart[0].column4[5] *= 2;
        scope.chart[0].column4[9] *= 2;
        scope.chart[0].column4[11] /= 2;
    } else if(type1 == 'Ghost'){
        scope.chart[0].column4[0] = 0;
        scope.chart[0].column4[1] = 0;
        scope.chart[0].column4[3] /= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[7] *= 2;
        scope.chart[0].column4[16] *= 2;
    } else if(type1 == 'Steel'){
        scope.chart[0].column4[0] /= 2;
        scope.chart[0].column4[1] *= 2;
        scope.chart[0].column4[2] /= 2;
        scope.chart[0].column4[3] = 0;
        scope.chart[0].column4[4] *= 2;
        scope.chart[0].column4[5] /= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[8] /= 2;
        scope.chart[0].column4[9] *= 2;
        scope.chart[0].column4[11] /= 2;
        scope.chart[0].column4[13] /= 2;
        scope.chart[0].column4[14] /= 2;
        scope.chart[0].column4[15] /= 2;
        scope.chart[0].column4[17] /= 2;
    } else if(type1 == 'Fire'){
        scope.chart[0].column4[4] *= 2;
        scope.chart[0].column4[5] *= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[8] /= 2;
        scope.chart[0].column4[9] /= 2;
        scope.chart[0].column4[10] *= 2;
        scope.chart[0].column4[11] /= 2;
        scope.chart[0].column4[14] /= 2;
        scope.chart[0].column4[17] /= 2;
    } else if(type1 == 'Water'){
        scope.chart[0].column4[8] /= 2;
        scope.chart[0].column4[9] /= 2;
        scope.chart[0].column4[10] /= 2;
        scope.chart[0].column4[11] *= 2;
        scope.chart[0].column4[12] *= 2;
        scope.chart[0].column4[14] /= 2;
    } else if(type1 == 'Grass'){
        scope.chart[0].column4[2] *= 2;
        scope.chart[0].column4[3] *= 2;
        scope.chart[0].column4[4] /= 2;
        scope.chart[0].column4[6] *= 2;
        scope.chart[0].column4[9] *= 2;
        scope.chart[0].column4[10] /= 2;
        scope.chart[0].column4[11] /= 2;
        scope.chart[0].column4[12] /= 2;
        scope.chart[0].column4[14] *= 2;
    } else if(type1 == 'Electric'){
        scope.chart[0].column4[2] /= 2;
        scope.chart[0].column4[4] *= 2;
        scope.chart[0].column4[8] /= 2;
        scope.chart[0].column4[12] /= 2;
    } else if(type1 == 'Psychic'){
        scope.chart[0].column4[1] /= 2;
        scope.chart[0].column4[6] *= 2;
        scope.chart[0].column4[7] *= 2;
        scope.chart[0].column4[13] /= 2;
        scope.chart[0].column4[16] *= 2;
    } else if(type1 == 'Ice'){
        scope.chart[0].column4[1] *= 2;
        scope.chart[0].column4[5] *= 2;
        scope.chart[0].column4[8] *= 2;
        scope.chart[0].column4[9] *= 2;
        scope.chart[0].column4[14] /= 2;
    } else if(type1 == 'Dragon'){
        scope.chart[0].column4[9] /= 2;
        scope.chart[0].column4[10] /= 2;
        scope.chart[0].column4[11] /= 2;
        scope.chart[0].column4[12] /= 2;
        scope.chart[0].column4[14] *= 2;
        scope.chart[0].column4[15] *= 2;
        scope.chart[0].column4[17] *= 2;
    } else if(type1 == 'Dark'){
        scope.chart[0].column4[1] *= 2;
        scope.chart[0].column4[6] *= 2;
        scope.chart[0].column4[7] /= 2;
        scope.chart[0].column4[13] = 0;
        scope.chart[0].column4[16] /= 2;
        scope.chart[0].column4[17] *= 2;
    } else if(type1 == 'Fairy'){
        scope.chart[0].column4[1] /= 2;
        scope.chart[0].column4[3] *= 2;
        scope.chart[0].column4[6] /= 2;
        scope.chart[0].column4[8] *= 2;
        scope.chart[0].column4[15] = 0;
        scope.chart[0].column4[16] /= 2;
    }

    if(type2 != null){
        if(type2 == 'Normal'){
            scope.chart[0].column4[1] *= 2;     
            scope.chart[0].column4[7] = 0; 
        } else if(type2 == 'Fighting'){
            scope.chart[0].column4[2] *= 2;
            scope.chart[0].column4[5] /= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[13] *= 2;
            scope.chart[0].column4[16] /= 2;
            scope.chart[0].column4[17] *= 2;
        } else if(type2 == 'Flying'){
            scope.chart[0].column4[1] /= 2;
            scope.chart[0].column4[4] = 0;
            scope.chart[0].column4[5] *= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[11] /= 2;
            scope.chart[0].column4[12] *= 2;
            scope.chart[0].column4[14] *= 2;
        } else if(type2 == 'Poison'){
            scope.chart[0].column4[1] /= 2;
            scope.chart[0].column4[3] /= 2;
            scope.chart[0].column4[4] *= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[11] /= 2;
            scope.chart[0].column4[13] *= 2;
            scope.chart[0].column4[17] /= 2;
        } else if(type2 == 'Ground'){
            scope.chart[0].column4[3] /= 2;
            scope.chart[0].column4[5] /= 2;
            scope.chart[0].column4[10] *= 2;
            scope.chart[0].column4[11] *= 2;
            scope.chart[0].column4[12] = 0;
            scope.chart[0].column4[14] *= 2;
        } else if(type2 == 'Rock'){
            scope.chart[0].column4[0] /= 2;
            scope.chart[0].column4[1] *= 2;
            scope.chart[0].column4[2] /= 2;
            scope.chart[0].column4[3] /= 2;
            scope.chart[0].column4[4] *= 2;
            scope.chart[0].column4[8] *= 2;
            scope.chart[0].column4[9] /= 2;
            scope.chart[0].column4[10] *= 2;
            scope.chart[0].column4[11] *= 2;
        } else if(type2 == 'Bug'){
            scope.chart[0].column4[1] /= 2;
            scope.chart[0].column4[2] *= 2;
            scope.chart[0].column4[4] /= 2;
            scope.chart[0].column4[5] *= 2;
            scope.chart[0].column4[9] *= 2;
            scope.chart[0].column4[11] /= 2;
        } else if(type2 == 'Ghost'){
            scope.chart[0].column4[0] = 0;
            scope.chart[0].column4[1] = 0;
            scope.chart[0].column4[3] /= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[7] *= 2;
            scope.chart[0].column4[16] *= 2;
        } else if(type2 == 'Steel'){
            scope.chart[0].column4[0] /= 2;
            scope.chart[0].column4[1] *= 2;
            scope.chart[0].column4[2] /= 2;
            scope.chart[0].column4[3] = 0;
            scope.chart[0].column4[4] *= 2;
            scope.chart[0].column4[5] /= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[8] /= 2;
            scope.chart[0].column4[9] *= 2;
            scope.chart[0].column4[11] /= 2;
            scope.chart[0].column4[13] /= 2;
            scope.chart[0].column4[14] /= 2;
            scope.chart[0].column4[15] /= 2;
            scope.chart[0].column4[17] /= 2;
        } else if(type2 == 'Fire'){
            scope.chart[0].column4[4] *= 2;
            scope.chart[0].column4[5] *= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[8] /= 2;
            scope.chart[0].column4[9] /= 2;
            scope.chart[0].column4[10] *= 2;
            scope.chart[0].column4[11] /= 2;
            scope.chart[0].column4[14] /= 2;
            scope.chart[0].column4[17] /= 2;
        } else if(type2 == 'Water'){
            scope.chart[0].column4[8] /= 2;
            scope.chart[0].column4[9] /= 2;
            scope.chart[0].column4[10] /= 2;
            scope.chart[0].column4[11] *= 2;
            scope.chart[0].column4[12] *= 2;
            scope.chart[0].column4[14] /= 2;
        } else if(type2 == 'Grass'){
            scope.chart[0].column4[2] *= 2;
            scope.chart[0].column4[3] *= 2;
            scope.chart[0].column4[4] /= 2;
            scope.chart[0].column4[6] *= 2;
            scope.chart[0].column4[9] *= 2;
            scope.chart[0].column4[10] /= 2;
            scope.chart[0].column4[11] /= 2;
            scope.chart[0].column4[12] /= 2;
            scope.chart[0].column4[14] *= 2;
        } else if(type2 == 'Electric'){
            scope.chart[0].column4[2] /= 2;
            scope.chart[0].column4[4] *= 2;
            scope.chart[0].column4[8] /= 2;
            scope.chart[0].column4[12] /= 2;
        } else if(type2 == 'Psychic'){
            scope.chart[0].column4[1] /= 2;
            scope.chart[0].column4[6] *= 2;
            scope.chart[0].column4[7] *= 2;
            scope.chart[0].column4[13] /= 2;
            scope.chart[0].column4[16] *= 2;
        } else if(type2 == 'Ice'){
            scope.chart[0].column4[1] *= 2;
            scope.chart[0].column4[5] *= 2;
            scope.chart[0].column4[8] *= 2;
            scope.chart[0].column4[9] *= 2;
            scope.chart[0].column4[14] /= 2;
        } else if(type2 == 'Dragon'){
            scope.chart[0].column4[9] /= 2;
            scope.chart[0].column4[10] /= 2;
            scope.chart[0].column4[11] /= 2;
            scope.chart[0].column4[12] /= 2;
            scope.chart[0].column4[14] *= 2;
            scope.chart[0].column4[15] *= 2;
            scope.chart[0].column4[17] *= 2;
        } else if(type2 == 'Dark'){
            scope.chart[0].column4[1] *= 2;
            scope.chart[0].column4[6] *= 2;
            scope.chart[0].column4[7] /= 2;
            scope.chart[0].column4[13] = 0;
            scope.chart[0].column4[16] /= 2;
            scope.chart[0].column4[17] *= 2;
        } else if(type2 == 'Fairy'){
            scope.chart[0].column4[1] /= 2;
            scope.chart[0].column4[3] *= 2;
            scope.chart[0].column4[6] /= 2;
            scope.chart[0].column4[8] *= 2;
            scope.chart[0].column4[15] = 0;
            scope.chart[0].column4[16] /= 2;
        }
    }
}

function update5(){
    var scope = angular.element($('#pokemon1type1')).scope();
    var id5 = $( '#id5' ).html();
    if(!id5){
        return;
    }

    var i = id5 - 1;
    var type1 = scope.pokemon[i].types[0];
    if(scope.pokemon[i].types[1]){
        var type2 = scope.pokemon[i].types[1];
    } else{
        type2 = null;
    }

    // Reset Column
    for(var n = 0; n <= 17; n++){
        scope.chart[0].column5[n] = 1;
    }
    //Check Type, Modify Column
    if(type1 == 'Normal'){
        scope.chart[0].column5[1] *= 2;     
        scope.chart[0].column5[7] = 0; 
    } else if(type1 == 'Fighting'){
        scope.chart[0].column5[2] *= 2;
        scope.chart[0].column5[5] /= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[13] *= 2;
        scope.chart[0].column5[16] /= 2;
        scope.chart[0].column5[17] *= 2;
    } else if(type1 == 'Flying'){
        scope.chart[0].column5[1] /= 2;
        scope.chart[0].column5[4] = 0;
        scope.chart[0].column5[5] *= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[11] /= 2;
        scope.chart[0].column5[12] *= 2;
        scope.chart[0].column5[14] *= 2;
    } else if(type1 == 'Poison'){
        scope.chart[0].column5[1] /= 2;
        scope.chart[0].column5[3] /= 2;
        scope.chart[0].column5[4] *= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[11] /= 2;
        scope.chart[0].column5[13] *= 2;
        scope.chart[0].column5[17] /= 2;
    } else if(type1 == 'Ground'){
        scope.chart[0].column5[3] /= 2;
        scope.chart[0].column5[5] /= 2;
        scope.chart[0].column5[10] *= 2;
        scope.chart[0].column5[11] *= 2;
        scope.chart[0].column5[12] = 0;
        scope.chart[0].column5[14] *= 2;
    } else if(type1 == 'Rock'){
        scope.chart[0].column5[0] /= 2;
        scope.chart[0].column5[1] *= 2;
        scope.chart[0].column5[2] /= 2;
        scope.chart[0].column5[3] /= 2;
        scope.chart[0].column5[4] *= 2;
        scope.chart[0].column5[8] *= 2;
        scope.chart[0].column5[9] /= 2;
        scope.chart[0].column5[10] *= 2;
        scope.chart[0].column5[11] *= 2;
    } else if(type1 == 'Bug'){
        scope.chart[0].column5[1] /= 2;
        scope.chart[0].column5[2] *= 2;
        scope.chart[0].column5[4] /= 2;
        scope.chart[0].column5[5] *= 2;
        scope.chart[0].column5[9] *= 2;
        scope.chart[0].column5[11] /= 2;
    } else if(type1 == 'Ghost'){
        scope.chart[0].column5[0] = 0;
        scope.chart[0].column5[1] = 0;
        scope.chart[0].column5[3] /= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[7] *= 2;
        scope.chart[0].column5[16] *= 2;
    } else if(type1 == 'Steel'){
        scope.chart[0].column5[0] /= 2;
        scope.chart[0].column5[1] *= 2;
        scope.chart[0].column5[2] /= 2;
        scope.chart[0].column5[3] = 0;
        scope.chart[0].column5[4] *= 2;
        scope.chart[0].column5[5] /= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[8] /= 2;
        scope.chart[0].column5[9] *= 2;
        scope.chart[0].column5[11] /= 2;
        scope.chart[0].column5[13] /= 2;
        scope.chart[0].column5[14] /= 2;
        scope.chart[0].column5[15] /= 2;
        scope.chart[0].column5[17] /= 2;
    } else if(type1 == 'Fire'){
        scope.chart[0].column5[4] *= 2;
        scope.chart[0].column5[5] *= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[8] /= 2;
        scope.chart[0].column5[9] /= 2;
        scope.chart[0].column5[10] *= 2;
        scope.chart[0].column5[11] /= 2;
        scope.chart[0].column5[14] /= 2;
        scope.chart[0].column5[17] /= 2;
    } else if(type1 == 'Water'){
        scope.chart[0].column5[8] /= 2;
        scope.chart[0].column5[9] /= 2;
        scope.chart[0].column5[10] /= 2;
        scope.chart[0].column5[11] *= 2;
        scope.chart[0].column5[12] *= 2;
        scope.chart[0].column5[14] /= 2;
    } else if(type1 == 'Grass'){
        scope.chart[0].column5[2] *= 2;
        scope.chart[0].column5[3] *= 2;
        scope.chart[0].column5[4] /= 2;
        scope.chart[0].column5[6] *= 2;
        scope.chart[0].column5[9] *= 2;
        scope.chart[0].column5[10] /= 2;
        scope.chart[0].column5[11] /= 2;
        scope.chart[0].column5[12] /= 2;
        scope.chart[0].column5[14] *= 2;
    } else if(type1 == 'Electric'){
        scope.chart[0].column5[2] /= 2;
        scope.chart[0].column5[4] *= 2;
        scope.chart[0].column5[8] /= 2;
        scope.chart[0].column5[12] /= 2;
    } else if(type1 == 'Psychic'){
        scope.chart[0].column5[1] /= 2;
        scope.chart[0].column5[6] *= 2;
        scope.chart[0].column5[7] *= 2;
        scope.chart[0].column5[13] /= 2;
        scope.chart[0].column5[16] *= 2;
    } else if(type1 == 'Ice'){
        scope.chart[0].column5[1] *= 2;
        scope.chart[0].column5[5] *= 2;
        scope.chart[0].column5[8] *= 2;
        scope.chart[0].column5[9] *= 2;
        scope.chart[0].column5[14] /= 2;
    } else if(type1 == 'Dragon'){
        scope.chart[0].column5[9] /= 2;
        scope.chart[0].column5[10] /= 2;
        scope.chart[0].column5[11] /= 2;
        scope.chart[0].column5[12] /= 2;
        scope.chart[0].column5[14] *= 2;
        scope.chart[0].column5[15] *= 2;
        scope.chart[0].column5[17] *= 2;
    } else if(type1 == 'Dark'){
        scope.chart[0].column5[1] *= 2;
        scope.chart[0].column5[6] *= 2;
        scope.chart[0].column5[7] /= 2;
        scope.chart[0].column5[13] = 0;
        scope.chart[0].column5[16] /= 2;
        scope.chart[0].column5[17] *= 2;
    } else if(type1 == 'Fairy'){
        scope.chart[0].column5[1] /= 2;
        scope.chart[0].column5[3] *= 2;
        scope.chart[0].column5[6] /= 2;
        scope.chart[0].column5[8] *= 2;
        scope.chart[0].column5[15] = 0;
        scope.chart[0].column5[16] /= 2;
    }

    if(type2 != null){
        if(type2 == 'Normal'){
            scope.chart[0].column5[1] *= 2;     
            scope.chart[0].column5[7] = 0; 
        } else if(type2 == 'Fighting'){
            scope.chart[0].column5[2] *= 2;
            scope.chart[0].column5[5] /= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[13] *= 2;
            scope.chart[0].column5[16] /= 2;
            scope.chart[0].column5[17] *= 2;
        } else if(type2 == 'Flying'){
            scope.chart[0].column5[1] /= 2;
            scope.chart[0].column5[4] = 0;
            scope.chart[0].column5[5] *= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[11] /= 2;
            scope.chart[0].column5[12] *= 2;
            scope.chart[0].column5[14] *= 2;
        } else if(type2 == 'Poison'){
            scope.chart[0].column5[1] /= 2;
            scope.chart[0].column5[3] /= 2;
            scope.chart[0].column5[4] *= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[11] /= 2;
            scope.chart[0].column5[13] *= 2;
            scope.chart[0].column5[17] /= 2;
        } else if(type2 == 'Ground'){
            scope.chart[0].column5[3] /= 2;
            scope.chart[0].column5[5] /= 2;
            scope.chart[0].column5[10] *= 2;
            scope.chart[0].column5[11] *= 2;
            scope.chart[0].column5[12] = 0;
            scope.chart[0].column5[14] *= 2;
        } else if(type2 == 'Rock'){
            scope.chart[0].column5[0] /= 2;
            scope.chart[0].column5[1] *= 2;
            scope.chart[0].column5[2] /= 2;
            scope.chart[0].column5[3] /= 2;
            scope.chart[0].column5[4] *= 2;
            scope.chart[0].column5[8] *= 2;
            scope.chart[0].column5[9] /= 2;
            scope.chart[0].column5[10] *= 2;
            scope.chart[0].column5[11] *= 2;
        } else if(type2 == 'Bug'){
            scope.chart[0].column5[1] /= 2;
            scope.chart[0].column5[2] *= 2;
            scope.chart[0].column5[4] /= 2;
            scope.chart[0].column5[5] *= 2;
            scope.chart[0].column5[9] *= 2;
            scope.chart[0].column5[11] /= 2;
        } else if(type2 == 'Ghost'){
            scope.chart[0].column5[0] = 0;
            scope.chart[0].column5[1] = 0;
            scope.chart[0].column5[3] /= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[7] *= 2;
            scope.chart[0].column5[16] *= 2;
        } else if(type2 == 'Steel'){
            scope.chart[0].column5[0] /= 2;
            scope.chart[0].column5[1] *= 2;
            scope.chart[0].column5[2] /= 2;
            scope.chart[0].column5[3] = 0;
            scope.chart[0].column5[4] *= 2;
            scope.chart[0].column5[5] /= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[8] /= 2;
            scope.chart[0].column5[9] *= 2;
            scope.chart[0].column5[11] /= 2;
            scope.chart[0].column5[13] /= 2;
            scope.chart[0].column5[14] /= 2;
            scope.chart[0].column5[15] /= 2;
            scope.chart[0].column5[17] /= 2;
        } else if(type2 == 'Fire'){
            scope.chart[0].column5[4] *= 2;
            scope.chart[0].column5[5] *= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[8] /= 2;
            scope.chart[0].column5[9] /= 2;
            scope.chart[0].column5[10] *= 2;
            scope.chart[0].column5[11] /= 2;
            scope.chart[0].column5[14] /= 2;
            scope.chart[0].column5[17] /= 2;
        } else if(type2 == 'Water'){
            scope.chart[0].column5[8] /= 2;
            scope.chart[0].column5[9] /= 2;
            scope.chart[0].column5[10] /= 2;
            scope.chart[0].column5[11] *= 2;
            scope.chart[0].column5[12] *= 2;
            scope.chart[0].column5[14] /= 2;
        } else if(type2 == 'Grass'){
            scope.chart[0].column5[2] *= 2;
            scope.chart[0].column5[3] *= 2;
            scope.chart[0].column5[4] /= 2;
            scope.chart[0].column5[6] *= 2;
            scope.chart[0].column5[9] *= 2;
            scope.chart[0].column5[10] /= 2;
            scope.chart[0].column5[11] /= 2;
            scope.chart[0].column5[12] /= 2;
            scope.chart[0].column5[14] *= 2;
        } else if(type2 == 'Electric'){
            scope.chart[0].column5[2] /= 2;
            scope.chart[0].column5[4] *= 2;
            scope.chart[0].column5[8] /= 2;
            scope.chart[0].column5[12] /= 2;
        } else if(type2 == 'Psychic'){
            scope.chart[0].column5[1] /= 2;
            scope.chart[0].column5[6] *= 2;
            scope.chart[0].column5[7] *= 2;
            scope.chart[0].column5[13] /= 2;
            scope.chart[0].column5[16] *= 2;
        } else if(type2 == 'Ice'){
            scope.chart[0].column5[1] *= 2;
            scope.chart[0].column5[5] *= 2;
            scope.chart[0].column5[8] *= 2;
            scope.chart[0].column5[9] *= 2;
            scope.chart[0].column5[14] /= 2;
        } else if(type2 == 'Dragon'){
            scope.chart[0].column5[9] /= 2;
            scope.chart[0].column5[10] /= 2;
            scope.chart[0].column5[11] /= 2;
            scope.chart[0].column5[12] /= 2;
            scope.chart[0].column5[14] *= 2;
            scope.chart[0].column5[15] *= 2;
            scope.chart[0].column5[17] *= 2;
        } else if(type2 == 'Dark'){
            scope.chart[0].column5[1] *= 2;
            scope.chart[0].column5[6] *= 2;
            scope.chart[0].column5[7] /= 2;
            scope.chart[0].column5[13] = 0;
            scope.chart[0].column5[16] /= 2;
            scope.chart[0].column5[17] *= 2;
        } else if(type2 == 'Fairy'){
            scope.chart[0].column5[1] /= 2;
            scope.chart[0].column5[3] *= 2;
            scope.chart[0].column5[6] /= 2;
            scope.chart[0].column5[8] *= 2;
            scope.chart[0].column5[15] = 0;
            scope.chart[0].column5[16] /= 2;
        }
    }
}

function update6(){
    var scope = angular.element($('#pokemon1type1')).scope();
    var id6 = $( '#id6' ).html();
    if(!id6){
        return;
    }

    var i = id6 - 1;
    var type1 = scope.pokemon[i].types[0];
    if(scope.pokemon[i].types[1]){
        var type2 = scope.pokemon[i].types[1];
    } else{
        type2 = null;
    }

    // Reset Column
    for(var n = 0; n <= 17; n++){
        scope.chart[0].column6[n] = 1;
    }
    //Check Type, Modify Column
    if(type1 == 'Normal'){
        scope.chart[0].column6[1] *= 2;     
        scope.chart[0].column6[7] = 0; 
    } else if(type1 == 'Fighting'){
        scope.chart[0].column6[2] *= 2;
        scope.chart[0].column6[5] /= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[13] *= 2;
        scope.chart[0].column6[16] /= 2;
        scope.chart[0].column6[17] *= 2;
    } else if(type1 == 'Flying'){
        scope.chart[0].column6[1] /= 2;
        scope.chart[0].column6[4] = 0;
        scope.chart[0].column6[5] *= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[11] /= 2;
        scope.chart[0].column6[12] *= 2;
        scope.chart[0].column6[14] *= 2;
    } else if(type1 == 'Poison'){
        scope.chart[0].column6[1] /= 2;
        scope.chart[0].column6[3] /= 2;
        scope.chart[0].column6[4] *= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[11] /= 2;
        scope.chart[0].column6[13] *= 2;
        scope.chart[0].column6[17] /= 2;
    } else if(type1 == 'Ground'){
        scope.chart[0].column6[3] /= 2;
        scope.chart[0].column6[5] /= 2;
        scope.chart[0].column6[10] *= 2;
        scope.chart[0].column6[11] *= 2;
        scope.chart[0].column6[12] = 0;
        scope.chart[0].column6[14] *= 2;
    } else if(type1 == 'Rock'){
        scope.chart[0].column6[0] /= 2;
        scope.chart[0].column6[1] *= 2;
        scope.chart[0].column6[2] /= 2;
        scope.chart[0].column6[3] /= 2;
        scope.chart[0].column6[4] *= 2;
        scope.chart[0].column6[8] *= 2;
        scope.chart[0].column6[9] /= 2;
        scope.chart[0].column6[10] *= 2;
        scope.chart[0].column6[11] *= 2;
    } else if(type1 == 'Bug'){
        scope.chart[0].column6[1] /= 2;
        scope.chart[0].column6[2] *= 2;
        scope.chart[0].column6[4] /= 2;
        scope.chart[0].column6[5] *= 2;
        scope.chart[0].column6[9] *= 2;
        scope.chart[0].column6[11] /= 2;
    } else if(type1 == 'Ghost'){
        scope.chart[0].column6[0] = 0;
        scope.chart[0].column6[1] = 0;
        scope.chart[0].column6[3] /= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[7] *= 2;
        scope.chart[0].column6[16] *= 2;
    } else if(type1 == 'Steel'){
        scope.chart[0].column6[0] /= 2;
        scope.chart[0].column6[1] *= 2;
        scope.chart[0].column6[2] /= 2;
        scope.chart[0].column6[3] = 0;
        scope.chart[0].column6[4] *= 2;
        scope.chart[0].column6[5] /= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[8] /= 2;
        scope.chart[0].column6[9] *= 2;
        scope.chart[0].column6[11] /= 2;
        scope.chart[0].column6[13] /= 2;
        scope.chart[0].column6[14] /= 2;
        scope.chart[0].column6[15] /= 2;
        scope.chart[0].column6[17] /= 2;
    } else if(type1 == 'Fire'){
        scope.chart[0].column6[4] *= 2;
        scope.chart[0].column6[5] *= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[8] /= 2;
        scope.chart[0].column6[9] /= 2;
        scope.chart[0].column6[10] *= 2;
        scope.chart[0].column6[11] /= 2;
        scope.chart[0].column6[14] /= 2;
        scope.chart[0].column6[17] /= 2;
    } else if(type1 == 'Water'){
        scope.chart[0].column6[8] /= 2;
        scope.chart[0].column6[9] /= 2;
        scope.chart[0].column6[10] /= 2;
        scope.chart[0].column6[11] *= 2;
        scope.chart[0].column6[12] *= 2;
        scope.chart[0].column6[14] /= 2;
    } else if(type1 == 'Grass'){
        scope.chart[0].column6[2] *= 2;
        scope.chart[0].column6[3] *= 2;
        scope.chart[0].column6[4] /= 2;
        scope.chart[0].column6[6] *= 2;
        scope.chart[0].column6[9] *= 2;
        scope.chart[0].column6[10] /= 2;
        scope.chart[0].column6[11] /= 2;
        scope.chart[0].column6[12] /= 2;
        scope.chart[0].column6[14] *= 2;
    } else if(type1 == 'Electric'){
        scope.chart[0].column6[2] /= 2;
        scope.chart[0].column6[4] *= 2;
        scope.chart[0].column6[8] /= 2;
        scope.chart[0].column6[12] /= 2;
    } else if(type1 == 'Psychic'){
        scope.chart[0].column6[1] /= 2;
        scope.chart[0].column6[6] *= 2;
        scope.chart[0].column6[7] *= 2;
        scope.chart[0].column6[13] /= 2;
        scope.chart[0].column6[16] *= 2;
    } else if(type1 == 'Ice'){
        scope.chart[0].column6[1] *= 2;
        scope.chart[0].column6[5] *= 2;
        scope.chart[0].column6[8] *= 2;
        scope.chart[0].column6[9] *= 2;
        scope.chart[0].column6[14] /= 2;
    } else if(type1 == 'Dragon'){
        scope.chart[0].column6[9] /= 2;
        scope.chart[0].column6[10] /= 2;
        scope.chart[0].column6[11] /= 2;
        scope.chart[0].column6[12] /= 2;
        scope.chart[0].column6[14] *= 2;
        scope.chart[0].column6[15] *= 2;
        scope.chart[0].column6[17] *= 2;
    } else if(type1 == 'Dark'){
        scope.chart[0].column6[1] *= 2;
        scope.chart[0].column6[6] *= 2;
        scope.chart[0].column6[7] /= 2;
        scope.chart[0].column6[13] = 0;
        scope.chart[0].column6[16] /= 2;
        scope.chart[0].column6[17] *= 2;
    } else if(type1 == 'Fairy'){
        scope.chart[0].column6[1] /= 2;
        scope.chart[0].column6[3] *= 2;
        scope.chart[0].column6[6] /= 2;
        scope.chart[0].column6[8] *= 2;
        scope.chart[0].column6[15] = 0;
        scope.chart[0].column6[16] /= 2;
    }

    if(type2 != null){
        if(type2 == 'Normal'){
            scope.chart[0].column6[1] *= 2;     
            scope.chart[0].column6[7] = 0; 
        } else if(type2 == 'Fighting'){
            scope.chart[0].column6[2] *= 2;
            scope.chart[0].column6[5] /= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[13] *= 2;
            scope.chart[0].column6[16] /= 2;
            scope.chart[0].column6[17] *= 2;
        } else if(type2 == 'Flying'){
            scope.chart[0].column6[1] /= 2;
            scope.chart[0].column6[4] = 0;
            scope.chart[0].column6[5] *= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[11] /= 2;
            scope.chart[0].column6[12] *= 2;
            scope.chart[0].column6[14] *= 2;
        } else if(type2 == 'Poison'){
            scope.chart[0].column6[1] /= 2;
            scope.chart[0].column6[3] /= 2;
            scope.chart[0].column6[4] *= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[11] /= 2;
            scope.chart[0].column6[13] *= 2;
            scope.chart[0].column6[17] /= 2;
        } else if(type2 == 'Ground'){
            scope.chart[0].column6[3] /= 2;
            scope.chart[0].column6[5] /= 2;
            scope.chart[0].column6[10] *= 2;
            scope.chart[0].column6[11] *= 2;
            scope.chart[0].column6[12] = 0;
            scope.chart[0].column6[14] *= 2;
        } else if(type2 == 'Rock'){
            scope.chart[0].column6[0] /= 2;
            scope.chart[0].column6[1] *= 2;
            scope.chart[0].column6[2] /= 2;
            scope.chart[0].column6[3] /= 2;
            scope.chart[0].column6[4] *= 2;
            scope.chart[0].column6[8] *= 2;
            scope.chart[0].column6[9] /= 2;
            scope.chart[0].column6[10] *= 2;
            scope.chart[0].column6[11] *= 2;
        } else if(type2 == 'Bug'){
            scope.chart[0].column6[1] /= 2;
            scope.chart[0].column6[2] *= 2;
            scope.chart[0].column6[4] /= 2;
            scope.chart[0].column6[5] *= 2;
            scope.chart[0].column6[9] *= 2;
            scope.chart[0].column6[11] /= 2;
        } else if(type2 == 'Ghost'){
            scope.chart[0].column6[0] = 0;
            scope.chart[0].column6[1] = 0;
            scope.chart[0].column6[3] /= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[7] *= 2;
            scope.chart[0].column6[16] *= 2;
        } else if(type2 == 'Steel'){
            scope.chart[0].column6[0] /= 2;
            scope.chart[0].column6[1] *= 2;
            scope.chart[0].column6[2] /= 2;
            scope.chart[0].column6[3] = 0;
            scope.chart[0].column6[4] *= 2;
            scope.chart[0].column6[5] /= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[8] /= 2;
            scope.chart[0].column6[9] *= 2;
            scope.chart[0].column6[11] /= 2;
            scope.chart[0].column6[13] /= 2;
            scope.chart[0].column6[14] /= 2;
            scope.chart[0].column6[15] /= 2;
            scope.chart[0].column6[17] /= 2;
        } else if(type2 == 'Fire'){
            scope.chart[0].column6[4] *= 2;
            scope.chart[0].column6[5] *= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[8] /= 2;
            scope.chart[0].column6[9] /= 2;
            scope.chart[0].column6[10] *= 2;
            scope.chart[0].column6[11] /= 2;
            scope.chart[0].column6[14] /= 2;
            scope.chart[0].column6[17] /= 2;
        } else if(type2 == 'Water'){
            scope.chart[0].column6[8] /= 2;
            scope.chart[0].column6[9] /= 2;
            scope.chart[0].column6[10] /= 2;
            scope.chart[0].column6[11] *= 2;
            scope.chart[0].column6[12] *= 2;
            scope.chart[0].column6[14] /= 2;
        } else if(type2 == 'Grass'){
            scope.chart[0].column6[2] *= 2;
            scope.chart[0].column6[3] *= 2;
            scope.chart[0].column6[4] /= 2;
            scope.chart[0].column6[6] *= 2;
            scope.chart[0].column6[9] *= 2;
            scope.chart[0].column6[10] /= 2;
            scope.chart[0].column6[11] /= 2;
            scope.chart[0].column6[12] /= 2;
            scope.chart[0].column6[14] *= 2;
        } else if(type2 == 'Electric'){
            scope.chart[0].column6[2] /= 2;
            scope.chart[0].column6[4] *= 2;
            scope.chart[0].column6[8] /= 2;
            scope.chart[0].column6[12] /= 2;
        } else if(type2 == 'Psychic'){
            scope.chart[0].column6[1] /= 2;
            scope.chart[0].column6[6] *= 2;
            scope.chart[0].column6[7] *= 2;
            scope.chart[0].column6[13] /= 2;
            scope.chart[0].column6[16] *= 2;
        } else if(type2 == 'Ice'){
            scope.chart[0].column6[1] *= 2;
            scope.chart[0].column6[5] *= 2;
            scope.chart[0].column6[8] *= 2;
            scope.chart[0].column6[9] *= 2;
            scope.chart[0].column6[14] /= 2;
        } else if(type2 == 'Dragon'){
            scope.chart[0].column6[9] /= 2;
            scope.chart[0].column6[10] /= 2;
            scope.chart[0].column6[11] /= 2;
            scope.chart[0].column6[12] /= 2;
            scope.chart[0].column6[14] *= 2;
            scope.chart[0].column6[15] *= 2;
            scope.chart[0].column6[17] *= 2;
        } else if(type2 == 'Dark'){
            scope.chart[0].column6[1] *= 2;
            scope.chart[0].column6[6] *= 2;
            scope.chart[0].column6[7] /= 2;
            scope.chart[0].column6[13] = 0;
            scope.chart[0].column6[16] /= 2;
            scope.chart[0].column6[17] *= 2;
        } else if(type2 == 'Fairy'){
            scope.chart[0].column6[1] /= 2;
            scope.chart[0].column6[3] *= 2;
            scope.chart[0].column6[6] /= 2;
            scope.chart[0].column6[8] *= 2;
            scope.chart[0].column6[15] = 0;
            scope.chart[0].column6[16] /= 2;
        }
    }
}

function updateTotals(){
    var scope = angular.element($('#pokemon1type1')).scope();

    // Reset Columns
    for(var n = 0; n <= 17; n++){
        scope.chart[0].column7[n] = 0;
        scope.chart[0].column8[n] = 0;
    }
    totalsLoop();



}

function totalsLoop(){
    var scope = angular.element($('#pokemon1type1')).scope();
    
    //Update Weak/Resist Columns
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column1[f];
        if(value > 1){
            scope.chart[0].column7[f]++;
        } else if(value < 1){
            scope.chart[0].column8[f]++;
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column2[f];
        if(value > 1){
            scope.chart[0].column7[f]++;
        } else if(value < 1){
            scope.chart[0].column8[f]++;
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column3[f];
        if(value > 1){
            scope.chart[0].column7[f]++;
        } else if(value < 1){
            scope.chart[0].column8[f]++;
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column4[f];
        if(value > 1){
            scope.chart[0].column7[f]++;
        } else if(value < 1){
            scope.chart[0].column8[f]++;
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column5[f];
        if(value > 1){
            scope.chart[0].column7[f]++;
        } else if(value < 1){
            scope.chart[0].column8[f]++;
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column6[f];
        if(value > 1){
            scope.chart[0].column7[f]++;
        } else if(value < 1){
            scope.chart[0].column8[f]++;
        }
    }

    // Update Total Column
    for(var f = 0; f <= 17; f++){
        var weak = scope.chart[0].column7[f];
        var resist = scope.chart[0].column8[f];
        scope.chart[0].column9[f] = (resist - weak);
    }
}

function cleanUp(){
    var scope = angular.element($('#pokemon1type1')).scope();
    
    //Change decimals to fractions
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column1[f];
        if(value == 1){
            scope.chart[0].column1[f] = '-';
        } else if(value == 0.5){
            scope.chart[0].column1[f] = '1/2';
        } else if(value == 0.25){
            scope.chart[0].column1[f] = '1/4';
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column2[f];
        if(value == 1){
            scope.chart[0].column2[f] = '-';
        } else if(value == 0.5){
            scope.chart[0].column2[f] = '1/2';
        } else if(value == 0.25){
            scope.chart[0].column2[f] = '1/4';
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column3[f];
        if(value == 1){
            scope.chart[0].column3[f] = '-';
        } else if(value == 0.5){
            scope.chart[0].column3[f] = '1/2';
        } else if(value == 0.25){
            scope.chart[0].column3[f] = '1/4';
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column4[f];
        if(value == 1){
            scope.chart[0].column4[f] = '-';
        } else if(value == 0.5){
            scope.chart[0].column4[f] = '1/2';
        } else if(value == 0.25){
            scope.chart[0].column4[f] = '1/4';
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column5[f];
        if(value == 1){
            scope.chart[0].column5[f] = '-';
        } else if(value == 0.5){
            scope.chart[0].column5[f] = '1/2';
        } else if(value == 0.25){
            scope.chart[0].column5[f] = '1/4';
        }
    }
    for(var f = 0; f <= 17; f++){
        var value = scope.chart[0].column6[f];
        if(value == 1){
            scope.chart[0].column6[f] = '-';
        } else if(value == 0.5){
            scope.chart[0].column6[f] = '1/2';
        } else if(value == 0.25){
            scope.chart[0].column6[f] = '1/4';
        }
    }
}

function getInfo(){
    var box = $('#normalTotal');
    var type1 = $('#pokemon1type1');
    var type2 = $('#pokemon1type2');
    addColors(box,type1,type2);
    type1 = $('#pokemon2type1');
    type2 = $('#pokemon2type2');
    addColors(box,type1,type2);
    type1 = $('#pokemon3type1');
    type2 = $('#pokemon3type2');
    addColors(box,type1,type2);
    type1 = $('#pokemon4type1');
    type2 = $('#pokemon4type2');
    addColors(box,type1,type2);
    type1 = $('#pokemon5type1');
    type2 = $('#pokemon5type2');
    addColors(box,type1,type2);
    type1 = $('#pokemon6type1');
    type2 = $('#pokemon6type2');
    addColors(box,type1,type2);    
}

function addColors(box,type1,type2){
    
    var boxTotal = box.html();
    if(boxTotal > 0){
        box.css('background-color', '#00FF00');
    } else if(boxTotal < 0){
        box.css('background-color', '#FF0000');
    } else {
        box.css('background-color', '#FFFFFF');
    }

    m = type1.html();
    if(m == 'Normal'){type1.css('background-color', '#A8A878');}
    else if(m == 'Fighting'){type1.css('background-color', '#C12D25');}
    else if(m == 'Flying'){type1.css('background-color', '#A890F0');}
    else if(m == 'Poison'){type1.css('background-color', '#A040A0');}
    else if(m == 'Ground'){type1.css('background-color', '#E0C068');}
    else if(m == 'Rock'){type1.css('background-color', '#B8A038');}
    else if(m == 'Bug'){type1.css('background-color', '#A8B820');}
    else if(m == 'Ghost'){type1.css('background-color', '#705898');}
    else if(m == 'Steel'){type1.css('background-color', '#B8B8D0');}
    else if(m == 'Fire'){type1.css('background-color', '#F08030');}
    else if(m == 'Water'){type1.css('background-color', '#6890F0');}
    else if(m == 'Grass'){type1.css('background-color', '#78C850');}
    else if(m == 'Electric'){type1.css('background-color', '#F8D030');}
    else if(m == 'Psychic'){type1.css('background-color', '#F85888');}
    else if(m == 'Ice'){type1.css('background-color', '#98D8D8');}
    else if(m == 'Dragon'){type1.css('background-color', '#7038F8');}
    else if(m == 'Dark'){type1.css('background-color', '#705848');}
    else if(m == 'Fairy'){type1.css('background-color', '#FF65D5');}

    r = type2.html();
    if(r == 'Normal'){type2.css('background-color', '#A8A878');}
    else if(r == 'Fighting'){type2.css('background-color', '#C12D25');}
    else if(r == 'Flying'){type2.css('background-color', '#A890F0');}
    else if(r == 'Poison'){type2.css('background-color', '#A040A0');}
    else if(r == 'Ground'){type2.css('background-color', '#E0C068');}
    else if(r == 'Rock'){type2.css('background-color', '#B8A038');}
    else if(r == 'Bug'){type2.css('background-color', '#A8B820');}
    else if(r == 'Ghost'){type2.css('background-color', '#705898');}
    else if(r == 'Steel'){type2.css('background-color', '#B8B8D0');}
    else if(r == 'Fire'){type2.css('background-color', '#F08030');}
    else if(r == 'Water'){type2.css('background-color', '#6890F0');}
    else if(r == 'Grass'){type2.css('background-color', '#78C850');}
    else if(r == 'Electric'){type2.css('background-color', '#F8D030');}
    else if(r == 'Psychic'){type2.css('background-color', '#F85888');}
    else if(r == 'Ice'){type2.css('background-color', '#98D8D8');}
    else if(r == 'Dragon'){type2.css('background-color', '#7038F8');}
    else if(r == 'Dark'){type2.css('background-color', '#705848');}
    else if(r == 'Fairy'){type2.css('background-color', '#FF65D5');}


}