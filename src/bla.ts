const useState = <T>(initialState?: T) => {
    let state = initialState 

    function setState(newState) {
        state = newState;
    }
  return [state, setState] as [T|undefined, (newState: T) => void];
};

const [state, setState] = useState<string>("bla");
console.log(state); // 0
setState("bla2");

