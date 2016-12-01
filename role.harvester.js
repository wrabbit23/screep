var behaviorEnergy = require('behavior.energy');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
          behaviorEnergy.harvest(creep);
      }
      else {
          behaviorEnergy.deliver(creep);
      }
	}
};

module.exports = roleHarvester;
