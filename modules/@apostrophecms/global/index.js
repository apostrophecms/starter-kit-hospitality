module.exports = {
	fields: {
	  add: {
		logo: {
		  label: 'Logo',
		  type: 'area',
		  options: {
			max: 1,
			widgets: {
			  '@apostrophecms/image': {}
			}
		  }
		},
		title: {
		  type: 'string',
		  label: 'Website Title',
		  required: true
		},
	  },
	  group: {
		basic: {
		  label: 'Basics',
		  fields: [ 'title', 'logo' ]
		}
	  }
	}
  }
  