import React, { Component } from 'react';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Row,
	Col,
	Breadcrumb,
	BreadcrumbItem,
	Button
} from 'reactstrap';
import Header from '../components/header'
import Footer from '../components/footer'
import lang_fr from '../langues/lang_fr.json';
import lang_en from '../langues/lang_en.json';

import Layout from '../components/layout'

class Nouvelle extends Component {
	constructor(props) {
		super(props);

		this.lang = lang_fr;

		if (this.props.pageContext.lang === "fr-CA") {
			this.lang = lang_fr;
		}
		if (this.props.pageContext.lang === "en-US") {
			this.lang = lang_en;
		}
	}

	render() {
		const {
			titreNouvelle,
			description,
			date,
			dateSpe,
			lienReference,
			equivalentUrl
		} = this.props.data.contentfulNouvelle

		return (
			<Layout>
				<div id="page-wrapper">
					<Header lang={this.props.pageContext.lang} />

					<div>
						<Breadcrumb className="mb-0">
							<BreadcrumbItem><Link to={this.lang.header_accueil_url}>{this.lang.header_accueil}</Link></BreadcrumbItem>
							<BreadcrumbItem><Link to={this.lang.header_nouvelles_url + "/"}>{this.lang.header_nouvelles}</Link></BreadcrumbItem>
							<BreadcrumbItem active>{titreNouvelle}</BreadcrumbItem>
						</Breadcrumb>
					</div>

					<div className="equiv">
						<Link className="text-white" to={this.lang.other_lang_url + equivalentUrl + "/"}><Button className="float-right" color="primary">{this.lang.other_lang_label}</Button></Link>
					</div>

					<Container className="py-5">
						<Row>
							<Col>
								<div className="mb-5">
									<h1 className="display-4">{titreNouvelle}</h1>
									<span><small>{dateSpe} / {date}</small></span>
								</div>

								<div dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />

								{
									lienReference ?
										(<Link to={lienReference + "/"}>{this.lang.nouvelle_details}</Link>) :
										('')
								}
							</Col>
						</Row>
					</Container>

					<Footer lang={this.props.pageContext.lang} />
				</div>
			</Layout>
		)
	}
}

Nouvelle.propTypes = {
	data: PropTypes.object.isRequired
}

export default Nouvelle

export const pageQuery = graphql`query nouvelleQueryFR ($slug: String!, $lang: String!) {
	contentfulNouvelle(slug: {eq:$slug}, node_locale: {eq: $lang}) {
		titreNouvelle
		description {
			childMarkdownRemark {
				html
			}
		}
		date(formatString: "YYYY-MM-DD")
		dateSpe
		slug
		lienReference
		node_locale
		equivalentUrl
	}
}`