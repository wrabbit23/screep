var behaviorEnergy = require('behavior.energy');

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

      if(creep.memory.upgrading && creep.carry.energy == 0) {
          creep.memory.upgrading = false;
          creep.say('need more resources');
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	        creep.say('upgrading');
	    }
	    if(creep.memory.upgrading) {
          if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller);
          }
      }
      else {
        behaviorEnergy.buy(creep);
      }
	}
};

module.exports = roleUpgrader;
