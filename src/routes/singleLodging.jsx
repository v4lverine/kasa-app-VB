import { redirect } from "react-router-dom";
import lodgings from "../datas/lodging.json"

export async function singleLodgingLoader({ params }) {
    const lodging = lodgings.find((item) => item.id === params.id)

    if (!lodging) {
        return redirect("/error");
    }

    return { lodging }
};