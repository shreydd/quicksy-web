const Card = ({tag, val}) => {

    const copyHandler = (val) => {
        try {
            navigator.clipboard.writeText(val);
        } catch {
            console.log("not copied")
        }

    }

    return (
        <>
            <div className="card">
                <p>{tag}</p>
                {/* <p>val: {val} </p> */}
                <button className="copy-btn" onClick={() => copyHandler(val)}>Copy</button>
            </div>
        </>
    )
}

export default Card;