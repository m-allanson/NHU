import React, { Component } from 'react';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Nav,
	NavItem,
	NavLink,
	Container,
	ListGroup,
	Breadcrumb,
	BreadcrumbItem,
	TabContent,
	TabPane
} from 'reactstrap';
import Header from '../components/header'
import Footer from '../components/footer'
import classnames from 'classnames';
import ListHistoireProgression from '../components/list_histoire_progression';
import BlockIntro from '../components/block_intro';
import EquivURL from '../components/equivURL';
import lang_fr from '../langues/lang_fr.json';
import lang_en from '../langues/lang_en.json';

import Layout from '../components/layout'

class Progression extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1',
		};

		this.lang = lang_fr;

		if (this.props.pageContext.lang === "fr-CA") {
			this.lang = lang_fr;
		}
		if (this.props.pageContext.lang === "en-US") {
			this.lang = lang_en;
		}
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		const {
			data
		} = this.props;

		return (
			<Layout>
				<div id="page-wrapper">
					<Header lang={this.props.pageContext.lang} />

					<div>
						<Breadcrumb className="mb-0">
							<BreadcrumbItem><Link to={this.lang.header_accueil_url}>{this.lang.header_accueil}</Link></BreadcrumbItem>
							<BreadcrumbItem active>{this.lang.header_progression}</BreadcrumbItem>
						</Breadcrumb>
					</div>

					<EquivURL url={this.lang.equi_progression + "/"} label={this.lang.other_lang_label} />

					<BlockIntro full={false} titre={this.lang.header_progression} first={this.lang.progression_intro_text} />

					<Container className="py-5">
						<Nav pills>
							<NavItem className="cursor-update histoires-pills">
								<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
									{this.lang.progression_en_cours}
								</NavLink>
							</NavItem>
							<NavItem className="cursor-update histoires-pills">
								<NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
									{this.lang.progression_termines}
								</NavLink>
							</NavItem>
						</Nav>
						<br />
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="1">
								<ListGroup>
									{
										data.allContentfulRoman.edges.map(
											(edge) =>
												<div key={edge.node.id}>
													{
														edge.node.chapitreActuel < edge.node.maximumChapitre ?
															(
																<ListHistoireProgression histoire_progression={edge.node} lang={this.props.pageContext.lang} />
															) :
															('')
													}
												</div>
										)
									}
								</ListGroup>
							</TabPane>
							<TabPane tabId="2">
								<ListGroup>
									{
										data.allContentfulRoman.edges.map(
											(edge) =>
												<div key={edge.node.id}>
													{
														edge.node.chapitreActuel === edge.node.maximumChapitre ?
															(
																<ListHistoireProgression histoire_progression={edge.node} lang={this.props.pageContext.lang} />
															) :
															('')
													}
												</div>
										)
									}
								</ListGroup>
							</TabPane>
						</TabContent>
					</Container>

					<Footer lang={this.props.pageContext.lang} />
				</div>
			</Layout>
		)
	}
}

Progression.propTypes = {
	data: PropTypes.object.isRequired
}

export default Progression

export const pageQuery = graphql `query listeHistoireQueryFR2 ($lang: String!) {
        allContentfulRoman(sort: {fields: [typeHistoire, titreRoman], order: DESC}, filter: {node_locale: {eq: $lang}}) {
          edges {
            node {
                id
              titreRoman
              typeHistoire
              resume {
                childMarkdownRemark {
                  html
                }
              }
              slug
              chapitreActuel
              maximumChapitre
            }
          }
        }
      }`