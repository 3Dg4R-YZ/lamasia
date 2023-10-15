import React, { useReducer, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { authReducer } from "./context/authReducer";
import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { ArrowUp } from "./components/ArrowUp";
import { AdminToggle } from "./components/admin/AdminToggle";

export const Home = () => {
  const [main, setMain] = useState(0);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, dispatch] = useReducer(authReducer, false);
  const direccion = "http://127.0.0.1:8000";

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AuthContext.Provider value={{ admin, isOpen, dispatch, direccion }}>
          <Header />
          <NavBar main={main} setMain={setMain} />
          <Main main={main} />
          <Modal />
          <ArrowUp />
          <AdminToggle admin={admin} setAdmin={setAdmin} />
        </AuthContext.Provider>
      )}
    </>
  );
};
