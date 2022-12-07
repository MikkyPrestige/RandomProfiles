// ERRORFALLBACK COMPONENT - This component is for the Error fall back message on the ErrorBoundary router which displays the error message on the screen when there is a error in the code

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p style={{ textTransform: "uppercase", fontWeight: "900", fontSize: "25px" }}>Something went wrong:</p>
      <pre style={{ color: "red", fontWeight: "600", fontSize: "20px" }}>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback;