const Product = ({product}) => {
    const {name, img, price, quantity, description} = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure className='h-48'><img height={400} width={400} src={img} alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge badge-secondary">{quantity}</div>
    </h2>
    <h2 class="card-title">
      $ {price}
      <div class="badge badge-secondary">20% OFF</div>
    </h2>
    <p>{description.slice(0, 100)}</p>
    
        <div class="card-actions justify-end">
      {/* { user.role === 'admin' &&  */}
        {/* <button>
        <div class="badge badge-outline bg-red-700">REMOVE</div>
        </button> */}
      {/* }  */}
      {/* { user.role === 'editor' | user.role === 'admin' && */}
        {/* <button>
        <div class="badge badge-outline">UPDATE</div>
        </button>  */}
      {/* } */}
      <button>
        <div class="badge badge-outline">BUY</div>
      </button>
    </div>
     
  </div>
</div>
    );
};

export default Product;