function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      //dokme next ta yeki monde b akhar bashe
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestion - 1)
    return (
      //dokme next ta yeki monde b akhar bashe
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
