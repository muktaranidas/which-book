import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://b612-used-products-resale-server-side-muktaranidas.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="">
      <h2 className="text-3xl mb-6">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>

              <th>Title</th>
              <th>Email</th>
              <th>Price</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 &&
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{1 + i}</th>

                  <td>{booking.productTitle}</td>
                  <td>{booking.email}</td>
                  <td>{booking.price}</td>
                  <td>
                    {!booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-sm btn-error">Pay</button>
                      </Link>
                    )}
                    {booking.paid && (
                      <span className=" btn btn-sm btn-success">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
