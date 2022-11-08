function Home(){
  return (
    <Card    
      border="dark" 
      txtcolor="black"
      header="WELCOME TO THE BAD BANK"
      title="For all your banking needs"
      body={(<img src="bank.png"
                  className="img-fluid" 
                  alt="Responsive image"/>)}
    />    
  );  
}

