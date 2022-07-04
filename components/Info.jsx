import Card from '../components/partials/CardInfo';

export default function Info() {
  return (
    <section className="text-center container">
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

  </section>
  )
}