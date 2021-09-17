import React from "react"
import "./index.css"

function Appcontainer(props){
    return(
        <div>
            <center className="header">
                <h1>COVID INFORMATION</h1>
            </center>
           <div className="container">
            <div className="col col-small">
                <center>
                    <h1 className="name">FULL CASES</h1>
                    <h1>{props.world.cases}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">TODAY CASES</h1>
                    <h1 >{props.world.todayCases}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">TOTAL DEATHS</h1>
                    <h1>{props.world.deaths}</h1>
                </center>    
            </div>
            </div>
            <div className="container">
            <div className="col col-small">
                <center>
                    <h1 className="name">RECOVERED</h1>
                    <h1>{props.world.recovered}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">ACTIVE</h1>
                    <h1>{props.world.active}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">TOTAL TESTS</h1>
                    <h1>{props.world.tests}</h1>
                </center>    
            </div>
            </div>
            <div className="container">
            <div className="col col-big">
                <center>
                    <h1 className="name">AFFECTED COUNTRIES</h1>
                    <h1>{props.world.affectedCountries}</h1>
                        <div>
                            <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" height="50" width="50"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" height="50" width="50"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/243px-Flag_of_Brazil.svg.png" height="50" width="50"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png" height="50" width="50"></img>
                            <img src="https://www.gettysburgflag.com/media/catalog/product/cache/2/small_image/460x368/9df78eab33525d08d6e5fb8d27136e95/5/1/51rv1rhofgl._sl1500_.jpg" height="50" width="50"></img>
                        </div>
                </center> 
            </div>
            </div>

            <div>   
                <center className="footer">
                    <h1>Source : disease.sh</h1>
                </center>
            </div>
       </div>
        )
    
}
export default Appcontainer