import Item from '../components/item.js'
function Home(){
    return(
        <div>
            Tere
            <Item name="Item1" price="10" category="mobile"/>
            <Item name="Item2" price="20 000" category="car"/>
            <Item name="Item3" price="130" category="ring"/>
        </div>
    )
}

export default Home;