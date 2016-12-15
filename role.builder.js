var behaviorEnergy = require('behavior.energy');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

      //build if you can, harvest if you must
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('need more resources');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('back to work');
	    }

      //find something to work on or act like a harvester
	    else {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length && creep.memory.building) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
              if(creep.carry.energy < creep.carryCapacity) {
                  behaviorEnergy.buy(creep);
              }
              else {
                  behaviorEnergy.deliver(creep);
              }
          }
	    }
	}
};

module.exports = roleBuilder;
