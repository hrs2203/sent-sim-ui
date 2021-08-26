import { useSelector, useDispatch } from "react-redux";
import { flipBit } from "../data/boolpoint";

const BoolFlip = () => {
    const bt = useSelector(state => state.boolRed.value);
    const dispathcher = useDispatch();

    return (
        <div>
            <div> {bt ? "1" : "0"} : {bt ? "True" : "False"} </div>
            <button onClick={() => dispathcher(flipBit())}>Flip Point</button>
        </div>
    )

}

export default BoolFlip;