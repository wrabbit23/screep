var behaviorEnergy = {

    /** @param {Creep} creep **/

    //screep should deliver energy to any structure that requires it
    deliver: function(creep) {

      var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN ||
                          structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity;
              }
      });
      if(targets.length > 0) {
          if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            //console.log('delivering energy');
              creep.moveTo(targets[0]);
          }
      } else {
        return false;
      }
    },

    //screep should seek out and harvest energy
    harvest: function(creep) {
      var sources = creep.room.find(FIND_SOURCES);
      var harvestLocation = creep.pos.findClosestByPath(sources);
      var harvestAction =creep.harvest(harvestLocation);
        if(harvestAction == ERR_NOT_IN_RANGE) {
            creep.moveTo(harvestLocation);
        }
    },

    containerHarvest: function(creep) {
      //
    },

    //screep should aqcuire energy from storage
    buy: function(creep) {
      console.log('creep buying - '+creep.name);

      var energyNeed = creep.carryCapacity-creep.carry.energy;
      var closestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: (structure) => {

            if (structure.structureType=='container') {
              if (structure.energy>=energyNeed)
                return true;
              }
              return false;
            }
      });

      if (closestContainer) {
          if(creep.withdraw(closestContainer, RESOURCE_ENERGY, energyNeed) == ERR_NOT_IN_RANGE) {
              creep.moveTo(closestContainer);
          }
      } else {

        var source = Game.spawns['Spawn1'];
        if ((source.energy>280) && (source.energy>=energyNeed)) {
          if(creep.withdraw(source, RESOURCE_ENERGY, energyNeed) == ERR_NOT_IN_RANGE) {
              creep.moveTo(source);
          }
        } else {
          this.harvest(creep);
        }
    }
  }
}

module.exports = behaviorEnergy;
