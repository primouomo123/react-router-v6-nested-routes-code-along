function Login() {
  return (
    <>
      <main>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" name="username" placeholder="Username" />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}

export default Login