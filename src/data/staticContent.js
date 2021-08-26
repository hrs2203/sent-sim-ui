import Counter from "../components/Counter";
import BoolFlip from "../components/BoolFlip";
import PageNotFound from "../components/404";
import Authentication from "../components/Authentication";

export const pageCounter = {
    "Counter": <Counter />,
    "BoolFlip": <BoolFlip />,
    "All": <div> <Counter /> <hr /> <BoolFlip /> </div>,
    "Authentication": <Authentication />
}

export const getPage = (pageName) => {
    return pageCounter[pageName] || <PageNotFound />
}