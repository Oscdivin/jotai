import {createBrowserRouter} from "react-router-dom"

import Multifrom from "../multiFrom/Multifrom"
import StepOne from "../multiFrom/StepOne"
import StepTwo from "../multiFrom/StepTwo"
import StepThree from "../multiFrom/StepThree"


export const mainRoter = createBrowserRouter([
{
    path:"/wer",
    element:<Multifrom/>,
    
},
{
    path:"/",
    index:true,
    element:<StepOne/>,
    
},
{
    path:"/step-two",
    index:true,
    element:<StepTwo/>,
    
},
{
    path:"/step-three",
    index:true,
    element:<StepThree/>,
    
},
])