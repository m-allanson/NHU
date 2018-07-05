import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Nav,
	NavItem,
	NavLink,
	Container,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	Breadcrumb,
	BreadcrumbItem,
	TabContent,
	TabPane,
	Button
} from 'reactstrap';
import classnames from 'classnames';
import HeaderEn from '../components/enHeader'
import FooterEn from '../components/enFooter'

class ListOfStories extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1',
		};
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
		} = this.props

		return (
			<div id="page-wrapper">
				<HeaderEn />

				<div>
					<Breadcrumb className="mb-0">
						<BreadcrumbItem><Link to="/en">Homepage</Link></BreadcrumbItem>
						<BreadcrumbItem active>Our Univese stories...</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<div className="equiv">
					<Button className="float-right" color="primary"><Link className="text-white" to="/histoires">Fr</Link></Button>
				</div>

				<div className="my-5">
					<Container>
						<h1 className="display-4">Our Univese stories...</h1>
						<p className="lead">Here are all the novels and mini-stories that relate to the New Human Universe.</p>
					</Container>
				</div>

				<Container className="my-5">
					<Nav pills>
						<NavItem className="histoires-pills">
							<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
								The stories
							</NavLink>
						</NavItem>
						<NavItem className="histoires-pills">
							<NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
								The mini-stories
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
													edge.node.typeHistoire == "Roman" ?
														(
															<ListGroupItem className="mb-4 border-top-0 border-right-0 border-left-0 pt-0 pr-0 pl-0">
																<ListGroupItemHeading><Link to={'/en/stories/' + edge.node.slug}>{edge.node.titreRoman}</Link></ListGroupItemHeading>
																<div className="list-group-item-text">
																	<div className="text-justify" dangerouslySetInnerHTML={{ __html: edge.node.resume.childMarkdownRemark.html }} />
																	<Link to={'/en/stories/' + edge.node.slug}>Start reading</Link>
																</div>
															</ListGroupItem>
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
													edge.node.typeHistoire == "Mini-histoire" ?
														(
															<ListGroupItem className="mb-4 border-top-0 border-right-0 border-left-0 pt-0 pr-0 pl-0">
																<ListGroupItemHeading><Link to={'/en/stories/' + edge.node.slug}>{edge.node.titreRoman}</Link></ListGroupItemHeading>
																<div className="list-group-item-text">
																	<div className="text-justify" dangerouslySetInnerHTML={{ __html: edge.node.resume.childMarkdownRemark.html }} />
																	<Link to={'/en/stories/' + edge.node.slug}>Start reading</Link>
																</div>
															</ListGroupItem>
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

				<FooterEn />
			</div>
		)
	}
}

ListOfStories.propTypes = {
	data: PropTypes.object.isRequired
}

export default ListOfStories

export const pageQuery = graphql`query listeHistoireQueryEN {
    allContentfulRoman(sort: {fields: [typeHistoire, titreRoman], order: DESC}, filter: {node_locale: {eq: "en-US"}}) {
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
		}
      }
    }
  }`