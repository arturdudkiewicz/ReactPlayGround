function MojKomponent({title, content}) {
  return (
    <div>
      <dialog open>
        <h1>{title}</h1>
        <p>{content}</p>
      </dialog>
    </div>
  );
}

ReactDOM.render(
  <MojKomponent title="test" content="test2" />,
  document.getElementById('app')
);
