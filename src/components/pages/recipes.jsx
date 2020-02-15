import React from 'react'
import  data from './recipes.json'
import './styles/Comps.css'
import {Fragment} from 'react';


const metaComps = data.recipes;

function Comps() {
    return (
        <Fragment>
        <div>
            <div className="welcome-container">
            <h1>Recipes</h1>
            </div>
            
            <div className="container">
            <div className="box-row">

            {
                metaComps.map(reci => 
                     <div className="box">
                         <img src={require("./images/food/"+reci.image+".jpg")} alt="oops"/>
                        <div className="box-text">

                        <h1>{reci.title}</h1> <p>{reci.time+" to prepare"}</p>
                        {
                            reci.ingredients.map(ingredient=>
                                <p>
                                    
                                    {ingredient}
                                </p>
                            )
                        }
                    </div>
                    </div>
                )
            }
            </div>
            
            </div>
        </div>
        </Fragment>
    )
}

export default Comps
