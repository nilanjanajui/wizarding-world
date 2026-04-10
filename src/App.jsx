import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-slate-100 antialiased">
      {/* your Header here */}
      <Homepage />
      {/* your Footer here */}
    </div>
  );
}

export default App;