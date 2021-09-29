/**
 * React Router
 * // This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

//A <Switch> looks through all its children <Route>
//elements and renders the first one whose path
//matches the current URL. Use a <Switch> any time
//you have multiple routes, but you want only one
//of them to render at a time
 * 
 */
import { Component, useContext } from "react";
import { withRouter } from "react-router-dom";
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
/**
 * TODO
 * Know the difference between function component
 * and class component
 * 
 */
class Details extends Component {
    state = { loading: true, showModal: false };
    //Class component always has a render() method
    render() {
        if (this.state.loading) {
            return <h2>Loading..</h2>
        }
        const { animal, breed, city, state, description, name, images, showModal } = this.state;
        //It always return markup piece, works like normal function body
        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h2>Would you like to adopt {name}?</h2>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModal}>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                    <ThemeContext.Consumer>
                        {
                            //This is how you use useContext in class Components
                            //TODO check how useContext in class Components works
                            ([theme]) => (
                                <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Adopt {name}</button>
                            )
                        }
                    </ThemeContext.Consumer>
                </div>
            </div>
        );
    }

    //Instead of having hooks we have individual piece of state
    //With class components, we actually have a state object
    //that we are gonna refer to
    constructor() {
        //call super() inorder to call the component constructor
        super();

        //default state
        this.state = { loading: true };
        //Class Components have something called
        //life cycle methods, component did mount is the thing
        //that gets called as soon as the React component
        //is rendered for the first time so as soon as
        //someone goes to /detail/1 for example
        //it is going to render this for the first time
        //and going to call componentDidMount
    }
    async componentDidMount() {
        const res = await fetch(
            //TODO Search on this props.match.params
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        //settings loading to false because it is already loaded
        //we can write this in several formats

        /*
        this.setState(
            Object.assign(
                {
                    loading: false,
                },
                //Assigning everything directly from json.pets[0]
                json.pets[0]
            )
        );*/
        this.setState({
            loading: false,
            name: json.pets[0].name,
            breed: json.pets[0].breed,
            animal: json.pets[0].animal,
            description: json.pets[0].description,
            city: json.pets[0].city,
            state: json.pets[0].state
        });
    }
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }
    adopt = () => (window.location = 'http://bit.ly/pet-adopt');
}

const DetailsWithRouter = withRouter(Details);
export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}