import Hero from "./Hero";
import Contacts from "./Contacts";
import VisitOurOffice from "./VisitOurOffice";
import ContactForm from "@/components/ContactForm";
import ContactMethods from "./ContactMethods";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="py-20">
        <ContactMethods />
      </div>
      <div className="py-20">
        <VisitOurOffice />
      </div>
      {/* <ContactForm /> */}
    </div>
  );
};

export default Home;
