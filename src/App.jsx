import jsonData from './data.json';

function App() {
    const totalScore = jsonData.reduce((total, test) => total + test.score, 0);
    const averageScore = (totalScore / jsonData.length).toFixed(0);

    return (
        <div className="content">
            <div className="header">
                <h1 className="opaque">Your Result</h1>
                <div className="scoreBox">
                    <h1 className="score">{averageScore}</h1>
                    <p className="opaque">of 100</p>
                </div>

                <h2 className="reply">Great</h2>
                <p className="statistics opaque">
                    You scored higher than 65% of the people who have taken
                    these tests.
                </p>
            </div>
        </div>
    );
}

export default App;
