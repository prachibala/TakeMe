import a from "../images/a.jpg";
const Card = () => {
    return (
        //BEM method
        <div className="card">
            <div className="card__upper">
                <img className="card__upper--img" src={a} alt="alu" />
            </div>
            <div className="card__lower">
                <h3 className="card__lower--title">title</h3>
                <div className="card__lower--btnGroup">
                    <button>BUY NOW</button>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};
export default Card;
