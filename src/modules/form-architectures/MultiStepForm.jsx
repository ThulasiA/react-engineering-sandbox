// Build a 2‑step form where the Next button is enabled only when the current step is valid.

// Requirements
// Step 1: name (required)
// Step 2: email 
// Final submit logs the data

function MultiStepForm() {
    const [form, setForm] = useState({ name: "", email: "" });
    const [step, setStep] = useState(1);

    const update = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };
    const submit = (e) => {
        e.preventDefault();
        setForm((prev) => ({ ...prev, email: "" }));
        console.log(form);
    };

    const isStepValid =
        step === 1 ? form.name.trim().length > 3 : form.email.includes("@");

    const next = () => setStep((prev) => prev + 1);
    const back = () => setStep((prev) => prev - 1);
    return (
        <form onSubmit={submit}>
            {step === 1 && (
                <>
                    <label>Name:</label>
                    <input
                        placeholder="Must be 4 chars or more"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                    />
                </>
            )}
            {step === 2 && (
                <>
                    <label>Email: </label>
                    <input
                        placeholder="Enter valid email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                    />
                </>
            )}
            {step < 2 && (
                <button disabled={!isStepValid} onClick={next}>
                    Next
                </button>
            )}
            {step > 1 && (
                <button disabled={!isStepValid} onClick={back}>
                    Back
                </button>
            )}
            {step === 2 && (
                <button disabled={!isStepValid} onClick={submit}>
                    Submit
                </button>
            )}
        </form>
    );
}