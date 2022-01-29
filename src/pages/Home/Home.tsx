import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

type HomeProps = {
  user?: object;
};

export const Home = (props: HomeProps) => {
  return (
    <div className="Home">
      <Header name={props.user.name} />
      <Footer name={props.user.name} />
    </div>
  );
};
