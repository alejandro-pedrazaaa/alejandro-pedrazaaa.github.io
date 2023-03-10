export const Card = (props) => {
  return (
    <div className="col-12 col-lg-6">
      <div className="card mb-5 ">
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <div>
            <p className="card-text">{props.text}</p>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <button type="button" className="btn btn-primary">
              <a href={props.liveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </button>
            <button type="button" className="btn btn-primary">
              <a href={props.sourceCode} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
