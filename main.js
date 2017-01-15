
//
//
require('prototype.spawn')();
require('prototype.source')();
require('prototype.room')();

//
//
global.log = require('log');

//
//
global.managerScreep = require('manager.screep');
global.managerTower = require('manager.tower');
global.units = require("units");

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

 log.start('we live');

 managerScreep.run();
 managerTower.run();

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
