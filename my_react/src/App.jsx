import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import State from "./State";
import Effect from "./Effect";
import Timer from "./Timer";
import Student from "./Student";
import Click from "./Click";
import Change from "./Change";
import Submit from "./Submit";
import Ternary from "./Ternary";
import Routing from "./Routing";
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Food />
      <State />
      <Effect />
      <Timer />
      <Student name="John Doe" age={20} isStudent={true} />
      <Student name="Jane Smith" age={25} isStudent={false} />
      <Click />
      <Change />
      <Submit />
      <Ternary />
      <Routing />
    </>
  );
}
export default App;
