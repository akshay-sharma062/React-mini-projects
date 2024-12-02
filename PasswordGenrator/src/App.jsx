import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setpassword] = useState("");
  const passRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^_";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setpassword(pass);
    }
  }, [length, numAllow, charAllow, setpassword]);
  useEffect(() => {
    passwordGenrator();
  }, [length, numAllow, charAllow, passwordGenrator]);

const copyPass = useCallback(()=>{
   passRef.current?.select()
  window.navigator.clipboard.writeText(password)

},[password])


  return (
    <>
      <div className="bg-slate-600 w-80 h-40  text-center items-center  ">
        <h1 className="text-green-500 text-center text-3xl p-1 ">
          Password Genrator
        </h1>
        <div>
          <input
            type="text"
            value={password}
            placeholder="password"
            className="bg-white w-52 h-10 rounded-l-xl"
            ref={passRef}
          />
          <button className="bg-blue-600 p-1 h-10 text-center rounded-r-xl "
           onClick={copyPass}>
            copy
          </button>
        </div>
        <div className="p-1 text-orange-400 ">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="w-20 cursor-pointer"
          />
          <label htmlFor="" className="mx-2">
            length{length}
          </label>
          <input
            type="checkbox"
            defaultChecked={numAllow}
            onChange={() => setnumAllow((prev)=>!prev)}
          />
          <label htmlFor="" className="mx-2">
            Numbers
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            onChange={() => setcharAllow((prev)=>!prev)}
          />
          <label htmlFor="">Char</label>
        </div>
      </div>
    </>
  );
}

export default App;
