/**
 *  source: https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/
 * A component's lifecycle is broadly classified into four parts
 * 
 * Initialization
 * This is the phase in which the component is going to start its journey
 * by setting up the state (see below) and the props. This is usually done 
 * inside the constructor method (see below to understand the initialization phase better).
 * 
 * class Initialize extends React.Component {
    constructor(props)
    {
    // Calling the constructor of
    // Parent Class React.Component
    super(props);
    // initialization process
    this.state = {
        date : new Date(),
        clickedStatus: false
    };
    }

 * Mounting
 * 
 * The name is self-explanatory. Mounting is the phase in which our React component mounts 
 * on the DOM (i.e., is created and inserted into the DOM).
 * This phase comes onto the scene after the initialization phase is completed. 
 * In this phase, our component renders the first time. The methods that are available in this phase are:
 * 
 * componentWillMount()
 *  -> dont make any API requests in this state
 * componentDidMount()
 *  -> you can make any API requests and update state
 * 
 * class LifeCycle extends React.Component {
  componentWillMount() {
      console.log('Component will mount!')
   }
  componentDidMount() {
      console.log('Component did mount!')
      this.getList();
   }
  getList=()=>{
   /*** method to make api call***
  }
  render() {
      return (
         <div>
            <h3>Hello mounting methods!</h3>
         </div>
      );
   }
}
 * 
 * Updating
 * 
 * This is the third phase through which our component passes. 
 * After the mounting phase where the component has been created, 
 * the update phase comes into the scene. This is where component’s 
 * state changes and hence, re-rendering takes place.
 * In this phase, the data of the component (state & props) 
 * updates in response to user events like clicking, typing and so on. 
 * This results in the re-rendering of the component. 
 * The methods that are available in this phase are:
 * 
 * shouldComponentUpdate()
 *   if you want to re-render the component on some condition, then shouldComponentUpdate() method is the right place.
 * componentWillUpdate()
 *   it is called once after the ‘shouldComponentUpdate’ method.
 * ComponentDidUpdate()
 *   
 * 
 * 
 * 
 * 
 * Unmounting
 * This is the last phase in the component’s lifecycle. 
 * As the name clearly suggests, the component gets unmounted from the DOM in this phase. 
 * The method that is available in this phase is:
 * 
 * 
 */