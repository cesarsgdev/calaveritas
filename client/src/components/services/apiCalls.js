import { toast } from "react-toastify";

export const updateCalaverita = (cid, payload) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  fetch(`../api/calaveritas/${cid}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      toast.success("Changes saved", {
        position: "bottom-left",
        autoClose: 5000,
      });
    })
    .catch((e) => {
      console.log(e.message);
    });
};
