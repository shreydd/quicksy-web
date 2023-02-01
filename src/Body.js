import { useSearchParams } from "react-router-dom";
import Card from "../src/Card";

const Body =() => {

    const [searchParams, setSearchParams] = useSearchParams();

    const tag = searchParams.get('tag')
    const val = searchParams.get('val')

    const tagArray = (tag).split(",")
    const valArray = (val).split(",")

    return (
        <>
            <div className="cards-container">
                {
                    tagArray.map((item, index) => {
                        return <Card tag={item} val={valArray[index]} />
                    })
                }
            </div>
        </>
    )
}

export default Body;