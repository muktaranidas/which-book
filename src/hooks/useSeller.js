import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-muktaranidas.vercel.app/users/seller/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsSeller(data.isSeller);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isAdminLoading];
};
export default useSeller;
