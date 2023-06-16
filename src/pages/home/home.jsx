import Navbar from "../../components/navbar/navbar"
import Featured from "../../components/featured/featured"
import ListRow from "../../components/listRow/listRow"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Featured />
      <ListRow />
      <ListRow />
      <ListRow />
      <ListRow />
      <ListRow />
    </div>
  )
}
