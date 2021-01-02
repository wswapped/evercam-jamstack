export default {
	name: 'post',
	title: 'Post',
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
		title: 'Tags',
		name: 'tags',
		type: 'array',
		of: [
		  {
			type: 'string',
		  },
		],
		options: {
		  layout: 'tags',
		},
	  },
	  {
		name: 'blurb',
		title: 'Blurb',
		type: 'localeString',
	  },
	  {
		name: 'body',
		title: 'Body',
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
  