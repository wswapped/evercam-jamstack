export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Main Image",
      type: "image"
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" }
      // of: [
      //   {
      // 	type: 'reference',
      // 	to: {type: 'category'},
      //   },
      // ],
    },
    {
      name: "channel_partner",
      title: "Channel partner",
      type: "reference",
      to: { type: "partner" }
    },
    {
      name: "lat",
      title: "Latitude",
      type: "number"
    },
    {
      name: "lng",
      title: "Longitude",
      type: "number"
    },
    {
      title: 'Client',
      name: 'client',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Client name'},
        {name: 'website', type: 'string', title: 'Client website'}
      ]
    },
    {
      title: 'Architect',
      name: 'architect',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Architect name'},
        {name: 'website', type: 'string', title: 'Architect website'}
      ]
    },
    {
      title: 'Landscape Architects',
      name: 'landscape_architect',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Architect name'},
        {name: 'website', type: 'string', title: 'Architect website'}
      ]
    },
    {
      title: 'Civil and Structural Engineers',
      name: 'civil_structural_engineers',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'website', type: 'string', title: 'Website'}
      ]
    },
    {
      title: 'Mechanical and Electrical Engineers',
      name: 'mechanical_electrical_engineers',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'website', type: 'string', title: 'Website'}
      ]
    },
    {
      title: 'Environmental / Archaeology',
      name: 'environmental_achaelology',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'website', type: 'string', title: 'Website'}
      ]
    },
    {
      title: 'Planning Consultant',
      name: 'planning_consultant',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'website', type: 'string', title: 'Website'}
      ]
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "localeString"
    },
    {
      name: "description",
      title: "Description",
      type: "localeBlockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "image"
    }
  }
};
