import MdAlamin from "./Components/MdAlamin";

function App() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold py-6 bg-orange-300">
          Practice GitHub Collaboration
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <MdAlamin />
          {/* Copy Paste your profile component */}
        </section>
      </div>
    </>
  );
}

export default App;
