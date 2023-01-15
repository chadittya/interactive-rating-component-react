function App() {
  const getRateButton = (num) => {
    const array = [];

    for (let i = 1; i <= num; i++) {
      array.push(
        <input
          type="button"
          key={i}
          className="w-14 h-14 bg-bgNeutralDarkBlue rounded-full focus:bg-bgNeutralMediumGrey hover:bg-bgPrimaryOrange"
          value={i}
        />
      );
    }
    return array;
  };

  return (
    <main className="font-Overpass">
      {/* wrapper */}
      <div className="box-border flex justify-center items-center h-screen">
        {/* card */}
        <div className="w-[413px] h-[417px] bg-[rgba(27,35,46,255)] rounded-3xl flex-col">
          {/* card item wrapper */}
          <div className="w-full h-full px-9 py-9">
            {/* card items */}
            <div className="w-14 h-14 bg-bgNeutralDarkBlue rounded-full mb-7">
              <div className="bg-icon-star w-full h-full bg-no-repeat bg-center"></div>
            </div>
            <div>
              <h1 className="font-bold text-3xl my-3">How did we do?</h1>
            </div>
            <div>
              <p className="text-neutral-400">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            {/* card items wrapper for button input */}
            <div className="flex flex-row justify-evenly gap-2 my-6">
              {/* card items button input */}
              {getRateButton(5)}
            </div>
            <div>
              <button className="bg-bgPrimaryOrange rounded-3xl w-full font-bold text-neutral-300 py-3 hover:bg-white hover:text-bgPrimaryOrange">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
