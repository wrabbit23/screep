var roleSuperHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
          console.log('harvestor harvest!');
          behaviorEnergy.harvest(creep);
      }
      else {
          if(!behaviorEnergy.deliver(creep)) {
            console.log(creep.name+' cant deliver')
          }
      }
	}
};

module.exports = roleSuperHarvester;
