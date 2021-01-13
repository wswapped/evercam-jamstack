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
		type: 'text',
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
  