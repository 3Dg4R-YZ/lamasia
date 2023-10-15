import React from "react";

export const AdminToggle = ({ admin, setAdmin }) => {
  return (
    <>
      <input id="admin-mode" type="checkbox" onClick={() => setAdmin(!admin)} />
      <label className="admin-mode" htmlFor="admin-mode"></label>
    </>
  );
};
