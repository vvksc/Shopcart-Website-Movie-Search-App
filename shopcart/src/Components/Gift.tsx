import '../CSS/Gift.css';
 
const GiftPop = ({ pop, setPop }:{pop: boolean, setPop: any}) => {
  return pop && <div className="gift-pop">
 
  <button onClick={()=> setPop((prev: boolean) => !prev)} className="cross">X</button>
  </div>;
};
 
export default GiftPop;