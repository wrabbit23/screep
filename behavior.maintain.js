var behaviorMaintain = {

    /** @param {Creep} creep **/

    //look for construction sites
    maintain: function(creep) {
      var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.hits < structure.hitsMax && structure.structureType!='constructedWall');
          }
      });

      if (closestDamagedStructure) {

        console.log('repairing '+closestDamagedStructure)
        var result = creep.repair(closestDamagedStructure);
				if (result == ERR_NOT_IN_RANGE)
				{
					var moveResult = creep.moveTo(closestDamagedStructure);
				}
        return true;
      } else {
      console.log('nothing to maintain')
        return false;
      }

    },
}

module.exports = behaviorMaintain;
