import useHttp from "../hooks/useHttp";
import MealItems from "./MealItems";
import Error from "./Error";
const requestConfig ={};

export default function Meals(){
   const {
    data :loadMeals,
    isLoading,
    error,
}
= useHttp('http://localhost:3000/meals',requestConfig,[])
console.log(loadMeals)

    if(isLoading){
        return <p className="center">Fetching Your Cuisines</p>
    }

    if(error){
        return <Error title="Failed to fetch meals" message={error}/>
    }

    

    



    return(
        <>
        <ul id="meals">
            {loadMeals.map((meal)=>(
                <MealItems key={meal.id} meal={meal}/>
            ))}


        </ul>
        </>
    )

}