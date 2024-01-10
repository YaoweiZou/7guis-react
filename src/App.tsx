import Counter from "./components/guis/Counter";

function App() {
  return (
    <main className="max-w-[1024px] py-5 px-[22px] m-auto">
      <h1 className="text-4xl font-semibold">7GUIs implementation with React</h1>
      <p className="my-5 text-xl">
        This is a live version of an implementation of{" "}
        <a className="text-blue-500 hover:underline" href="https://eugenkiss.github.io/7guis/">
          7GUIs
        </a>
        &nbsp;with&nbsp;
        <a className="text-blue-500 hover:underline" href="https://react.dev">
          React
        </a>
        .
      </p>
      <section className="py-5">
        <h2 className="text-2xl font-semibold">Counter</h2>
        <Counter />
      </section>
    </main>
  );
}

export default App;
