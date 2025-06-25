import Card from './Card';
import FooterCards from "../static/FooterCards";


const Footer = () => {

  return (
    <div className='mt-12 gap-6 grid md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-5'>
      {
        FooterCards.map(({ id, img, heading, description }) => (
          <Card key={id} img={img} heading={heading} desc={description} />
        ))
      }
    </div>
  )
}


export default Footer;