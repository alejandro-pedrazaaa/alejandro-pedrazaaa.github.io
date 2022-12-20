export const TextAndTools = (props) => {
  return (
    <div className="mb-4">
      <p>{props.text}</p>
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
