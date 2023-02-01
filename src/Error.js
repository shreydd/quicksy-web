import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError()

    return (
        <>
            <p>error {err.status + " : " + err.statusText} </p>
        </>
    )
}

export default Error;