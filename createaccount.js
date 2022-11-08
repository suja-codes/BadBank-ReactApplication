// This form allows user inputs in the appropriate fields, 
// validate the inputs, 
// and store them in the React State. 

//                        Code logic
// State: status, name, email, password, UserContext
//         if  |     Fields: styling, value, onChange event
//             |     Button: handle event
// depending on state show one form or another
//        else |     Fields: styling, value, onChange event
//             |     Button: handle event

function CreateAccount(){
	const [show, setShow]         = React.useState(true);
	const [status, setStatus]     = React.useState('');
	const [name, setName]         = React.useState('');
	const [email, setEmail]       = React.useState('');
	const [password, setPassword] = React.useState('');
	const [disabled, setDisabled] = React.useState(true);
	const ctx = React.useContext(UserContext);  
  
	// to check if field is empty
	function validate(field, label){
		if (!field) {
		  setStatus('Error:  ' + label + ' is required.');
		  setTimeout(() => setStatus(''), 3000);
		  return false;
		}
		return true;
	}
  
	// to check password length
	const password_Length = 8;
	function passwordLength(field, label){
		if(field.length < password_Length) {
		  setStatus('Error: ' +  'password must be atleast ' + password_Length + ' characters');
		  setTimeout(() => setStatus(''), 3000);
		  return false;
		}
		return true;
	}
  
	// to create account
	function handleCreate(){
	  console.log(name,email,password);
	  if (!validate(name,     'name'))     return;
	  if (!validate(email,    'email'))    return;
	  if (!validate(password, 'password')) return;
	  if (!passwordLength(password, 'password')) return;
	  window.alert("Successfully Created Account!");
	  ctx.users.push({name,email,password});
	  console.log(ctx);
	  //console.log(ctx.users);
		//console.log(ctx.users.balance);
		//console.log(ctx.users.name);
	  setShow(false);
	}    
  
	// to reset form
	function clearForm(){
	  setName('');
	  setEmail('');
	  setPassword('');
	  setShow(true);
	}
  
	React.useEffect(() => {
		  if (!name && !email && !password) {
			  setDisabled(true);
		  }
		  else {
			  setDisabled(false);
		  }
	  }, [name, email, password]);
  
	return (
	  <Card
		bgcolor="primary"
		header="CREATE ACCOUNT"
		status={status}
		body={show ? (  
			<>
				Name
				<br/>
				<br/>
				<input type="input" 
						className="form-control" 
						id="name" 
						placeholder="Enter name" 
						value={name} 
						onChange={e => setName(e.currentTarget.value)} />
				<br/>
				Email address
				<br/>
				<br/>
				<input type="input" 
						className="form-control" 
						id="email" 
						placeholder="Enter email" 
						value={email} 
						onChange={e => setEmail(e.currentTarget.value)}/>
				<br/>
				Password
				<br/>
				<br/>
				<input type="password" 
						className="form-control" 
						id="password" 
						placeholder="Enter password" 
						value={password} 
						onChange={e => setPassword(e.currentTarget.value)}/>
				<br/>
				<br/>
				<button type="submit" 
						className="btn btn-success" 
						onClick={handleCreate}>Create Account
				</button>
			</>
			  ):(
				<>
				  <h5>Success!</h5>
				  <br/>
					<button type="submit" 
							className="btn btn-success" 
							onClick={clearForm}>Add another account
					</button>
				</>
			  )}
	  />
	)
  }
  