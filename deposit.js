function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [balance, setBalance]   = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const ctx                     = React.useContext(UserContext);


// to check for valid deposit conditions
  const validate = amount => {
    if (!amount) {
      setStatus('Error : Please enter a value.');
      return false;      
    }
    if(!Number(amount)){
      setStatus('Error : Please enter a valid number.');
      return false;
    }
    if(amount < 0){
      setStatus('Error : Please enter a value greater than zero.');
      return false;
    }
    return true;
  }

  const depositMoney = amount => {
    if(!validate(amount)) return;
    setBalance(Number(balance) + Number(amount));
    setShow(false);
    setStatus(`$${deposit} successfully credited into your account.`);
    setTimeout(()=> setStatus(''), 3000);
    ctx.users.push(Number(balance) + Number(amount));
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  React.useEffect(() => {
		if (!deposit) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [deposit]);

  return (
    <Card
      bgcolor="primary"
      header="DEPOSIT"
      status={status}
      body={show ? (  
          <>
            <h4>Current Balance: ${balance}</h4>
            <br/>
              Deposit Amount:
            <br/>
            <input 
              type="deposit" 
              className="form-control"
              id="deposit" 
              placeholder="$ 0.00" 
              value={deposit} 
              onChange={e => setDeposit(e.currentTarget.value)}
            />
            <br/>
            <button 
              type="submit" 
              className="btn btn-success" 
              onClick={() => depositMoney(deposit)}
              disabled={disabled}>Deposit
            </button>
          </>
        ):(
          <>
            <h5>Success!</h5>
            <br/>
              <button 
                type="submit" 
                className="btn btn-success" 
                onClick={clearForm}>Make another deposit
              </button>
              <br/>
              <br/>
          </>
        )}
    />
  )
}