

export default function SpecialButton({ text, onClick }) {
    return (
        <button className="specialButton" onClick={onClick}>
            {text}
        </button>
    );
}