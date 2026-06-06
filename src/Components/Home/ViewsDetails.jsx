import { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";

const ViewsDetails = () => {
  const {
    _id: productId,
    image,
    description,
    title,
    price_max,
    price_min,
  } = useLoaderData();
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);
  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids ", data);
        setBids(data);
      });
  }, [productId]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const imageURL = e.target.imageURL.value;
    const bidePrice = e.target.bidePrice.value;
    const contact = e.target.contact.value;
    console.log(productId, name, email, imageURL, bidePrice, contact);
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: imageURL,
      bid_price: bidePrice,
      contact_info: contact,
      status: "pending",
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been placed",
            showConfirmButton: false,
            timer: 1500,
          })
          newBid._id = data.insertedId;
          const newBids = [...bids,newBid]
          newBids.sort((a,b)=> b.bid_price - a.bid_price)
          setBids(newBids)
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h4 className="text-xl font-bold">Product Description</h4>
              <p>{description}</p>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
              Price: ${price_max} - {price_min}
            </p>
            <button
              onClick={handleBidModalOpen}
              className="btn btn-primary w-full"
            >
              I want Buy This Product
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="text-xl font-bold text-center">
                  Give Seller Your Offered Price
                </h3>

                <form onSubmit={handleBidSubmit}>
                  <div className="flex gap-8 items-center">
                    <fieldset className="fieldset">
                      <label className="fieldset-legend">Name</label>
                      <input
                        readOnly
                        defaultValue={user?.displayName}
                        name="name"
                        className="input"
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <label className="fieldset-legend">Email</label>
                      <input
                        name="email"
                        className="input"
                        readOnly
                        defaultValue={user?.email}
                      />
                    </fieldset>
                  </div>
                  <fieldset className="fieldset">
                    <label className="fieldset-legend">Beyer Image-URL</label>
                    <input
                      type="URL"
                      name="imageURL"
                      readOnly
                      defaultValue={user?.photoURL}
                      className="input"
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <label className="fieldset-legend">Place your price</label>
                    <input name="bidePrice" type="number" className="input" />
                  </fieldset>

                  <fieldset className="fieldset">
                    <label className="fieldset-legend">Contact info</label>
                    <input name="contact" type="tel" className="input" />
                  </fieldset>

                  {/* login button */}
                  <button className="text-white bg-linear-to-r from-[#632EE3] to-[#8639f2] w-full rounded-md py-2 my-3">
                    Submit bid
                  </button>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* bids */}
      <div>
        <h3 className="font-bold text-2xl">
         
          Bids For This Products:{" "}
          <span className="text-primary">{bids.length}</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Bid Price</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={bid?.buyer_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">
                          ${bid?.bid_price}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={bid?.buyer_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">
                          ${bid?.buyer_email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>${bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs border-2">Accept Offer</button>
                    <button className="btn btn-ghost btn-xs border-2">Reject offer</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewsDetails;
