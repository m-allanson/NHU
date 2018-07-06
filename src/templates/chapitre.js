import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Row,
	Col,
	Breadcrumb,
	BreadcrumbItem,
	Progress,
	Button
} from 'reactstrap';
import Header from '../components/header'
import Footer from '../components/footer'

class Chapitre extends Component {
	render() {
		const {
			titreChapitre,
			texte,
			chapitreAvant,
			chapitreApres,
			nomRoman,
			equivalentUrl
		} = this.props.data.contentfulChapitre

		return (
			<div id="page-wrapper">
				<Header />

				<div>
					<Breadcrumb className="mb-0">
						<BreadcrumbItem><Link to="/">Accueil</Link></BreadcrumbItem>
						<BreadcrumbItem><Link to="/histoires">Nos Histoires de l'Univers...</Link></BreadcrumbItem>
						<BreadcrumbItem><Link to={"/histoires/" + nomRoman}>Roman</Link></BreadcrumbItem>
						<BreadcrumbItem active>{titreChapitre}</BreadcrumbItem>
					</Breadcrumb>
				</div>

				{/* <div className="equiv">
					<Button className="float-right" color="primary"><Link className="text-white" to={"/en" + equivalentUrl}>En</Link></Button>
				</div> */}

				<div>
					<Container>
						<Row>
							<Col lg={{ size: 10, offset: 1 }} md="12">
								<h1 className="page-header display-4 text-center my-5">{titreChapitre}</h1>
								<div className="text-justify lecture-texte" dangerouslySetInnerHTML={{ __html: texte.childMarkdownRemark.html }} />
							</Col>
						</Row>
					</Container>
				</div>

				<div className="py-5">
					<Container>
						<Row>
							<Col lg={{ size: 10, offset: 1 }} md="12">
								<Row>
									<Col xs="4" className="text-left pl-0">
										{
											chapitreAvant ?
												(<Link className="btn btn-primary" to={chapitreAvant}>Chapitre précédent</Link>) :
												('')
										}
									</Col>
									<Col xs="4" className="text-center"><Link className="btn btn-primary" to={"/histoires/" + nomRoman}>Retourner au roman</Link></Col>
									<Col xs="4" className="text-right pr-0">
										{
											chapitreApres ?
												(<Link className="btn btn-primary" to={chapitreApres}>Chapitre suivant</Link>) :
												('')
										}
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</div>

				<Footer />
			</div>
		)
	}
}

Chapitre.propTypes = {
	data: PropTypes.object.isRequired
}

export default Chapitre

export const pageQuery = graphql`query chapitreQueryFR ($slug: String!) {
	contentfulChapitre(slug: {eq:$slug}, node_locale: {eq: "fr-CA"}) {
		titreChapitre
		texte {
			childMarkdownRemark {
				html
			}
		}
        chapitreAvant
        chapitreApres
        nomRoman
		slug
		equivalentUrl
	}
}`