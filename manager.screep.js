var managerScreep = {

    run: function() {

        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
//                console.log('Clearing non-existing creep memory:', name);
            }
        }

        //replentish harvesters
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
//        console.log('Harvesters: ' + harvesters.length);

        if (harvesters.length < 1) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], undefined, {
                role: 'harvester'
            });
            console.log('Spawning new harvester: ' + newName);
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

        if (upgraders.length < 1) {

            var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], undefined, {
                role: 'upgrader'
            });
            console.log('Spawning new upgrader: ' + newName);
        }

        //replentish builder
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
//        console.log('Builders: ' + builders.length);

        if (builders.length < 2) {

            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
                role: 'builder',
                building: true
            });

            console.log('Spawning new builder: ' + newName);
        }




    }

};

module.exports = managerScreep;
