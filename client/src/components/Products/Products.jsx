import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ productList, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className={`products ${innerPage ? "innerPage" : ""}`}>
        {productList?.data?.map((item) => {
          return <Product key={item.id} data={item.attributes} id={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
