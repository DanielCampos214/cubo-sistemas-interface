import * as C from "./style";
import Icon from "../../assets/icon.svg";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import apiCubo from "../../services/api";


export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório"),
    birthdate: Yup.string().required("Este campo é obrigatório"),
    address: Yup.string().required("Este campo é obrigatório"),
    creditValue: Yup.string().required("Este campo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) =>{
    const response = await apiCubo.post('users',{
      name: clientData.name,
      birthdate: clientData.birthdate,
      address: clientData.address,
      creditValue: clientData.creditValue
    }) 
    setTimeout(2000)
    alert("Usuário criado com sucesso")
    reset()
    console.log(response)
  }

  return (
    <C.Main>
      <C.Container>
        <C.Img src={Icon} />
        <C.H1>Cadastro</C.H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <C.Label>Nome</C.Label>
          <C.Input {...register("name")} />
          <C.ErrorMessage>{errors.name?.message}</C.ErrorMessage>

          <C.Label>Data de Nascimento</C.Label>
          <C.Input type="date" {...register("birthdate")} />
          <C.ErrorMessage>{errors.date?.message}</C.ErrorMessage>

          <C.Label>Endereço</C.Label>
          <C.Input type="addres" {...register("address")} />
          <C.ErrorMessage>{errors.address?.message}</C.ErrorMessage>

          <C.Label>Crédito</C.Label>
          <C.Input type="number" {...register("creditValue")} />
          <C.ErrorMessage>{errors.creditValue?.message}</C.ErrorMessage>

          <C.Button type="submit" >Registrar</C.Button>
        </form>
        <a href="/">ver lista</a>
      </C.Container>
    </C.Main>
  );
}
