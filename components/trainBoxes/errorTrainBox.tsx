const ErrorTrainBox = ({ error, errorDetails = "Whoever was in charge of making this error didn't provide any details so we're just going to be in the dark abou this one..." }) => {
    return (
        <article className="card">
            <div className="meta">
                <div className="title">
                    <h3>{error}</h3>
                </div>
                <p className="route"><span className="tag">{errorDetails}</span></p>
            </div>
        </article>
    );
};

export default ErrorTrainBox;