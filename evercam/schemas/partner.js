export default {
	name: 'partner',
	title: 'Channel Partner',
	type: 'document',
	fields: [
	  {
		name: 'name',
		title: 'Name',
		type: 'string',
	  },
	  {
		name: 'slug',
		title: 'Slug',
		type: 'slug',
		options: {
		  source: 'name',
		  maxLength: 96,
		},
	  },
	  {
		name: 'website',
		title: 'Website',
		type: 'url',
	  },
	  {
		name: "logo",
		title: "Partner Logo",
		type: "image"
	  },
	  {
		name: "areas",
		title: "Covered Areas",
		type: "array",
		of: [{type: 'string'}],
		options: {
		  list: [
			{title: 'UK', value: 'uk'},
			{title: 'Australia', value: 'australia'},
			{title: 'Scotland and Northern England', value: 'scotland_northern_england'},
			{title: 'Ireland', value: 'ireland'},
			{title: 'Houston & Gulf Coast Region', value: 'houston_gulf_coast'},
		  ]
		}
	  },
	  {
		title: 'Partner Map Location',
		name: 'map_location',
		type: 'object',
		fields: [
		  {name: 'lat', type: 'number', title: 'Latitude'},
		  {name: 'lng', type: 'number', title: 'Longitude'}
		]
	  },
	  {
		name: 'description',
		title: 'Description',
		type: 'localeBlockContent',
	  },
	  {
		name: 'phone',
		title: 'Phone number',
		type: 'number',
	  },
	  {
		name: 'address',
		title: 'Address',
		type: 'text',
	  }
	],
  }
  