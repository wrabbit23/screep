module.exports = function()
{
    Room.prototype.getSpawnEnergy = function() {
        var result = {};
        result.energy = 0;
        result.energyCapacity = 0;

        // Enumerate over spawns
        for (var spawnName in Game.spawns) {
            var spawn = Game.spawns[spawnName];
            if (spawn.room.name == this.name) {
                result.energy += spawn.energy;
                result.energyCapacity += spawn.energyCapacity;
            }
        }

        var extenders = this.find(FIND_MY_STRUCTURES, {
            filter: {
                structureType: STRUCTURE_EXTENSION
            }
        });
        extenders.forEach(function(ex) {
            result.energy += ex.energy;
            result.energyCapacity += ex.energyCapacity;
        }, this);

        return result;
    };
};
