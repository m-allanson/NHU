import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import cookie from 'react-cookies';
//import { auth, provider } from '../firebase.js';
import lang_fr from '../langues/lang_fr.json';
import lang_en from '../langues/lang_en.json';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

        this.toggle = this.toggle.bind(this);
        this.toggleNight = this.toggleNight.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.lang = lang_fr;

        if (this.props.lang == "fr-CA") {
            this.lang = lang_fr;
        }
        if (this.props.lang == "en-US") {
            this.lang = lang_en;
        }

        this.state = {
            isOpen: false,
            nightMode: false,
            status: this.lang.btn_nuit_inactif,
            mounted: undefined,
            user: null
        };
    }

    onEntering() {
        this.setState({ status: this.lang.btn_nuit_desactivation });
    }

    onEntered() {
        this.setState({ status: this.lang.btn_nuit_inactif });
        cookie.save('c_nightMode', 'off', { path: '/' });
    }

    onExiting() {
        this.setState({ status: this.lang.btn_nuit_activation });
    }

    onExited() {
        this.setState({ status: this.lang.btn_nuit_actif });
        cookie.save('c_nightMode', 'on', { path: '/' });
    }

    componentWillMount() {
        this.state.mounted = cookie.load('c_nightMode');
        this.checkActif();
    }

    componentDidMount() {
        this.setState({ nightMode: !this.state.nightMode });

        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         this.setState({ user });
        //     }
        // });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNight() {
        this.setState({ nightMode: !this.state.nightMode });

        this.checkActif();
    }

    checkActif() {
        if (typeof document !== "undefined") {
            if (this.state.mounted == 'on') {
                this.state.nightMode = true;
                this.state.status = this.lang.btn_nuit_actif;
                this.state.mounted = undefined;
            }
            if (this.state.nightMode) {
                document.body.classList.add('darkClass')
            } else {
                document.body.classList.remove('darkClass')
            }
        }
    }

    logout() {
        // auth.signOut()
        //     .then(() => {
        //         this.setState({
        //             user: null
        //         });
        //         cookie.save('lecteur', null, { path: '/' });

        //         window.location.reload();
        //     });
    }

    login() {
        // auth.signInWithPopup(provider)
        //     .then((result) => {
        //         const user = result.user;
        //         this.setState({
        //             user
        //         });
        //         cookie.save('lecteur', this.state.user, { path: '/' });
        //     });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto nav-center" pills>
                            <NavItem>
                                <Button color="primary" onClick={this.toggleNight}>
                                    <FontAwesome
                                        name='moon'
                                        className='mr-2'
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />
                                    {this.lang.btn_nuit + this.state.status}
                                </Button>

                                <Collapse
                                    isOpen={this.state.nightMode}
                                    onEntering={this.onEntering}
                                    onEntered={this.onEntered}
                                    onExiting={this.onExiting}
                                    onExited={this.onExited}
                                >
                                </Collapse>
                            </NavItem>
                            <NavItem>
                                <Link to={this.lang.header_accueil_url} className="text-white nav-link">{this.lang.header_accueil}</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={this.lang.header_nouvelles_url + "/"} className="text-white nav-link">{this.lang.header_nouvelles}</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white">
                                    {this.lang.header_lecture}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to={this.lang.header_histoires_url + "/"}>{this.lang.header_histoires}</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to={this.lang.header_calendrier_url + "/"}>{this.lang.header_calendrier}</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to={this.lang.header_progression_url + "/"}>{this.lang.header_progression}</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white">
                                {this.lang.header_wiki}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to={this.lang.header_personnages_url + "/"}>{this.lang.header_personnages}</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to={this.lang.header_pouvoirs_url + "/"}>{this.lang.header_pouvoirs}</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to={this.lang.header_groupes_url + "/"}>{this.lang.header_groupes}</Link>
                                    </DropdownItem>
                                    {/* <DropdownItem>
                                        <Link to={this.lang.header_giervia_url + "/"}>{this.lang.header_giervia}</Link>
                                    </DropdownItem> */}
                                    <DropdownItem>
                                        <Link to={this.lang.header_evenements_url + "/"}>{this.lang.header_evenements}</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to={this.lang.header_encyclopedie_url + "/"}>{this.lang.header_encyclopedie}</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white">
                                    {this.state.user ?
                                        <div>
                                            {this.state.user.displayName}
                                        </div>
                                        :
                                        <div>
                                            Connexion
                                        </div>
                                    }
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {this.state.user ?
                                        <div>
                                            <button onClick={this.logout}>Log Out</button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={this.login}>Log In</button>
                                        </div>
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}