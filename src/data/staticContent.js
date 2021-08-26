import Counter from "../components/Counter";
import BoolFlip from "../components/BoolFlip";

export const pageCounter = {
    0: <Counter />,
    1: <BoolFlip />,
    2: <div> <Counter /> <hr /> <BoolFlip /> </div>
}