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
      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0]);
      } else {
        sources[0].checkIn();
      }
    },

    //screep should aqcuire energy from storage
    buy: function(creep) {

      var source = Game.spawns['Spawn1'];
      if (source.energy/source.energyCapacity>.5) {

        if(creep.withdraw(source, RESOURCE_ENERGY, creep.energyCapacity-creep.energy) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        } else {

        }

      } else {

      }
    }
}

module.exports = behaviorEnergy;
