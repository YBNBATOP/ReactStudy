function Hello(props) {
  return (
    <div>
      <h1>
        {props.person.message} {props.person.name} {props.person.seatNumbers}!
      </h1>
    </div>
  );
}

export default Hello;
