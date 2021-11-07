import Category from '../components/category';
function CategoryList(props){
    return (<div>
        {props.categories.map(item => (
            <Category
            key={category.id} 
            name={category.name}
            price={category.type}/>
        ))}
        
        
    </div>)
}

export default CategoryList;