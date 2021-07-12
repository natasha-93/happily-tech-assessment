import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Section from "../components/Section";
import Input from "../components/Input";

const IndexPage = () => (
  <div>
    <Header />
    <section
      className="bg-no-repeat bg-cover bg-center px-24 pt-80 pb-24"
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/images/banner.jpg')",
      }}
    >
      <h1 className="text-white text-4xl font-semibold leading-snug">
        We produce your experiences professionally, on time, and with a little
        sizzle.
      </h1>
      <h2 className="text-white text-2xl font-light pb-4 leading-snug">
        Custom solutions with a 1-team-per-client approach, 24/7
      </h2>
      <Button size="large" color="white">
        Get Started
      </Button>
    </section>

    <Section color="lightBlue" className="flex flex-row items-center">
      <h2 className="text-4xl pr-12 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
        <span className="text-black">eiusmod tempor incididunt ut labore</span>{" "}
        et dolore magna aliqua.
      </h2>
      <img
        src="/images/square.png"
        alt="image placeholder"
        className="rounded-3xl"
      />
    </Section>

    <Section>
      <SectionTitle>Experiences that we produce.</SectionTitle>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
        <Card
          image="/images/portrait.png"
          title="Virtual"
          body="Nam hendrerit nisi sed sollicitudin
          eut. Nunc posuere purus rhoncus
          pulvinar aliquam."
          ctaText="Learn More"
          ctaUrl=""
        />
        <Card
          image="/images/portrait.png"
          title="Onsite"
          body="Nam hendrerit nisi sed sollicitudin
          eut. Nunc posuere purus rhoncus
          pulvinar aliquam."
          ctaText="Learn More"
          ctaUrl=""
        />
        <Card
          image="/images/portrait.png"
          title="Hybrid"
          body="Nam hendrerit nisi sed sollicitudin
          eut. Nunc posuere purus rhoncus
          pulvinar aliquam."
          ctaText="Learn More"
          ctaUrl=""
        />
      </div>
    </Section>

    <Section>
      <SectionTitle>
        Our core teams that create special experiences.
      </SectionTitle>
      <div className="grid grid-flow-col grid-cols-5 grid-rows-1 gap-4">
        <Card
          image="/images/portrait.png"
          title="Strategy"
          ctaText="Learn More"
          ctaUrl=""
          center={true}
        />
        <Card
          image="/images/portrait.png"
          title="Creative"
          ctaText="Learn More"
          ctaUrl=""
          center={true}
        />
        <Card
          image="/images/portrait.png"
          title="Web"
          ctaText="Learn More"
          ctaUrl=""
          center={true}
        />
        <Card
          image="/images/portrait.png"
          title="Broadcast"
          ctaText="Learn More"
          ctaUrl=""
          center={true}
        />
        <Card
          image="/images/portrait.png"
          title="Experimental"
          ctaText="Learn More"
          ctaUrl=""
          center={true}
        />
      </div>
    </Section>

    <Section>
      <SectionTitle>Brands that use happily for their events.</SectionTitle>
      <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-4">
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
        <img src="/images/landscape.png" alt="placeholder image" />
      </div>
      <div className="flex justify-center mt-12">
        <Button size="large">See Case Studies</Button>
      </div>
    </Section>

    <Section color="lightBlue" className="flex justify-center flex flex-col">
      <h2 className="text-4xl text-center font-semibold pb-16 px-36">
        We save you time and save you money. We also take care of you 24/7.
      </h2>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
        <h1 className="text-7xl text-center font-bold">175</h1>
        <h3 className="text-3xl text-center">Events Produced</h3>
        <h1 className="text-7xl text-center font-bold">35K+</h1>
        <h3 className="text-3xl text-center"># of Happy Customers</h3>
        <h1 className="text-7xl text-center font-bold">45 yrs</h1>
        <h3 className="text-3xl text-center">Saved in Planning</h3>
      </div>
    </Section>

    <Section>
      <SectionTitle>Recent client work and succcesses.</SectionTitle>

      <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4">
        <img
          src="/images/portrait.png"
          className="w-full rounded-xl"
          alt="placeholder image"
        />
        <img
          src="/images/portrait.png"
          className="w-full rounded-xl"
          alt="placeholder image"
        />
        <img
          src="/images/portrait.png"
          className="w-full rounded-xl"
          alt="placeholder image"
        />
      </div>
      <div className="flex justify-center mt-8 ">
        <Button size="large">See Case Studies</Button>
      </div>
    </Section>

    <Section color="lightBlue" className="flex  flex-col justify-center">
      <SectionTitle className="leading-snug text-center">
        Let’s create an amazing event together. <br />
        <span className="text-black">Talk to a team member Today.</span>
      </SectionTitle>
      <form
        onSubmit={() => console.log("form submitted")}
        className="w-full flex flex-col justify-center px-36"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-white block uppercase tracking-wide text-xs font-bold mb-1">
              First Name
            </label>
            <Input
              type="text"
              className="block w-full shadow-xl rounded text-black pl-2"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="text-white block uppercase tracking-wide text-xs font-bold mb-1">
              Last Name
            </label>
            <Input
              type="text"
              className="block w-full shadow-xl rounded text-black pl-2"
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="text-white block uppercase tracking-wide text-xs font-bold mb-1">
              Company
            </label>
            <Input
              type="text"
              className="block w-full shadow-xl rounded text-black pl-2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Button color="white" size="large" className="mb-4">
            Submit
          </Button>
          <Button color="black" size="large">
            Download Guide
          </Button>
        </div>
      </form>
    </Section>

    <Section>
      <SectionTitle>A little bit about how we work.</SectionTitle>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-12">
        <Card image="/images/square.png" ctaUrl="" ctaText="Learn more" />
        <Card image="/images/square.png" ctaUrl="" ctaText="Learn more" />
      </div>
    </Section>

    <Footer />
  </div>
);

export default IndexPage;
