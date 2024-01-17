import Button from "@/components/Button";
import classnames from "classnames";
import { useState } from "react";

interface CircleProp {
  id: number;
  x: number;
  y: number;
  diameter: number;
}

type Position = {
  x: number;
  y: number;
};

export default function CircleDrawer() {
  const [circles, setCircles] = useState<CircleProp[]>([]);
  const [selected, setSelected] = useState<{
    show: boolean;
    circle: CircleProp;
    position: Position;
  }>({
    show: false,
    circle: {
      id: 0,
      x: 0,
      y: 0,
      diameter: 0
    },
    position: {
      x: 0,
      y: 0
    }
  });

  function undo() {}

  function redo() {}

  const canUndo = false;
  const canRedo = false;

  function handleDraw(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (selected.show) {
      setSelected(lastSelected => ({ ...lastSelected, show: false, id: 0 }));
      return;
    }
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    setCircles(lastCircles => [
      ...lastCircles,
      { id: Math.floor(Math.random() * 100000), x, y, diameter: 30 }
    ]);
  }

  function handleClickCircle(circle: CircleProp, position: Position) {
    setSelected(preSelected => ({
      ...preSelected,
      show: false
    }));
    setSelected({
      show: true,
      circle,
      position
    });
  }

  function onDiameterChange(newDiameter: number) {
    setCircles(lastCircles =>
      lastCircles.map(circle => {
        if (circle.id === selected.circle.id) {
          return {
            ...circle,
            diameter: newDiameter
          };
        }
        return circle;
      })
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-center gap-3">
        <Button onClick={undo} disabled={!canUndo}>
          Undo
        </Button>
        <Button onClick={redo} disabled={!canRedo}>
          Redo
        </Button>
      </div>
      <div
        className="relative h-[200px] w-[400px] overflow-hidden border border-solid border-gray-300"
        onClick={handleDraw}
      >
        {circles.map(circle => (
          <Circle
            key={circle.id}
            circle={circle}
            active={selected.circle.id === circle.id}
            onClick={handleClickCircle}
          />
        ))}
      </div>
      {selected.show && (
        <DiameterDialog
          position={selected.position}
          defaultDiameter={selected.circle.diameter}
          onChange={onDiameterChange}
        />
      )}
    </div>
  );
}

function Circle({
  circle,
  active = false,
  onClick
}: {
  circle: CircleProp;
  active?: boolean;
  onClick: (circle: CircleProp, position: Position) => void;
}) {
  return (
    <div
      className={classnames(
        "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-black hover:bg-gray-100",
        {
          "bg-gray-100": active
        }
      )}
      style={{ top: circle.y, left: circle.x, width: circle.diameter, height: circle.diameter }}
      onClick={e => {
        e.stopPropagation();
        onClick({ ...circle }, { x: e.clientX, y: e.clientY });
      }}
    />
  );
}

function DiameterDialog({
  position,
  defaultDiameter = 30,
  onChange
}: {
  position: Position;
  defaultDiameter?: number;
  onChange: (newDiameter: number) => void;
}) {
  console.log(defaultDiameter);

  return (
    <div
      className="fixed z-10 flex flex-col gap-3 rounded-xl border border-solid border-gray-300 bg-white px-4 py-3"
      style={{ top: position.y, left: position.x }}
    >
      <p>Adjust diameter of circle</p>
      <input
        type="range"
        min={10}
        max={100}
        defaultValue={defaultDiameter}
        onChange={e => onChange(parseInt(e.target.value))}
      />
    </div>
  );
}
