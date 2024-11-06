import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import {} from "../Editor/Update.style";
import { Container } from "./Editor.style";

const validatioUpdate = yup.object().shape({
  sabor: yup.string().required("O sabor deve ser preenchido"),
  decricao: yup.string().required("A descrição deve ser preenchida"),
  categoria: yup.integer().required("A descrição deve ser preenchida"),
  valorP: yup
    .double()
    .required("O valor do produto pequeno deve ser preenchido"),
  valorM: yup.double().required("O valor do produto médio deve ser preenchido"),
  valorG: yup
    .double()
    .required("O valor do produto grande deve ser preenchido"),
});

export default function Update() {
  let navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationUpdate),
  });

  useEffect(() => {
    axios.get(`http://localhost8080/produtos/${id}`).then((response) => {
      reset(response.data);
    });
  }, []);

  const addCard = (data) => {
    axios
      .put(`http://localhost/produtos/${id}`, data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate("/editor");
      })
      .catch(() => console.log("Problemas  na requisição"));
  };

  return (
    <>
      <Header />
      <Container>
        
      </Container>

      <Footer />
    </>
  );
}
