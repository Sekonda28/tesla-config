const Total = (props) => {
  const handleClick = () => {
    alert("Thanks for choosing to buy a Tesla !");
  };

  return (
    <div className="total">
      <h3>{props.price.toLocaleString("fr")} €</h3>
      <button onClick={handleClick}>Buy !</button>
    </div>
  );
};

export default Total;
