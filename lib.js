module.exports =
{
	"isNull": function (value)
	{
        if (typeof value == "undefined" || value == null)
            return true;
        else
            return false;
	},

	"clamp": function (value, min, max)
	{
		return Math.min(Math.max(value, min), max);
	}
};
