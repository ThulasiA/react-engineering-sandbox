import { useState } from "react";

const EditableList = ({ list }) => {
    const [items, setItems] = useState(list);
    const [editingIndex, setEditingIndex] = useState(null);
    const [draft, setDraft] = useState("");

    const startEdit = (index) => {
        setEditingIndex(index);
        setDraft(items[index]);
    };

    const save = () => {
        if (!draft.trim()) {
            alert("Item cannot be empty");
            return;
        } else {
            setItems((prev) =>
                prev.map((item, i) => (i === editingIndex ? draft : item)),
            );
            setEditingIndex(null);
            setDraft("");
        }
    };

    const cancel = () => {
        setEditingIndex(null);
        setDraft("");
    };

    return (
        <div>
            {items.map((item, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                    {editingIndex === i ? (
                        <>
                            <input
                                value={draft}
                                onChange={(e) => setDraft(e.target.value)}
                            />
                            <button onClick={save}>Save</button>
                            <button onClick={cancel}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <span>{item}</span>
                            <button onClick={() => startEdit(i)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EditableList;
