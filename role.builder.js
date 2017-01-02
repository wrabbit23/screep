var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

      console.log('running build')
      //build if you can, harvest if you must
	    if(creep.memory.building) {
        if(creep.carry.energy > 0) {

          var maintaining = behaviorMaintain.maintain(creep);
          if(!maintaining) {
            behaviorBuild.build(creep);
          }
        } else {
          creep.memory.building = false;
        }

      } else {
        if (creep.carry.energy == creep.carryCapacity) {
          creep.memory.building = true;
        } else {
          behaviorEnergy.buy(creep);
        }
      }
	}
}

module.exports = roleBuilder;
