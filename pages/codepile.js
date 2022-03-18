//disable clicks with JS
const foo = document.querySelector('#foo')  
foo.addEventListener('click', (event) => {  
  event.preventDefault();  
});



//how to set and get data from local storage
useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (allTasksAreDone) {
      uselessFact();
    } else {
      showFact(null);
    }


//how to fetch API for the useless fact
async function uselessFact() {
    try {
      const fact = await fetch(
        "https://uselessfacts.jsph.pl/random.json"
      ).then((res) => res.json());

      showFact(fact);
    } catch (e) {
      console.error(e);
    }
  }
}, [allIsDone]);
