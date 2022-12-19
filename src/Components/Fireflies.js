import "../Styles/fireflies.css";

export const Fireflies = () => {
  return (
    <div>
      {[...Array(15)].map((e, i) => (
        <div key={i} className="firefly"></div>
      ))}
    </div>
  );
};
