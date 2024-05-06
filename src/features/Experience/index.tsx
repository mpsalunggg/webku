const ExperiencePage = () => {
  return (
    <section className="container flex flex-col items-center w-full">
      <div className="my-8 text-center space-y-2 w-full">
        <h1 className="text-2xl font-semibold italic">
          Experiences & Activities
        </h1>
        <p className="">
          Here are some of the interesting experiences and activities that I
          have participated in
        </p>
      </div>
      <div className="w-full flex justify-center flex-col gap-6 mb-8">
        <div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Frontend Engineer
              </h4>
              <p className="font-semibold tracking-tight">2020 - 2024</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="italic">Educourse.id</p>
              <p className="italic">Internship</p>
            </div>
          </div>
          <ul className="mb-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ExperiencePage;
