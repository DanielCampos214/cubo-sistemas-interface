import * as C from "./style";
import Icon from "../../assets/icon.svg";
import {useHistory} from 'react-router-dom'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import apiCubo from "../../services/api";


export function EditUser() {
  const {location:{
    state: {user},
  }} = useHistory()
  console.log(user)
  const schema = Yup.object().shape({
    name: Yup.string(),
    birthdate: Yup.string(),
    address: Yup.string(),
    creditValue: Yup.string(),
  });
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const updateUser = async (clientData) =>{
    try{
      const response = await apiCubo.put(`users/${user.id}`,{
        name: clientData.name,
        birthdate: clientData.birthdate,
        address: clientData.address,
        creditValue: clientData.creditValue
      }) 
      setTimeout(2000)
      alert("Usuário atualizado com sucesso"
      )
      console.log(response)
    }catch(err){
        console.log(err)
    }
    }


  return (
    <C.Main>
      <C.Container>
        <C.Img src={Icon} />
        <C.H1>Atualizar</C.H1>
        <form noValidate onSubmit={handleSubmit(updateUser)}>
          <C.Label>Nome</C.Label>
          <C.Input {...register("name")} defaultValue={user.name}/>

          <C.Label>Data de Nascimento</C.Label>
          <C.Input type="date" {...register("birthdate")} defaultValue={user.birthdate} />

          <C.Label>Endereço</C.Label>
          <C.Input type="addres" {...register("address")} defaultValue={user.address} />

          <C.Label>Crédito</C.Label>
          <C.Input type="number" {...register("creditValue")} defaultValue={user.creditValue} />

          <C.Button type="submit" >Atualizar</C.Button>
        </form>
        <a href="/">ver lista</a>
      </C.Container>
    </C.Main>
  );
}
