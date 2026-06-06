import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`http://localhost:3000/bids/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                })
                const remaining = bids.filter(bid => bid._id ==! id)
                setBids(remaining)
            }
          });
    });
  };
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBids(data);
        });
    }
  }, [user?.email]);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center py-8">
        My Bids{bids.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Product</th>
              <th>Seller</th>
              <th>Bid Price</th>
              <th>Status</th>
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
                  <button>{bid.status}</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(bid._id)}
                    className="btn btn-outline btn-xs border-2"
                  >
                    Remove Bid
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
