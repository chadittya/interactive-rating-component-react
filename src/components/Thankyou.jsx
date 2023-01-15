export default function Thankyou(props) {
  return (
    <div className="md:w-[413px] md:h-[417px] bg-[rgba(27,35,46,255)] rounded-3xl flex-col mobile:w-[326px] mobile:h-[359px]">
      {/* card item wrapper */}
      <div className="flex w-full h-full md:px-9 md:py-9 flex-col items-center mobile:px-7 mobile:py-7">
        {/* card items */}
        <div className="w-44 h-28 mb-8">
          <div className="bg-illu-thankyou w-full h-full bg-no-repeat bg-center mobile:bg-contain"></div>
        </div>
        <div className="bg-bgNeutralDarkBlue rounded-full w-44 text-center mb-8">
          <p className="py-1 text-bgPrimaryOrange">
            You selected {props.rate} of 5
          </p>
        </div>
        <h1 className="font-bold md:text-3xl mb-3 mobile:text-2xl">
          Thank you!
        </h1>
        <p className="text-center text-neutral-400 mobile:text-[13px]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hestitate to get in touch!
        </p>
      </div>
    </div>
  );
}
