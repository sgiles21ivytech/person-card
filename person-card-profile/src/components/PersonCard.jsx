const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;


    return(

        <>
        <div className="PersonCard">
            <div className="profile">
                <h2>{firstName},{lastName}</h2>
                <p>Age {age}</p>
                <p>Hair Color {hairColor}</p>
            </div>
        </div>
        </>



    )





};

export default PersonCard;