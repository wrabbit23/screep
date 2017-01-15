var managerScreep = {

    run: function() {

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
//                console.log('Clearing non-existing creep memory:', name);
            }
        }

        let spawn = Game.spawns['Spawn1'];

        var spawnEnergy=spawn.room.getSpawnEnergy();

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

        if((spawnEnergy.energy==spawnEnergy.energyCapacity*.75) || (harvesters.length<1)) {

          //replentish harvesters
          //console.log('Harvesters: ' + harvesters.length);

          if (harvesters.length < 2) {

              spawn.spawnUnitByEnergy('harvester', spawnEnergy.energy)

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

              spawn.spawnUnitByEnergy('upgrader', spawnEnergy.energy)

          }

          //replentish builder
          var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  //        console.log('Builders: ' + builders.length);

          if (builders.length < 2) {

              spawn.spawnUnitByEnergy('builder', spawnEnergy.energy)

          }

        }


    }

};

module.exports = managerScreep;
