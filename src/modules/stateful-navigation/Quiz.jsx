import { useState } from 'react';
import { QUESTIONS as questions } from './constants';

const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState("");
    const [finished, setFinished] = useState(false);

    const handleSelect = () => {
        if (selected === questions[current].answer) {
            setScore((prev) => prev + 1);
        }
        setSelected("");
        if (current === questions.length - 1) {
            setFinished(true);
        } else {
            setCurrent((prev) => prev + 1);
        }
    };

    const restart = () => {
        setCurrent(0);
        setScore(0);
        setSelected("");
        setFinished(false);
    };

    if (finished) {
        const result = Math.round((score / questions.length) * 100);

        return (
            <>
                <h3>Your score</h3>
                <h4>{result} %</h4>
                <button onClick={restart}>Restart</button>
            </>
        );
    }
    const q = questions[current];
    return (
        <>
            <h2>
                Question {current + 1} of {questions.length}
            </h2>
            <h4 className="space-x-2">{q.question}</h4>
            {q.options.map((opt) => (
                <label key={opt} styles={{ display: "block" }}>
                    <input
                        type="radio"
                        name={opt}
                        value={opt}
                        checked={selected === opt}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                    {opt}
                </label>
            ))}
            <div>
                <button onClick={handleSelect} disabled={!selected}>
                    {current === questions.length - 1 ? "Finished" : "Next"}
                </button>
            </div>
        </>
    );
};

export default Quiz;