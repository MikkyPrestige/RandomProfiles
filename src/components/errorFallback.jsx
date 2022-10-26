
const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p style={{ textTransform: "uppercase", fontWeight: "900", fontSize: "25px" }}>Something went wrong:</p>
      <pre style={{ color: "red", fontWeight: "600", fontSize: "20px" }}>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback;