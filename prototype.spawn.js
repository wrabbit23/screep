module.exports = function()
{
    Spawn.prototype.getPercentFull = function()
    {
        var percent = (this.energy / this.energyCapacity) * 10000 / 100
        return percent;
    };

    Spawn.prototype.getEnergy = function()
    {
        var energy = this.energy
        return energy;
    };
};
