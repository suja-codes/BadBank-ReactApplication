
// Components from ReactRouter library
// routing mechanism is in index.js
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;

// Adding Context
// Context object comes with a provider that takes a value.
// The value is passed to consuming components to get access to the value.
const UserContext = React.createContext(null);

// Card - Bootstrap component
//Instead of each card in the application being its own custom implementation, different parts of an application can reference 
//an already made card component and customize the content inside with specific properties.
function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-light';
      return 'card mb-3 ' + bg + txt;
    }
  
    return(
      <div className={classes()} style={{maxWidth: "35rem"}}>
          <center><h3><div className="card-header">{props.header}</div></h3></center>
        <div className="card-body">
          {props.title && (<h4 className="card-title">{props.title}</h4>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  // Form - Bootstrap component
  function Form(props){
    const ctx = React.useContext(UserContext);
    
    return(
      <> 
        <div style={{maxWidth: "31rem"}}>
          <div className="name-field" style={{display: props.showName}}>Name<br/>
          <input type="input"               
                className="form-control" 
                placeholder="Enter name" 
                onChange={e =>ctx.name=(e.currentTarget.value)} /><br/>
          </div>

          <div className="email-field" style={{display: props.showEmail}}>Email Address<br/>
          <input type="input"               
                className="form-control" 
                placeholder="Enter email" 
                onChange={e =>ctx.email=(e.currentTarget.value)} /><br/>
          </div>

          <div className="password-field" style={{display: props.showPassword}}>Password<br/>
          <input type="input"               
                className="form-control" 
                placeholder="Enter Password" 
                onChange={e =>ctx.password=(e.currentTarget.value)} /><br/>
          </div>

          <div className="amount-field" style={{display: props.showAmount}}>Amount<br/>
          <input type="number"               
                className="form-control" 
                placeholder="Enter amount" 
                onChange={e =>ctx.balance=(e.currentTarget.value)} /><br/>
          </div>  
        </div>
      </>      
    );    
  }
  
  