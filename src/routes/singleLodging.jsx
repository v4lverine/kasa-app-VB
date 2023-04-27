import lodgings from "../datas/lodging.json"

export async function singleLodgingLoader({ params }) {
    const lodging = lodgings.find((item) => item.id === params.id)
    return { lodging }
};