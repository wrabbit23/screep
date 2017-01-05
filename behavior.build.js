var behaviorBuild = {

    /** @param {Creep} creep **/

    //look for construction sites
    build: function(creep) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            var buildLocation = creep.pos.findClosestByPath(targets)
            if(creep.build(buildLocation) == ERR_NOT_IN_RANGE) {
                creep.moveTo(buildLocation);
            }
        } else {
          return false;
        }

    },

    maintain: function(creep) {

    }
}

module.exports = behaviorBuild;
