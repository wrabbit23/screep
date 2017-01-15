var managerTower = {

    run: function() {

      let spawn = Game.spawns['Spawn1'];

      var towers = spawn.room.find(
         FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});


         console.log('towers '+towers.length)

         for (var key in towers) {

           var closestHostile = towers[key].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
           if(closestHostile) {

            console.log('closestHostile.owner.username '+closestHostile.owner.username);

             if (closestHostile.owner.username=='Timendainum') {
               console.log("'don't kill james!");
             } else {
               tower.attack(closestHostile);
             }

           }
         }


   }
};

module.exports = managerTower;
