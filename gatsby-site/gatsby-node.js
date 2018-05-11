const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
	const {createPage} = boundActionCreators
	return new Promise((resolve, reject) => {
		const chapitreTemplage = path.resolve('src/templates/chapitre.js')
		const romanTemplage = path.resolve('src/templates/roman.js')
		
		resolve(
			graphql(
			`{
				allContentfulChapitre {
					edges {
						node {
							id
							slug
						}
					}
				}
			}`
			).then((result) => {
				console.log(result); 
				if (result.errors) {
					reject(result.errors)
				}
				result.data.allContentfulChapitre.edges.forEach((edge) => {
					if (edge.node.id = 'Chapitre') {
						createPage ({
							path: 'Roman/Chapitre/'+edge.node.slug,
							component: chapitreTemplage,
							context: {
								slug: edge.node.slug
							}
						})
					}
				})
				return
			}),
			graphql(
			`{
				allContentfulRoman {
					edges {
						node {
							id
							slug
						}
					}
				}
			}`
			).then((result) => {
				console.log(result); 
				if (result.errors) {
					reject(result.errors)
				}
				result.data.allContentfulRoman.edges.forEach((edge) => {
					if (edge.node.id = 'Roman') {
						createPage ({
							path: 'Roman/'+edge.node.slug,
							component: romanTemplage,
							context: {
								slug: edge.node.slug,
								romanSlug: "../"+edge.node.slug
							}
						})
					}
				})
				return
			})
		)
	})
}

