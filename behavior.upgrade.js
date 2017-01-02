var behaviorUpgrade = {

    /** @param {Creep} creep **/

    //screep should upgrade the room
    upgrade: function(creep) {

      if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
      }

    }
}
module.exports = behaviorUpgrade;
