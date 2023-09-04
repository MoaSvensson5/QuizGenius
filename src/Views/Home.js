import "./home.css";

export function StartView (){

    return (
        <div className="welcome">
            <h3 className="welcome-title text">Welcome to the Quiz Genius Challenge!</h3>
            <p className="welcome-text text">Are you ready to put your knowledge to the test? Prepare for an exhilarating journey of brain-teasing questions and rapid decision-making. With only 15 seconds per question, the clock is ticking, and the thrill is on!</p>
            <p className="welcome-text text">Choose your battleground amoung four captivating subjects: Generel Knowledge, Celebrities, Movies and Math. Each category promises a unique voyage into the realm of facts, entertainment, and numerical challenges. Whether you're a trivia enthusiast, a celebrity aficionado, a movie buff, or a math wizard, there's a thrill awaiting you.</p>
            <p className="welcome-text text">Sharpen you wits, trust you instincts, and dive into the excitement. Can you make the right call under the pressure of time? Are you the quiz master you've always believed yourself to be? It's time to find out!</p>
            <p className="welcome-text text">Get ready to embark on this exciting journey of knowledge, speed, and discovery. <b>Let the quiz begin!</b></p>
            <div className="buttons-categories">
                <button className="button-category general-knowledge">General Knowledge</button>
                <button className="button-category celebrities">Celebrities</button>
                <br></br>
                <button className="button-category movies">Movies</button>
                <button className="button-category math">Mathematics</button>
            </div>
        </div>
    )
}