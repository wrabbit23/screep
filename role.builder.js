var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

      //build if you can, harvest if you must
      if(creep.memory.building || creep.memory.maintaining) {

        if(creep.carry.energy > 0) {
          if(creep.memory.building) {
            creep.say('im building')
            behaviorBuild.build(creep);
          } else if(creep.memory.maintaining) {
            creep.say('im maintaining')
            behaviorMaintain.maintain(creep);
          }
        } else {
          creep.memory.building = false;
          creep.memory.maintaining = false;
        }

      } else {
        if (creep.carry.energy == creep.carryCapacity) {

          //full up, decide what to do next
          var maintenanceNeeded = behaviorMaintain.isNeed(creep);
          if(!maintenanceNeeded) {
            creep.memory.building = true;
          } else {
            creep.memory.maintaining = true;
          }

        } else {
          behaviorEnergy.harvest(creep);
        }
      }
	}
}

module.exports = roleBuilder;
