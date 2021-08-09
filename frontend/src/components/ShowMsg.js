
const ShowMsg = ({ alreadyScheduled }) => {
    return (
        <div class='alert-box' style={{display: alreadyScheduled ? 'block' : 'none'}}>
            You already have a meeting scheduled at the entered time.
        </div>
    )
}

export default ShowMsg
