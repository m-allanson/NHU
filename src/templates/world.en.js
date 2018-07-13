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
	Button,
	Collapse,
	Card,
	CardBody
} from 'reactstrap';
import Header from '../components/enHeader'
import Footer from '../components/enFooter'

class World extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		const {
			data
		} = this.props

		return (
			<div id="page-wrapper">
				<Header />

				<div>
					<Breadcrumb className="mb-0">
						<BreadcrumbItem><Link to="/en">Homepage</Link></BreadcrumbItem>
						<BreadcrumbItem active>{data.contentfulMonde.nomPlanete}</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<div className="equiv">
					<Link className="text-white" to={data.contentfulMonde.equivalentUrl}><Button className="float-right" color="primary">Fr</Button></Link>
				</div>

				<div className="py-5">
					<Container fluid>
						<h1 className="display-4">Giervia</h1>
						<p className="lead">The planet on which the stories occur are on the planet Giervia.</p>
					</Container>
				</div>

				<Container fluid className="mb-5">
					<div className="d-flex justify-content-center">
						<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Map</Button>
					</div>
					<Collapse isOpen={this.state.collapse}>
						<Card>
							<CardBody>
								<div className="d-flex justify-content-center">
									<img className="img-fluid" src={data.contentfulMonde.carte.file.url} />
								</div>
							</CardBody>
						</Card>
					</Collapse>
				</Container>

				<Container fluid className="p-0">
					<Row className="pb-5">
						<Col sm="12" md="6" lg="3">
							<div className="">
								<h3>Fontil</h3>
							</div>
							{
								data.allContentfulPays.edges.map(
									(edge) =>
										<div className="clearfix mb-2" key={edge.node.id}>
											{edge.node.nomContinent == "Fontil" ?
												(<div>
													<div>
														<Row className="no-gutters">
															<Col md="3" sm="12">
																<Link className="mb-2" to={"/en/giervia/" + edge.node.slug}>{edge.node.nomPays}</Link>
															</Col>
														</Row>
													</div>
												</div>) :
												('')
											}
										</div>
								)
							}
						</Col>
						<Col sm="12" md="6" lg="3">
							<div className="">
								<h3>Vactil</h3>
							</div>
							{
								data.allContentfulPays.edges.map(
									(edge) =>
										<div className="clearfix mb-2" key={edge.node.id}>
											{edge.node.nomContinent == "Vactil" ?
												(<div>
													<div>
														<Row className="no-gutters">
															<Col md="3" sm="12">
																<Link className="mb-2" to={"/en/giervia/" + edge.node.slug}>{edge.node.nomPays}</Link>
															</Col>
														</Row>
													</div>
												</div>) :
												('')
											}
										</div>
								)
							}
						</Col>
						<Col sm="12" md="6" lg="3">
							<div className="">
								<h3>Xentil</h3>
							</div>
							{
								data.allContentfulPays.edges.map(
									(edge) =>
										<div className="clearfix mb-2" key={edge.node.id}>
											{edge.node.nomContinent == "Xentil" ?
												(<div>
													<div>
														<Row className="no-gutters">
															<Col md="3" sm="12">
																<Link className="mb-2" to={"/en/giervia/" + edge.node.slug}>{edge.node.nomPays}</Link>
															</Col>
														</Row>
													</div>
												</div>) :
												('')
											}
										</div>
								)
							}
						</Col>
						<Col sm="12" md="6" lg="3">
							<div className="">
								<h3>Islands</h3>
							</div>
							{
								data.allContentfulPays.edges.map(
									(edge) =>
										<div className="clearfix mb-2" key={edge.node.id}>
											{edge.node.nomContinent == "Islands" ?
												(<div>
													<div>
														<Row className="no-gutters">
															<Col md="3" sm="12">
																<Link className="mb-2" to={"/en/giervia/" + edge.node.slug}>{edge.node.nomPays}</Link>
															</Col>
														</Row>
													</div>
												</div>) :
												('')
											}
										</div>
								)
							}
						</Col>
					</Row>
				</Container>

				<Footer />
			</div>
		)
	}
}

World.propTypes = {
	data: PropTypes.object.isRequired
}

export default World

export const pageQuery = graphql`query mondeQueryEn {
	contentfulMonde(slug: {eq:"giervia"}, node_locale: {eq: "en-US"}) {
		nomPlanete
		slug
		equivalentUrl
		carte {
		  file {
			url
		  }
		}
	}
	allContentfulPays(sort: {fields: [nomPays], order: ASC}, filter: {node_locale: {eq: "en-US"}}) {
		edges {
			node {
				id
				nomPays
				slug
				nomContinent
			}
		}
	}
}`