var behaviorEnergy = {

    /** @param {Creep} creep **/

    //screep should deliver energy to any structure that requires it
    deliver: function(creep) {

      var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN ||
                          structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
              }
      });
      if(targets.length > 0) {
          if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(targets[0]);
          }
      }
    },

    //screep should seek out and harvest energy
    harvest: function(creep) {

    var sources = creep.room.find(FIND_SOURCES);

      sources.forEach(function(harvestLocation){

        var harvestAction =creep.harvest(harvestLocation);

        if(harvestAction == ERR_NOT_IN_RANGE && (harvestLocation.availableSlots()>0)) {
            creep.moveTo(harvestLocation);
            return;
        }
      })
    },

    //screep should aqcuire energy from storage
    buy: function(creep) {

      var source = Game.spawns['Spawn1'];
      var energyNeed = creep.energyCapacity-creep.energy;
      if (source.energy>=energyNeed) {
        if(creep.withdraw(source, RESOURCE_ENERGY, energyNeed) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        } else {

        }

      } else {

        this.harvest(creep);

      }
    }
}

module.exports = behaviorEnergy;
