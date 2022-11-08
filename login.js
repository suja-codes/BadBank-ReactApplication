
function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
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

  // to login
  function handleCreate(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!passwordLength(password, 'password')) return;
    ctx.users.push({email,password});
    setShow(false);
    console.log(ctx);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  // to reset form
  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }
  
  // to validate if a field is empty
  React.useEffect(() => {
		if (!email && !password) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [email, password]);


  return (
    <Card
      bgcolor="primary"
      header="LOGIN"
      status={status}
      body={show ? (  
        <>
          Email Address
              <br/>
              <br/>
              <input type="input" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter Email" 
                      value={email} 
                      onChange={e => setEmail(e.currentTarget.value)} />
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
                  onClick={handleCreate}>Login
                  <br/>
          </button>         
        </>
      ):(
        <>
          <h5>Success!</h5>
            <button type="submit" 
                    className="btn btn-success" 
                    onClick={clearForm}>Logout
            </button>
        </>
      )}
    />
  )
}


