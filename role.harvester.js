var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
      if(creep.memory.delivering) {
        if(creep.carry.energy>0) {
          if(!behaviorEnergy.deliver(creep)) {
            console.log(creep.name+' cant deliver')
          }
        } else {
          creep.memory.delivering=false;
        }
      } else if(creep.carry.energy < creep.carryCapacity) {
          behaviorEnergy.harvest(creep);
      }
      else {
          creep.memory.delivering=true;
          }
      }
};

module.exports = roleHarvester;
