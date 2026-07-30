import { useToggle } from "./useToggle";

export default function ToggleButton() {
    const [isOn, toggle] = useToggle(false);
    return (
        <button onClick={toggle}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}