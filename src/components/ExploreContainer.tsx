import Tab1contenido from '../pages/Tab1Contenido';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  switch (name) {
    case "Tab 1 page":
      return(<Tab1contenido />);
      break;
  
    default:
      return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
      break;
  }
  
};

export default ExploreContainer;
