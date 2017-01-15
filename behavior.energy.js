var behaviorEnergy = {

    /** @param {Creep} creep **/

    //screep should deliver energy to any structure that requires it
    deliver: function(creep) {

      var primaryDeliveryTargets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
              }
      });

      var secondaryDeliveryTargets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_TOWER ||
                          structure.structureType == STRUCTURE_STORAGE) && structure.energy < structure.energyCapacity;
              }
      });

      if (primaryDeliveryTargets.length > 0) {
          var target = creep.pos.findClosestByPath(primaryDeliveryTargets);
      } else if (secondaryDeliveryTargets.length > 0) {
          var target = creep.pos.findClosestByPath(secondaryDeliveryTargets);
      } else {
        return false;
      }

      if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
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
