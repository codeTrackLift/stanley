export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-center mt-5 pt-5'>
      <p>Copyright © {currentYear}
          <span className='fw-bolder'> Stanley Cooling Corp.</span>
      </p>
    </footer>
  )
}