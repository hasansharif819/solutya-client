import React from 'react';
import { toast } from 'react-toastify';

const Manage = ({product}) => {
    const {name, img, price, quantity, description} = product;

    const deleteItem = _id => {
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `https://sleepy-hamlet-35110.herokuapp.com/product/${product?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
        }
    }
    const handleEdit = event => {
        event.preventDefault();

        const products = {
            name: event.target.nm.value,
            price: event.target.pr.value,
            quantity: event.target.quant.value,
            description: event.target.des.value
        }
          const url = `https://sleepy-hamlet-35110.herokuapp.com/product/${product?._id}`;
          console.log('my product');
          fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log('my product11', data)

                    toast('Successfully updated')
                    event.target.reset();
                }
            })
    }

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
      <div class="badge bg-slate-700">20% OFF</div>
    </h2>
    <p>{description.slice(0, 100)}</p>
    
        <div class="card-actions justify-end">
      
        <button onClick={() => deleteItem(product._id)}>
        <div className="badge badge-outline bg-red-700 text-white">REMOVE</div>
        </button>
        <button>
            <label
                htmlFor="booking-modal"
                className="badge badge-outline btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                >UPDATE</label>
        </button>

                    {/* form start */}
                {/* <div> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {
                        <form 
                        onSubmit={handleEdit} 
                        className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name="nm" placeholder='Name' className="input input-bordered w-full max-w-xs" />
                            <input type="text" name="pr" placeholder='Price' className="input input-bordered w-full max-w-xs" />
                            <input type="text" name="quant" placeholder='Quantity' className="input input-bordered w-full max-w-xs" />
                            <textarea type="text" name="des" rows="5" placeholder='description' className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="UPDATE" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    }
                {/* </div> */}
            </div>
        </div>
                {/* form end */}
    </div>
     
  </div>
</div>
    );
};

export default Manage;