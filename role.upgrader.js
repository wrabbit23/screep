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
        behaviorUpgrade.upgrade(creep);
      }
      else {
        behaviorEnergy.harvest(creep);
      }
	}
};

module.exports = roleUpgrader;
