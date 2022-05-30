import NavBar from "../components/Navbar";
import PostList from "../components/PostList";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Dashboard = ({ user }) => {
  return (
    <>
      <NavBar user={user} />

      <main>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ marginTop: "100px" }}
          >
            Journal
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Let's make the teacher's journal easier.
          </Typography>
        </Container>
      </main>
      <PostList />
    </>
  );
};

export default Dashboard;
