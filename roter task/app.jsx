import { route,routes } from "react-router-dom";
import "./app.css";
import { navbar } from "./components/navbar";
 function app() {
    return {
        <div classmate = "app">
        <navbar />
        <Routes>
        <route path = "/" element = {<home />} />
        <route path = "/about" element = {<about />} />
        <route path = "/contact" element = {<contact />} />
        <route path = "/service" element = {<service />} />

        </Routes>
        </div>

    };
 };