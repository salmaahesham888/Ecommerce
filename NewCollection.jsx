import './NewCollection.css';
import new_collections from '../assests/new_collections';
import './NewCollection.css'
export default function NewCollection() {
  return (
    <div className='new_collections'>

      <h1>New Collections</h1>

      <div className="row">
        {new_collections.map((item) => (
          <div key={item.id} className="col-md-4 p-2">

            <div className='item'>
              <img src={item.image} alt={item.name} /> 
              <p>{item.name}</p>

              <div className="item-prices">
                <div className='item_price-new'>
                  ${item.new_price}
                </div>

                <div className='item_price-old'> 
                  ${item.old_price}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
