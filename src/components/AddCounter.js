const AddCounter = (props) => {
  return (
    <button onClick={props.onClick} className="add-counter">
      Add Counter
    </button>
  );
};

export default AddCounter;
