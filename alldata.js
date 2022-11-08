// All User data tabulated here.

function AllData() {
  const ctx = React.useContext(UserContext);    
  
  return (
    <>
      <br/>
          <center><h3>ALL DATA IN STORE</h3></center>
      <br/>
      <br/>
      <table className="table table-striped Hover">
          <thead>
          <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>   
          </tr>
          </thead>
          <tbody >
            {ctx.users.map((user, key) => {
              return (
              <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
              </tr>
              )
            })}
          </tbody>
      </table>
    </>   
  );
}
