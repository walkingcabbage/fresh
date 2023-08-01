
export default function List() {

  let 상품들 = ['Tomatoes','pasta','Coconut'];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품들.map((상품,i)=>{
        return(
          <div className="food" key={i}>
            <img src={`food${i}.png`} className="food-img" />
            <h4>{상품} $40</h4>
          </div>
        )
      })}
      
    </div>
  )
}
