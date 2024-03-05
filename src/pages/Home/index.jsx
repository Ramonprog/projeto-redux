import styles from "./home.module.css";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletAddress, fetchUsers } from "../../redux/user/slice";

export function Home() {
  const dispatch = useDispatch();
  const { user, users, loading } = useSelector(
    (rootReducer) => rootReducer.user
  );
  console.log("🚀 ~ Home ~ user:", user);

  function handleDeleteAddress() {
    dispatch(deletAddress());
    console.log("passou aqui");
    alert("Endereço deletado com sucesso!");
  }

  function handleFetchUsers() {
    dispatch(fetchUsers());
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "visitante"}, bem vindo!
            </h1>

            <span>Email: {user ? user.email : "meuemail@email.com"}</span>
            {user?.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>
                    {user?.address?.location}, {user?.address?.number}
                  </p>

                  <button onClick={handleDeleteAddress}>
                    Deletar endereço
                  </button>
                </div>
              </>
            )}

            <hr />
            <br />

            <h2>Lista de usuários</h2>
            <button onClick={handleFetchUsers}>Buscar usuários</button>

            <br />
            {loading && <p>Carregando...</p>}
            {users.map((user) => (
              <div key={user.id}>
                <p>
                  ID: {user.id} | {user.name}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
