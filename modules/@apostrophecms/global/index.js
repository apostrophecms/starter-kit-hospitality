const linkSchema = require('../../../lib/linkSchema');
const buttonSchema = require('../../../lib/buttonSchema');

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
			headerBtns: {
				label: 'Header Button/s',
				type: 'array',
				limit: 1,
				fields: {
					add: {
						...buttonSchema.button
					}
				}
			},
			headerNav: {
				label: 'Header Navigation Items',
				type: 'array',
				limit: 5,
				fields: {
					add: {
						...linkSchema.link,
					}
				}
			},
			footerNav: {
				label: 'Footer Navigation Items',
				type: 'array',
				limit: 5,
				fields: {
					add: {
						...linkSchema.link,
					}
				}
			},
			social: {
				label: 'Social connect',
				type: 'array',
				limit: 5,
				fields: {
					add: {
						link: {
							type: 'url',
							label: 'Social link',
							required: true
						},
						icon: {
							label: 'Icon',
							type: 'select',
							required: true,
							choices: [
								{
									label: 'Instagram',
									value: 'instagram'
								},
								{
									label: 'Facebook',
									value: 'facebook'
								},
								{
									label: 'Twitter',
									value: 'twitter'
								}
							]
						}
					}
				}
			}
		},
		group: {
			brand: {
				label: 'Brand',
				fields: ['title', 'logo', 'social']
			},
			navigations: {
				label: 'Navigations',
				fields: ['headerNav', 'footerNav', 'headerBtns']
			}
		}
	}
}
