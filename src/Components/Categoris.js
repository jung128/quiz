
const Categoris = ({categoris,onSelect}) => {
  return (
    <div className="category">
      <h1>퀴즈 카테고리를 선택해 주세요</h1>
      <div className="category-wrap">
        {
          categoris.map((item,idx)=>{
            return (
            <button key={idx} 
                          onClick={()=>{onSelect(item)}}>
                            {item}
            </button>);
          })
        }
      </div>
    </div>
  );
};

export default Categoris;