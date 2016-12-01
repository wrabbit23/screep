module.exports = function()
{
    Source.prototype.getPercentFull = function()
    {
        var percent = (this.energy / this.energyCapacity) * 10000 / 100
        return percent;
    };

    Source.prototype.checkIn = function(creep) {
    }

};
