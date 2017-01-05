module.exports =
{
  "builder": {
		"mode": 1,
		"parts": [
			{
				"part" : WORK,
				"weight" : 0.4,
				"minimum" : 1
			},
			{
				"part" : CARRY,
				"weight" : 0.3,
				"minimum" : 1
			},
			{
				"part" : MOVE,
				"weight" : 0.3,
				"minimum" : 1
			}
		],
		"memory": {
			"role": "builder",
      "building": true
		}
	},

  "upgrader": {
		"mode": 1,
		"parts": [
			{
				"part" : WORK,
				"weight" : 0.2,
				"minimum" : 1
			},
			{
				"part" : CARRY,
				"weight" : 0.4,
				"minimum" : 1
			},
			{
				"part" : MOVE,
				"weight" : 0.4,
				"minimum" : 1
			}
		],
		"memory": {
			"role": "upgrader"
		}
	},

	"harvester": {
		"mode": 1,
		"parts": [
      {
        "part" : WORK,
        "weight" : 0.4,
        "minimum" : 1
      },
      {
        "part" : CARRY,
        "weight" : 0.3,
        "minimum" : 1
      },
      {
        "part" : MOVE,
        "weight" : 0.3,
        "minimum" : 1
      }
		],
		"memory": {
			"role": "harvester"
		}
	},
	"hauler": {
		"mode": 1,
		"parts": [
			{
				"part" : CARRY,
				"weight" : 0.5,
				"minimum" : 1
			},
			{
				"part" : MOVE,
				"weight" : 0.5,
				"minimum" : 1
			}
		],
		"memory": {
			"role": "hauler"
		}
	}
}
