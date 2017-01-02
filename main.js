
//
//
require('prototype.spawn')();
require('prototype.source')();
require('prototype.room')();

//
//
global.managerScreep = require('manager.screep');

//
//
global.behaviorEnergy = require('behavior.energy');
global.behaviorUpgrade = require('behavior.upgrade');
global.behaviorBuild = require('behavior.build');
global.behaviorMaintain = require('behavior.maintain');

//
//
global.roleHarvester = require('role.harvester');
global.roleUpgrader = require('role.upgrader');
global.roleBuilder = require('role.builder');

//
//=============---------
module.exports.loop = function () {

 console.log('we live');

 //get available energy

 console.log('total energy: '+Game.spawns['Spawn1'].getEnergy());

    managerScreep.run();

    //move this tower stuff to manager.defense
    var tower = Game.getObjectById('7fcf3e0e09dea2771a81917f');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    };

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
          var roomEnergy=creep.room.getSpawnEnergy();
          console.log('Room energy: '+roomEnergy.energy+' out of '+roomEnergy.energyCapacity);

        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    };
}
