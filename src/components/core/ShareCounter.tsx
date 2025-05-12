function SharedCounter(props: any) {
  return (
    <div className="bg-blue-200">
      <h1>SharedCounter {props.count}</h1>
      <button className="btn btn-primary" type="button" onClick={props.onClick}>
        {" +++ "}
      </button>
    </div>
  );
}

export default SharedCounter;
