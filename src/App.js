import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Buttons from "./Buttons";
import ES6Basics from "./ES6Basics";
import Factorial from "./ES6/i-Design/Factorial";
import Rest from "./ES6/i-Design/Rest";
import Spread from "./ES6/i-Design/Spread";
import Filter from "./ES6/i-Design/Filter";
import Map1 from "./ES6/i-Design/Map1";
import Reduce from "./ES6/i-Design/Reduce";
import Sort from "./ES6/i-Design/Sort";
import Find from "./ES6/i-Design/Find";
import Map2 from "./ES6/i-Design/Map2";
import String_Length from "./ES6/i-Design/String_Length";
import Spread2 from "./ES6/i-Assess/Spread2";
import Filter1 from "./ES6/i-Assess/Filter1";
import Sort1 from "./ES6/i-Assess/Sort1";
import ES6Advanced from "./ES6Advanced";
import Set from "./ES6_Advanced/i-Design/Set";
import Promises from "./ES6_Advanced/i-Design/Promises";
import Object_entries from "./ES6_Advanced/i-Design/Object_entries";
import LeftRightShift from "./ES6_Advanced/i-Design/LeftRightShit";
import AsyncAwait from "./ES6_Advanced/i-Design/AsyncAwait";
import Sayhelloinput from "./ES6_Advanced/i-Design/Say Hello/Sayhelloinput";
import GradeCalculation from "./ES6_Advanced/i-Design/Grade Calculation/GradeCalculation";
import BookCategories from "./ES6_Advanced/i-Design/BookCategories";
import BooksAvailable from "./ES6_Advanced/i-Design/BooksAvailable";
import ShoppingCart from "./ES6_Advanced/i-Assess/ShoppingCart";
import PrimeComposite from "./ES6_Advanced/i-Assess/PrimeComposite";
import ReactBasics from "./ReactBasics";
import ClassComponentEg1 from "./React_Basics/i-Design/ClassComponentEg1";
import CelebrationInvitation from "./React_Basics/i-Design/ CelebrationInvitation";
import HomeEssentials from "./React_Basics/i-Design/HomeEssentials";
import WelcomePage from "./React_Basics/i-Design/WelcomePage";
import VotersList from "./React_Basics/i-Assess/VotersList";
import AlumniMeet from "./React_Basics/i-Assess/AlumniMeet";
import ReactComponents from "./ReactComponents";
import HomeApp from "./React_Components/i-Design/MovieHomePage/src/HomeApp";
import Course from "./React_Components/i-Design/Course/src/Course";
import ParentChild from "./React_Components/i-Design/Parent_Child/src/ParentChild";
import ReactKeys from "./React_Components/i-Design/ReactKeys/src/ReactKeys";
import ConditionalRendering from "./React_Components/i-Design/ConditionalRendering/src/ConditionalRendering";
import CustomerBank from "./React_Components/i-Assess/CustomerBank/src/CustomerBank";
import MovieList from "./React_Components/i-Assess/MovieList/src/MovieList";
import ReactPropsState from "./ReactPropsState";
import Cricket from "./React_Props_State/i-Design/Cricket/src/Cricket";
import ChildrenProperty from "./React_Props_State/i-Design/ChildrenProperty/src/ChildrenProperty";
import TicketBooking from "./React_Props_State/i-Design/TicketBooking/src/TicketBooking"
import ProtoTypes from "./React_Props_State/i-Design/ProtoTypes/src/ProtoTypes";
import QuantityOfItemPurchased from "./React_Props_State/i-Assess/QuantityOfItemPurchased/src/QuantityOfItemPurchased"
import CricketHockeyPlayers from "./React_Props_State/i-Assess/CricketHockeyPlayers/src/CricketHockeyPlayers";
import CourseDetails from "./React_Props_State/i-Assess/CourseDetails/src/CourseDetails";
import ReactLifeCycle from "./ReactLifeCycle";
import DisplayJSON from "./ReactLifeCycle/i-Design/DisplayJSON/src/DisplayJSON";
import MovieFilter from "./ReactLifeCycle/i-Design/MovieFilter/src/MovieFilter";
import MovieSearch from "./ReactLifeCycle/i-Design/MovieSearch/src/MovieSearch";
import ComponentDidMount from "./ReactLifeCycle/i-Design/ComponentDidMount/src/ComponentDidMount";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Buttons  */}
          <Route exact path="/" component={Buttons} />

          {/* ES6 Basics  */}
          <Route exact path="/ES6Basics" component={ES6Basics} />
          <Route exact path="/ES6Basics/Factorial" component={Factorial} />
          <Route exact path="/ES6Basics/Rest" component={Rest} />
          <Route exact path="/ES6Basics/Spread" component={Spread} />
          <Route exact path="/ES6Basics/Filter" component={Filter} />
          <Route exact path="/ES6Basics/Map1" component={Map1} />
          <Route exact path="/ES6Basics/Reduce" component={Reduce} />
          <Route exact path="/ES6Basics/Sort" component={Sort} />
          <Route exact path="/ES6Basics/Find" component={Find} />
          <Route exact path="/ES6Basics/Map2" component={Map2} />
          <Route exact path="/ES6Basics/String_Length" component={String_Length}/>
          <Route exact path="/ES6Basics/Spread2" component={Spread2} />
          <Route exact path="/ES6Basics/Filter1" component={Filter1} />
          <Route exact path="/ES6Basics/Sort1" component={Sort1} />

          {/* ES6 Advanced  */}
          <Route exact path="/ES6Advanced" component={ES6Advanced} />
          <Route exact path="/ES6Advanced/Set" component={Set} />
          <Route exact path="/ES6Advanced/Promises" component={Promises} />
          <Route exact path="/ES6Advanced/Object_entries" component={Object_entries} />
          <Route exact path="/ES6Advanced/LeftRightShift" component={LeftRightShift} />
          <Route exact path="/ES6Advanced/AsyncAwait" component={AsyncAwait} />
          <Route exact path="/ES6Advanced/SayHello" component={Sayhelloinput} />
          <Route exact path="/ES6Advanced/GradeCalculation" component={GradeCalculation} />
          <Route exact path="/ES6Advanced/BookCategories" component={BookCategories} />
          <Route exact path="/ES6Advanced/BooksAvailable" component={BooksAvailable} />
          <Route exact path="/ES6Advanced/ShoppingCart" component={ShoppingCart} />
          <Route exact path="/ES6Advanced/PrimeComposite" component={PrimeComposite} />

          {/* React Basics  */}
          <Route exact path="/ReactBasics" component={ReactBasics} />
          <Route exact path="/ReactBasics/HelloWorld" component={ClassComponentEg1} />
          <Route exact path="/ReactBasics/CelebrationInvitation" component={CelebrationInvitation} />
          <Route exact path="/ReactBasics/HomeEssentials" component={HomeEssentials} />
          <Route exact path="/ReactBasics/WelcomePage" component={WelcomePage} />
          <Route exact path="/ReactBasics/VotersList" component={VotersList} />
          <Route exact path="/ReactBasics/AlumniMeet" component={AlumniMeet} />

          {/* React Components  */}
          <Route exact path="/ReactComponents" component={ReactComponents} />
          <Route exact path="/ReactComponents/MoviePage" component={HomeApp} />
          <Route exact path="/ReactComponents/Course" component={Course} />
          <Route exact path="/ReactComponents/ParentChild" component={ParentChild} />
          <Route exact path="/ReactComponents/ReactKeys" component={ReactKeys} />
          <Route exact path="/ReactComponents/ConditionalRendering" component={ConditionalRendering} />
          <Route exact path="/ReactComponents/CustomerBank" component={CustomerBank} />
          <Route exact path="/ReactComponents/MovieList" component={MovieList} />

          {/* ReactPropsState  */}
          <Route exact path="/ReactPropsState" component={ReactPropsState} />
          <Route exact path="/ReactPropsState/Cricket" component={Cricket} />
          <Route exact path="/ReactPropsState/ChildrenProperty" component={ChildrenProperty } />
          <Route exact path="/ReactPropsState/TicketBooking" component={TicketBooking} />
          <Route exact path="/ReactPropsState/ProtoTypes" component={ProtoTypes} />
          <Route exact path="/ReactPropsState/QuantityOfItemPurchased" component={QuantityOfItemPurchased} />
          <Route exact path="/ReactPropsState/CricketHockeyPlayers" component={CricketHockeyPlayers} />
          <Route exact path="/ReactPropsState/CourseDetails" component={CourseDetails} />

          {/* React LifeCycle */}
          <Route exact path="/ReactLifeCycle" component={ReactLifeCycle}/>
          <Route exact path="/ReactLifeCycle/DisplayJSON" component={DisplayJSON}/>
          <Route exact path="/ReactLifeCycle/MovieFilter" component={MovieFilter}/>
          <Route exact path="/ReactLifeCycle/MovieSearch" component={MovieSearch}/>
          <Route exact path="/ReactLifeCycle/ComponentDidMount" component={ComponentDidMount}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;