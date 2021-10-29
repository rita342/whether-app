import React,{useEffect,useState} from 'react'
import { Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap'

const Whether = () => {

    const [city,setCity] = useState(null);
    const [search , setSearch]= useState("Mumbai");
    const fetchApi = async (search) => {
      try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d2f8e3f5442c5c05f16af5ae7ddd8e5d`
        const response = await fetch(url);
        const resJson = await response.json();
    setCity(resJson)
      }catch(error){
        console.log(error)
      }
   };
   useEffect(() => {
      
       fetchApi("london");
   },[] )

    return(
        <>
          <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl  type="search" onChange= {(event)=>{ setSearch(event.target.value) }}/>
      <Button variant="outline-info" onClick={(e)=>{
        e.preventDefault();
        fetchApi(search)
      }} >Search</Button>
    </Form>
  </Navbar>
    
            <div> 
                <div className ="info">
                    <h2 className = "location">
                    {city  && city.name}
                        </h2>
                       
    
                    </div>
                    <div className="wave-one"> {city  && city.main.temp}</div>
                    <div className="wave-two"></div>
                    <div className="wave-three"></div>
                    </div>
               
        </>
    )
}
export default Whether;