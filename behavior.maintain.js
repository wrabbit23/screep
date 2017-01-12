var behaviorMaintain = {

    /** @param {Creep} creep **/

    //look for construction sites

    isNeed: function(creep) {

      var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function (s) {
          return s.hits < s.hitsMax*.4 && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART;
        }
      });

      if (closestDamagedStructure) {
        console.log('closestDamagedStructure.hits '+closestDamagedStructure.hits)
        log.big(closestDamagedStructure.hits);
        return true;
      } else{
        return false;
      }

    },

    maintain: function(creep) {


      var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: function (s) {
    			return s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART;
    		}
      });

      var result = creep.repair(closestDamagedStructure);
			if (result == ERR_NOT_IN_RANGE)
			{
				var moveResult = creep.moveTo(closestDamagedStructure);
			}

    }
}

module.exports = behaviorMaintain;
