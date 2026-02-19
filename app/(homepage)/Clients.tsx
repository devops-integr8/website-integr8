import LogoMarquee from './LogoMarquee'

const Clients = () => {
  return (
    <div className="flex flex-col gap-y-8 px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/3"></div>
        <h3 className="lg:w-1/3 capitalize text-3xl lg:text-4xl text-center font-bold">Our Featured Clients</h3>
        <div className="lg:w-1/3 text-end text-sm lg:text-md">Gain recognition as one of our featured partners.</div>
      </div>
      <LogoMarquee />
    </div>
  )
}

export default Clients