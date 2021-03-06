import React, { Component } from 'react'
import  data from './recipes.json'
import './styles/Recipes.css'
import { Fragment } from 'react';


const recipes = data.recipes;
var dict={};

class  Recipes extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            hiddenClass: "hidden",
            randomItem: recipes[0],
            focus: "none"
        }
    }

    makedict = () => 
    {
        recipes.map(function(reci)
        {
            dict[reci.title]=reci;
        })
    }

    componentDidMount()
    {
        this.makedict();
    }


    handleRandom = () => 
    {
        const keys = Object.keys(dict);
        const randIndex = Math.floor(Math.random() * keys.length);
        const randKey = keys[randIndex];
        const recipe = dict[randKey];
        this.setState({randomItem: recipe})
        console.log(this.state.randomItem);
        this.setState({hiddenClass:"unhidden"})
    }

    

    render() 
    {
        return (
            <Fragment>
            <div>
                <div className="welcome-container">
                    <h1>Recipes</h1>
                </div>

                <div className="overlay" style={{display: this.state.focus}}></div>
                
                <div className="container">
                    <div className="box-row">
                    {
                        // Recipies taken from https://www.telegraph.co.uk/recipes/0/30-recipes-you-should-master-by-the-age-of-30/
                        // use this for images
                        recipes.map(reci => {
                            
                            const ref = React.createRef();

                            const handleClick = () => 
                            {
                                ref.current.scrollIntoView({behaviour: 'smooth', start: 'block'});
                                window.scrollBy(0, -100);
                            }

                            const mega = (e) => 
                            {
                                if(e.currentTarget.className === "box")
                                {
                                    e.currentTarget.className="megabox";
                                    e.currentTarget.querySelector('.hidden').style.display ="block";
                                    this.setState({focus: "inline"});
                                }
                                else 
                                {
                                    e.currentTarget.className="box";
                                    e.currentTarget.querySelector('.hidden').style.display ="none";
                                    this.setState({focus: "none"});
                                }
                                handleClick();
                            }

                            return(
                                <div className="box" onClick={mega.bind(this)} ref={ref}>
                                    <div className="grid">
                                        <img src={require("./images/food/"+reci.image+".jpg")} alt="oops"/>
                                            <div className="reciTitle">
                                                <h1>{reci.title}</h1> 
                                                <p>{"Time to prepare: " + reci.time}</p>
                                            </div>
                                            
                                            <div className ="hidden">
                                                <div className="grid">
                                                    <div className="ingredients">
                                                        <h1>Ingredients</h1>

                                                        {reci.ingredients.map(i=><p>{i}</p>)} 
                                                    </div>  

                                                    <div className="steps">
                                                        <h1>Steps</h1>
                                                        {reci.steps.map(i=><p>{i}</p>)} 
                                                    </div>  
                                                </div>       
                                            </div>
                                    </div>
                                </div>
                        )})
                    }
                    </div>
                    <div style={{flexWrap: "wrap", flexDirection: "column"}}>
                        <h1>Can't Decide what to eat?</h1>
                        <button className="randomButton" onClick={this.handleRandom}>Suprise Me!</button>
                    </div>
                    
                    <div className={this.state.hiddenClass}>
                        <div className="random">
                            <div className="megabox" id={this.state.randomItem.title}>
                                <div className="grid">
                                    <img src={require("./images/food/"+this.state.randomItem.image+".jpg")} alt="oops"/>
                                        <div className="reciTitle">
                                            <h1>{this.state.randomItem.title}</h1> <p>{this.state.randomItem.time+" to prepare"}</p>

                                        </div> {/*Box Text*/}

                                        <div className="ingredients">
                                            <h1>Incredients</h1>

                                            {this.state.randomItem.ingredients.map(i=><p>{i}</p>)} 
                                        </div>  {/*Ingredient*/}

                                        <div className="steps">
                                            <h1>Steps</h1>

                                            {this.state.randomItem.steps.map(i=><p>{i}</p>)} 
                                        </div>  {/*Steps*/}       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
)}}

export default Recipes

