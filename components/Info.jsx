import Card from '../components/partials/CardInfo';

const h4Style ={
  fontFamily: `'Oswald-Light', sans-serif`,
}

export default function Info() {
  return (
    <section className="container">
      <h4 className='mx-4 px-4 pt-5' style={h4Style}>Office Information</h4>
      <div className="text-center container">
        <div className='row gap-5'>
          <Card 
            title={'Location'}
            description={'Some place in Florida'}
          />
          <Card 
            title={'Hours'}
            description={'Mon-Fri 9am-5pm'}
          />
          <Card 
            title={'Contact'}
            description={'555-555-5555'}
          />
        </div>
      </div>
    </section>
  )
}