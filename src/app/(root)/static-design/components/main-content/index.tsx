import AuctionInfo from './aucion-info'
import AuctionDetails from './auction-details'

const MainContent = () => {
  return (
    <section className='layout mt-12'>
      <section className='layout-right self-start'>
        <AuctionInfo />
      </section>
      <aside className='layout-left space-y-5'>
        <AuctionDetails />
      </aside>
    </section>
  )
}

export default MainContent
