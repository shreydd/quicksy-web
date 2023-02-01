import { useParams, useSearchParams } from "react-router-dom";

const Body =() => {

    // const userGivenParams = useParams();
    // const {tag} = userGivenParams;
    const [searchParams, setSearchParams] = useSearchParams();

    const tag = searchParams.get('tag')
    const val = searchParams.get('val')

    return (
        <>
            <p>tag: {tag} </p>
            <p>val: {val} </p>
        </>
    )
}

export default Body;