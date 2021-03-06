import React, { Component } from 'react';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import Header from '../components/header'
import Footer from '../components/footer'
import BlockIntro from '../components/block_intro';
import EquivURL from '../components/equivURL';
import BreadcrumbCompo from '../components/breadcrumb_compo';
// import BackToTop from '../components/back_to_top';
import Teaser from '../components/teaser';
import Helmet from 'react-helmet'
import lang_fr from '../langues/lang_fr.json';
import lang_en from '../langues/lang_en.json';

import Layout from '../components/layout'

class ListeDesTheories extends Component {
	constructor(props) {
		super(props);

		/** Buffer de la langue par défaut */
		this.lang = lang_fr;

		/** Trouve la bonne langue */
		if (this.props.pageContext.lang === "fr-CA") { this.lang = lang_fr; }
		if (this.props.pageContext.lang === "en-US") { this.lang = lang_en; }
	}

	render() {
		const {
			data
		} = this.props

		return (
			<Layout>
				<div id="page-wrapper">
					<Helmet title={this.lang.header_encyclopedie + this.lang.meta_title}></Helmet>

					<Header lang={this.props.pageContext.lang} />

					<BreadcrumbCompo number={2} active={this.lang.header_encyclopedie} />

					<EquivURL url={this.lang.equi_encyclopedie + "/"} label={this.lang.other_lang_label} />

					<BlockIntro full={true} titre={this.lang.header_encyclopedie} first={this.lang.encyclopedie_intro_text} second={this.lang.encyclopedie_intro_warning} />

					<Container fluid className="p-0">
						<Row className="pb-5">
							<Col sm="12" lg="9" >
								{
									data.allContentfulTheorie.edges.map(
										(edge) =>
											<div className="clearfix border-bottom mb-2 anim-bounce-in" key={edge.node.id}>
												<Teaser haveHeader={true} titre_url={this.lang.encyclopedie_url + edge.node.slug} titre={edge.node.titre} haveDate={false} description={edge.node.description} haveLink={true} link_url={this.lang.encyclopedie_url + edge.node.slug} link_label={this.lang.nouvelle_details} />
											</div>
									)
								}
							</Col>
						</Row>
					</Container>

					{/* <Container fluid>
						<div className="pb-5">
							<BackToTop lang={this.props.pageContext.lang} />
						</div>
					</Container> */}

					<Footer lang={this.props.pageContext.lang} />
				</div>
			</Layout>
		)
	}
}

ListeDesTheories.propTypes = {
	data: PropTypes.object.isRequired
}

export default ListeDesTheories

export const pageQuery = graphql`query listeTheorieQueryFR ($lang: String!) {
	allContentfulTheorie (sort: {fields: [titre], order: ASC}, filter: {node_locale: {eq: $lang}}) {
		edges {
			node {
				id
				titre
				description {
					childMarkdownRemark {
						html
					}
				}
				texte {
					childMarkdownRemark {
						html
					}
				}
				slug
			}
		}
	}
  }`