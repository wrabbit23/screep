var lib = require('lib');

module.exports = function()
{
    Source.prototype.getPercentFull = function()
    {
        var percent = (this.energy / this.energyCapacity) * 10000 / 100
        return percent;
    };

    Source.prototype.availableSlots = function ()
    {
      var totalSlots = 0;
	    var area = this.room.lookForAtArea(LOOK_TERRAIN, lib.clamp(this.pos.y - 1, 0, 49), lib.clamp(this.pos.x - 1, 0, 49), lib.clamp(this.pos.y + 1, 0, 49), lib.clamp(this.pos.x + 1, 0, 49), true);

      area.forEach(function(p)
      {
        if ( !(p.x == this.pos.x && p.y === this.pos.y) && p.terrain != 'wall')
        {
          totalSlots++;
        }
	    }, this);

      var occupiedSlots = 0;
      area = this.room.lookForAtArea(LOOK_CREEPS, lib.clamp(this.pos.y - 1, 0, 49), lib.clamp(this.pos.x - 1, 0, 49), lib.clamp(this.pos.y + 1, 0, 49), lib.clamp(this.pos.x + 1, 0, 49), true);

      area.forEach(function(p)
      {
        if ( !(p.x == this.pos.x && p.y === this.pos.y) && p.terrain != 'creep')
        {
          occupiedSlots++;
        }
	    }, this);

      var availableSlots = totalSlots - occupiedSlots;
      //console.log('availableSlots '+availableSlots);
      return availableSlots;

    };

};
