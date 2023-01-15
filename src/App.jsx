import { useState } from "react";
import Thankyou from "./components/Thankyou";

function App() {
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);

  const getRateButton = (num) => {
    const array = [];

    for (let i = 1; i <= num; i++) {
      array.push(
        <input
          type="button"
          key={i}
          className="md:w-14 md:h-14 bg-bgNeutralDarkBlue rounded-full focus:bg-bgNeutralMediumGrey hover:bg-bgPrimaryOrange mobile:w-10 mobile:h-10 text-neutral-400"
          value={i}
          onClick={(e) => setRate(e.target.value)}
        />
      );
    }
    return array;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setRate(rate);
    // console.log(rate);
  };

  return (
    <main className="font-Overpass">
      {/* wrapper */}
      <div className="box-border flex justify-center items-center h-screen">
        {/* card */}
        {!loading && (
          <div className="md:w-[413px] md:h-[417px] bg-[rgba(27,35,46,255)] rounded-3xl flex-col mobile:w-[326px] mobile:h-[359px]">
            {/* card item wrapper */}
            <div className="w-full h-full md:px-9 md:py-9 mobile:px-7 mobile:py-7">
              {/* card items */}
              <div className="md:w-14 md:h-14 bg-bgNeutralDarkBlue rounded-full md:mb-7 mobile:w-10 mobile:h-10 mobile:mb-4">
                <div className="bg-icon-star w-full h-full bg-no-repeat bg-center"></div>
              </div>
              <div>
                <h1 className="font-bold md:text-3xl md:my-3 mobile:my-2 mobile:text-2xl">
                  How did we do?
                </h1>
              </div>
              <div>
                <p className="text-neutral-400 mobile:text-[13px]">
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>
              {/* card items wrapper for button input */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-evenly gap-2 my-6">
                  {/* card items button input */}
                  {getRateButton(5)}
                </div>
                <div>
                  <input
                    type="submit"
                    className="bg-bgPrimaryOrange rounded-3xl w-full font-bold text-neutral-300 py-3 hover:bg-white hover:text-bgPrimaryOrange tracking-widest"
                    value="SUBMIT"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
        {loading && <Thankyou rate={rate} />}
      </div>
    </main>
  );
}

export default App;
