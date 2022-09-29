import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects" id="project">
      <h2>Projects</h2>
      <div className="main_project">
        <Project
          title="Comment system"
          summary="This is a comment system that is designed to receive comment from user and get replies also, it also enable a vote count for comments"
          image="comment"
          link="https://elfque-comment.netlify.app/"
        />
        <Project
          title="Rock Paper Scissors"
          summary="A rock Paper Scissors that increases the  score of the user when user wins and decreases when user loses"
          image="rock"
          link="https://elfque-rock.netlify.app/"
        />
        <Project
          title="E-commerce website"
          summary="A Shopping website that enables a user to add items to cart and be able to view and delete from cart"
          image="E-commerce"
          link=" https://elfque-commerce.netlify.app/"
        />
        <Project
          title="Tic Tak Tok"
          summary="A Tic-Tic Tok Game that allows two players to play against eachother and record their score"
          image="Tic"
          link="https://elfque-tic-tac.netlify.app/"
        />
        <Project
          title="Rating Component"
          summary="An Interactive rating component that alows user to rate the performance of a company"
          image="rating"
          link="https://elfque-rating.netlify.app/"
        />
        <Project
          title="Simeon Game"
          summary="A Simeon Game Clone that allows a user to play and keeps track of user clicks"
          image="Simeon"
          link="https://elfque-simon.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
