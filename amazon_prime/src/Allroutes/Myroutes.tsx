import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Signin from "../Signin";
import Categories from "../Categories";
import Home from "../Home";
import Movies from "../Movies";
import Live from "../Live";
import Subscriptions from "../Subcriptions";
import TVmain from "../Tvmain";
import Watchlist from "../Watchlist";
import All from "../All";
import Rentals from "../Rentals";
import Watchany from "../Watchany";
import Help from "../Help";
import PaymentPage from "../payment";
import Createacc from "../Createaccount";



function Myroutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Navigate to="home" />}></Route>
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path="movies" element={<Movies></Movies>}></Route>
                    <Route path="tv" element={<TVmain></TVmain>}></Route>
                    <Route path="live" element={<Live></Live>}></Route>
                    <Route path="subscription" element={<Subscriptions></Subscriptions>}></Route>
                    <Route path="categories" element={<Categories></Categories>}></Route>
                    <Route path="watch" element={<Watchlist></Watchlist>}></Route>
                    <Route path="all" element={<All></All>}></Route>
                    <Route path="rentals" element={<Rentals></Rentals>}></Route>
                    <Route path="watchany" element={<Watchany></Watchany>}></Route>
                    <Route path="help" element={<Help></Help>}></Route>    
                    <Route path="payment" element={<PaymentPage></PaymentPage>}></Route>
                    <Route path="/payment" element={<PaymentPage />} />  
                   
                </Route>
                <Route path="signin" element={<Signin></Signin>}></Route>
                <Route path="createacc" element={<Createacc></Createacc>}></Route>    

            </Routes>
        </>
    )
}
export default Myroutes