import useName from "../hooks/userName";

const Son1 = (props) => {
    const [name, handleName] = useName(props.name);

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => handleName('Zohar')}>click</button>
        </div>
    );
}

export default Son1;