var managerScreep = {

    run: function() {

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
//                console.log('Clearing non-existing creep memory:', name);
            }
        }

        let spawn = Game.spawns['Spawn1'];

        console.log('spawn.room.getSpawnEnergy().energy ' + spawn.room.getSpawnEnergy().energy);

        if(spawn.room.getSpawnEnergy().energy>300) {


          //replentish harvesters
          var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  //        console.log('Harvesters: ' + harvesters.length);

          if (harvesters.length < 2) {

              spawn.spawnUnitByEnergy('harvester', spawn.getEnergy())

          }

          //replentish superHarvestor
          var superHarvestors = _.filter(Game.creeps, (creep) => creep.memory.role == 'superHarvestor');
  //        console.log('superHarvestors: ' + superHarvestors.length);

          if (superHarvestors.length < 0) {

              var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], undefined, {
                  role: 'superHarvestor'
              });
              console.log('Spawning new superHarvestor: ' + newName);
          }

          //replentish upgrader
          var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  //        console.log('Upgraders: ' + upgraders.length);

          if (upgraders.length < 2) {

              spawn.spawnUnitByEnergy('upgrader', spawn.getEnergy())

          }

          //replentish builder
          var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  //        console.log('Builders: ' + builders.length);

          if (builders.length < 2) {

              spawn.spawnUnitByEnergy('builder', spawn.getEnergy())

          }

        }


    }

};

module.exports = managerScreep;
