import {BrowserRouter,Route} from "react-router-dom";
import Layout from "./pages/Layout"

export const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component = { Layout }  path="/" exact/>
        </BrowserRouter>
    )
}