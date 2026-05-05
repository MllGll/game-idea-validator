const steps = [
	{
		id: 0,
		yesPoints: 5,
		noPoints: 0,
	},
	{
		id: 1,
		yesPoints: 3,
		noPoints: 0,
	},
	{
		id: 2,
		yesPoints: 2,
		noPoints: 0,
	},
	{
		id: 3,
		yesPoints: 0,
		noPoints: 3,
	},
	{
		id: 4,
		yesPoints: 0,
		noPoints: 1,
		condition: {
			dependsOn: 3,
			expectedAnswer: "yes",
		},
	},
	{
		id: 5,
		yesPoints: 3,
		noPoints: 0,
	},
	{
		id: 6,
		yesPoints: 1,
		noPoints: 0,
	},
	{
		id: 7,
		yesPoints: 3,
		noPoints: 0,
	},
];

export { steps };
