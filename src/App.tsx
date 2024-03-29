import GUISection from "@/components/GUISection";
import CRUD from "@/components/guis/CRUD";
import CircleDrawer from "@/components/guis/CircleDrawer";
import Counter from "@/components/guis/Counter";
import FlightBooker from "@/components/guis/FlightBooker";
import TemperatureConverter from "@/components/guis/TemperatureConverter";
import Timer from "@/components/guis/Timer";

function App() {
  const guis = [
    {
      title: "Counter",
      component: Counter
    },
    {
      title: "Temperature Converter",
      component: TemperatureConverter
    },
    {
      title: "Flight Booker",
      component: FlightBooker
    },
    {
      title: "Timer",
      component: Timer
    },
    {
      title: "CRUD",
      component: CRUD
    },
    {
      title: "Circle Drawer",
      component: CircleDrawer
    }
  ];

  return (
    <main className="m-auto max-w-[1024px] px-[22px] py-5">
      <h1 className="text-4xl font-semibold">7GUIs implementation with React</h1>
      <p className="my-5 text-xl">
        This is a live version of an implementation of&nbsp;
        <a className="text-blue-500 hover:underline" href="https://eugenkiss.github.io/7guis/">
          7GUIs
        </a>
        &nbsp;with&nbsp;
        <a className="text-blue-500 hover:underline" href="https://react.dev">
          React
        </a>
        .
      </p>
      {guis.map(({ title, component: Component }) => (
        <GUISection key={title} title={title}>
          <Component />
        </GUISection>
      ))}
    </main>
  );
}

export default App;
