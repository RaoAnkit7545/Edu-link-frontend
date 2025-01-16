import Firstpage from "./firstpage";
import Secondpage from "./secondpage";
// import Thirdpage from "./thirdpage";

function InitialPage() {
  return (
    <div className="flex flex-col">
      <Firstpage />
      <Secondpage />
      {/* <Thirdpage /> */}
    </div>
  );
}

export default InitialPage;
