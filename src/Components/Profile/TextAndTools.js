import "./profile.css";

export const TextAndTools = (props) => {
  return (
    <div className="pb-4">
      <p className="mb-2">{props.text}</p>
      <ul className="list-group list-group-horizontal list-unstyled justify-content-center">
        {Object.keys(props.technologies).map((key) => {
          return (
            <li key={key} className="px-3">
              <img src={props.technologies[key]} alt={key} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
