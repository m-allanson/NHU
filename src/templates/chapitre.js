import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
	Card, 
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle,
	Breadcrumb, 
	BreadcrumbItem
} from 'reactstrap';

// var marked = require('marked');

class Chapitre extends Component {
	render() {
		const {
			titreChapitre,
			texte,
			chapitreAvant,
			chapitreApres,
			nomRoman
		} = this.props.data.contentfulChapitre
		
		console.log(chapitreAvant);
		console.log(chapitreApres);
		
		return (
			<Container fluid="true"> 
				<Row>
					<Col lg={{size: 8, offset:2}}>
						<div>
							<Breadcrumb>
								<BreadcrumbItem><Link to="../../../">Page d'accueil</Link></BreadcrumbItem>
								<BreadcrumbItem><Link to="../../../liste-des-histoires">Liste des histoires</Link></BreadcrumbItem>
								<BreadcrumbItem><Link to={nomRoman}>Roman</Link></BreadcrumbItem>
								<BreadcrumbItem active>{titreChapitre}</BreadcrumbItem>
							</Breadcrumb>
						</div>
						<Card>
							<CardBody>
								<CardText>
									<h1 className="page-header text-center">{titreChapitre}</h1>
									<div className="text-justify" dangerouslySetInnerHTML={{__html: texte.childMarkdownRemark.html}}/>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col lg={{size: 8, offset:2}}>
						<Card>
							<CardBody>
								<CardText>
									<Row>
										<Col xs="4" className="text-center">
											{
												chapitreAvant ?
													(<Button color="primary" href={chapitreAvant}>Chapitre précédent</Button>) :
													('')
											}
										</Col>
										<Col xs="4" className="text-center"><Button color="primary" href={nomRoman}>Retourner au roman</Button></Col>
										<Col xs="4" className="text-center">
											{
												chapitreApres ?
													(<Button color="primary" href={chapitreApres}>Chapitre suivant</Button>) :
													('')
											}
										</Col>
									</Row>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
            </Container>
		)
	}
}

Chapitre.propTypes = { 
	data: PropTypes.object.isRequired
}

export default Chapitre

export const pageQuery = graphql`query chapitreQuery($slug: String!) {
	contentfulChapitre(slug: {eq:$slug}) {
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
	}
}`