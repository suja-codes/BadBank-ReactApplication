
function Withdraw(){
  const [show, setShow]             = React.useState(true);
  const [status, setStatus]         = React.useState('');
  const [withdrawal, setWithdrawal] = React.useState('');
  const [balance, setBalance]       = React.useState(100);
  const [disabled, setDisabled]     = React.useState(true);
  
  const ctx = React.useContext(UserContext);

// to check for valid withdraw conditions
const validate = amount => {
  if (!amount) {
    setStatus('Error: Please enter a value');
    return false;      
  }
  if(!Number(amount)){
    setStatus('Error: Please enter a valid number.');
    return false;
  }
  if(amount < 0){
    setStatus('Error: Please enter a value greater than zero.');
    return false;
  }
  if((balance - amount) < 0){
  setStatus('Error: Transaction failed. Overdraft alert!');
    return false;
  }
  return true;
}

const withdrawMoney = amount => {
  if(!validate(amount)) return;
  setBalance(Number(balance) - Number(amount));
  setShow(false);
  setStatus(`$${amount} successfully debited from your account.`);
  setTimeout(()=> setStatus(''), 3000);
  ctx.users.push(Number(balance) - Number(amount))
}

function clearForm(){
  setWithdrawal('');
  setShow(true);
}

React.useEffect(() => {
  if (!withdrawal) {
    setDisabled(true);
  }
  else {
    setDisabled(false);
  }
}, [withdrawal]);

return (
  <Card
    bgcolor="primary"
    header="WITHDRAW"
    status={status}
    body={show ? (  
            <>
              <h4>Account Balance: ${balance}</h4>
                <br/>
                  Withdrawal Amount
                <br/>
                <br/>
              <input type="withdraw" 
                    className="form-control" 
                    id="withdraw" 
                    placeholder="$ 0.00" 
                    value={withdrawal} 
                    onChange={e => setWithdrawal(e.currentTarget.value)}/>
                    <br/>
                    <br/>
              <button type="submit" 
                      className="btn btn-success" 
                      onClick={() => withdrawMoney(withdrawal)} 
                      disabled={disabled}>Withdraw
              </button>
            </>
          ):(
            <>
              <h5>Success!</h5>
              <br/>
              <button type="submit" 
                      className="btn btn-success" 
                      onClick={clearForm}>Make another Withdrawal
              </button>
              <br/>
              <br/>
            </>
          )}
  />
)
}
