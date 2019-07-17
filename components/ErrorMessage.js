export default ({ message, error }) => (
  <aside>
    {message}
    {error && console.log(message, error)}
    <style jsx>{`
      aside {
        padding: .5em;
        font-size: 14px;
        border: 1px solid red;
        margin: 20px 0;
      }
    `}</style>
  </aside>
);