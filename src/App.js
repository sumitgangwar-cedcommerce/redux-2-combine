import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Add, Clear, Divide, Multiply, Subtract } from "./redux/actions";

function App() {
  const sample = {
    Add: false,
    Subtract: false,
    Division: false,
    clear: false,
    Multiply: false,
  };

  const [act, setAct] = useState(sample);
  const [res, setRes] = useState("");

  const a = useRef();
  const b = useRef();
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
  });

  useEffect(() => {
    let str = "";
    Object.keys(act).map((item) => {
      if (act[item] === true) {
        console.log(item, data[item]["res"]);
        str = String(data[item]["res"]);
      }
    });
    setRes(str);
  }, [act]);

  return (
    <div className="App">
      <div>
        <input ref={a} type="number" placeholder="num1" />
        <input ref={b} type="number" placeholder="num2" />
      </div>
      <button
        onClick={() => {
          setAct({ ...sample, Add: true });
          dispatch(Add({ a: a.current?.value, b: b.current?.value }));
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setAct({ ...sample, Subtract: true });
          dispatch(Subtract({ a: a.current?.value, b: b.current?.value }));
        }}
      >
        Subtract
      </button>
      <button
        onClick={() => {
          setAct({ ...sample, Division: true });
          dispatch(Divide({ a: a.current?.value, b: b.current?.value }));
        }}
      >
        Divide
      </button>
      <button
        onClick={() => {
          setAct({ ...sample, Multiply: true });
          dispatch(Multiply({ a: a.current?.value, b: b.current?.value }));
        }}
      >
        Multiply
      </button>
      <button
        onClick={() => {
          dispatch(Clear());
          setAct({ ...sample, Clear: true });
        }}
      >
        Clear
      </button>

      <div>
        <h1>Answer : {res} </h1>
      </div>
    </div>
  );
}

export default App;
