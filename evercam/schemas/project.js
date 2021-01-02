export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
	  {
		name: 'title',
		title: 'Title',
		type: 'string',
	  },
	  {
		name: 'slug',
		title: 'Slug',
		type: 'slug',
		options: {
		  source: 'title',
		  maxLength: 96,
		},
	  },
	  {
		name: 'image',
		title: 'Main Image',
		type: 'image',
	  },
	  {
		name: 'category',
		title: 'Category',
		type: 'reference',
		to: {type: 'category'},
		// of: [
		//   {
		// 	type: 'reference',
		// 	to: {type: 'category'},
		//   },
		// ],
	  },
	//   {
	// 	title: 'Tags',
	// 	name: 'tags',
	// 	type: 'array',
	// 	of: [
	// 	  {
	// 		type: 'string',
	// 	  },
	// 	],
	// 	options: {
	// 	  layout: 'tags',
	// 	},
	//   },
	  {
		name: 'description',
		title: 'Description',
		type: 'localeBlockContent',
	  },
	],
  
	preview: {
	  select: {
		title: 'title',
		manufactor: 'manufactor.title',
		media: 'image',
	  },
	},
  }
  