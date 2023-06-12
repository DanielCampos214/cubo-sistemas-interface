import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Icon from "../../assets/icon.svg";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import api from "../../services/api";
import { Container, Img, Button, ButtonIcon } from "./style";

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const { data } = await api.get("/");
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  function editUser(user) {
    push("/Edit", { user });
  }
  function registerUser(user) {
    push("/Register")
  }

  async function deleteUser(user) {
    const confirmed = window.confirm("Tem certeza que deseja excluir o usuário?");
    if (confirmed) {
      try {
        await api.delete(`users/${user.id}`);
        setTimeout(2000);
        alert("Usuário excluído com sucesso");
        loadUsers(); // Atualiza a lista de usuários após exclusão
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <Img src={Icon} />
      <TableContainer component={Paper} style={{ width: "87%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">birthdate</TableCell>
              <TableCell align="right">addres</TableCell>
              <TableCell align="right">creditValue</TableCell>
              <TableCell align="right"> <ButtonIcon onClick={() => registerUser()} >+</ButtonIcon>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.birthdate}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">{user.creditValue}</TableCell>
                <TableCell align="right">
                  <Button
                    style={{ background: "#7d7dff" }}
                    onClick={() => editUser(user)}
                  >
                    editar
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    style={{ background: "#f76d6d" }}
                    onClick={() => deleteUser(user)}
                  >
                    Excluir
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
