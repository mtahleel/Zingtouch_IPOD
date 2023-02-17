import Sidebar from "./Sidebar";

function Screen(props) {
  const { classValue, jsxVal } = props;
  return (
    <div className={classValue}>
      {jsxVal}
      <Sidebar />
    </div>
  );
}

export default Screen;
